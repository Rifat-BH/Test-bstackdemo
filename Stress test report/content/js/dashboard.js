/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 53.30787920860812, "KoPercent": 46.69212079139188};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.23721797986810136, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.4444556859571024, 500, 1500, "Orders"], "isController": false}, {"data": [0.0412103987294157, 500, 1500, "Signin"], "isController": false}, {"data": [0.01653125, 500, 1500, "Dashboard"], "isController": false}, {"data": [0.40019011406844107, 500, 1500, "Favourites"], "isController": false}, {"data": [0.46206156048675734, 500, 1500, "Offers"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 57620, 26904, 46.69212079139188, 24439.452481777087, 0, 1026159, 3417.0, 29303.9, 29752.95, 30161.99, 27.73595295766729, 167.77105918761265, 1.7684323130470656], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Orders", 9884, 3917, 39.62970457304735, 1290.398219344397, 0, 71463, 498.0, 2998.5, 4416.0, 9732.15, 4.760959744746278, 17.021678008005097, 0.34249202332118844], "isController": false}, {"data": ["Signin", 11963, 5982, 50.00417955362367, 26184.44244754653, 83, 1026159, 7551.0, 35222.0, 72276.79999999993, 476216.36, 5.760262709966945, 89.70041152257183, 0.34569348076261003], "isController": false}, {"data": ["Dashboard", 16000, 9161, 57.25625, 65729.13618750001, 508, 1025166, 29739.0, 85226.19999999998, 489078.9, 489671.99, 7.701757155895117, 26.34330659991249, 0.38519315525587167], "isController": false}, {"data": ["Favourites", 9994, 4002, 40.04402641584951, 2020.372723634175, 55, 74546, 631.0, 4985.0, 7782.25, 15421.0, 4.8135669957109455, 17.90083137313573, 0.3551158598700038], "isController": false}, {"data": ["Offers", 9779, 3842, 39.288270784333776, 1057.8471213825524, 1, 74091, 456.0, 2159.0, 3438.0, 8429.200000000095, 4.710814109993825, 16.867103073476223, 0.34074417790055406], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 5, 0.018584597085935177, 0.008677542519958347], "isController": false}, {"data": ["504/Gateway Time-out", 270, 1.0035682426404995, 0.4685872960777508], "isController": false}, {"data": ["502/Bad Gateway", 1, 0.0037169194171870353, 0.0017355085039916696], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.ConnectionClosedException/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 28,478; received: 12,034)", 2, 0.007433838834374071, 0.003471017007983339], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 6254, 23.24561403508772, 10.8538701839639], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.ConnectionClosedException/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 28,478; received: 16,130)", 27, 0.10035682426404996, 0.046858729607775075], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.ConnectionClosedException/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 28,478; received: 20,226)", 21, 0.07805530776092774, 0.03644567858382506], "isController": false}, {"data": ["Non HTTP response code: javax.net.ssl.SSLHandshakeException/Non HTTP response message: Remote host terminated the handshake", 16583, 61.63767469521261, 28.779937521693856], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: bstackdemo.com:443 failed to respond", 3741, 13.9049955396967, 6.492537313432836], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 57620, 26904, "Non HTTP response code: javax.net.ssl.SSLHandshakeException/Non HTTP response message: Remote host terminated the handshake", 16583, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 6254, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: bstackdemo.com:443 failed to respond", 3741, "504/Gateway Time-out", 270, "Non HTTP response code: org.apache.http.ConnectionClosedException/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 28,478; received: 16,130)", 27], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["Orders", 9884, 3917, "Non HTTP response code: javax.net.ssl.SSLHandshakeException/Non HTTP response message: Remote host terminated the handshake", 3814, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 100, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 2, "502/Bad Gateway", 1, "", ""], "isController": false}, {"data": ["Signin", 11963, 5982, "Non HTTP response code: javax.net.ssl.SSLHandshakeException/Non HTTP response message: Remote host terminated the handshake", 3858, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 1969, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: bstackdemo.com:443 failed to respond", 57, "504/Gateway Time-out", 45, "Non HTTP response code: org.apache.http.ConnectionClosedException/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 28,478; received: 16,130)", 27], "isController": false}, {"data": ["Dashboard", 16000, 9161, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 4037, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: bstackdemo.com:443 failed to respond", 3639, "Non HTTP response code: javax.net.ssl.SSLHandshakeException/Non HTTP response message: Remote host terminated the handshake", 1260, "504/Gateway Time-out", 225, "", ""], "isController": false}, {"data": ["Favourites", 9994, 4002, "Non HTTP response code: javax.net.ssl.SSLHandshakeException/Non HTTP response message: Remote host terminated the handshake", 3873, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 84, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: bstackdemo.com:443 failed to respond", 45, "", "", "", ""], "isController": false}, {"data": ["Offers", 9779, 3842, "Non HTTP response code: javax.net.ssl.SSLHandshakeException/Non HTTP response message: Remote host terminated the handshake", 3778, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 64, "", "", "", "", "", ""], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
