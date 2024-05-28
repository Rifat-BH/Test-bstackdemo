<!DOCTYPE HTML><html xmlns:jmeter="http://jmeter.apache.org/">
   <title>Schematic view of Test Plan</title>
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <style>
ul.tree, ul.tree ul {
    list-style-type: none;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAKAQMAAABPHKYJAAAAA1BMVEWIiIhYZW6zAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH1ggGExMZBky19AAAAAtJREFUCNdjYMAEAAAUAAHlhrBKAAAAAElFTkSuQmCC') repeat-y;
    margin: 0;
    padding: 0;
}
ul.tree ul {
    margin-left: 10px;
}
ul.tree li {
    margin: 0;
    padding: 0 12px;
    line-height: 20px;
    background:  url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAUAQMAAACK1e4oAAAABlBMVEUAAwCIiIgd2JB2AAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9YIBhQIJYVaFGwAAAARSURBVAjXY2hgQIf/GTDFGgDSkwqATqpCHAAAAABJRU5ErkJggg==') no-repeat;
    color: #369;
}
ul.tree li:last-child {
    background: #fff url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAUAQMAAACK1e4oAAAABlBMVEUAAwCIiIgd2JB2AAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9YIBhQIIhs+gc8AAAAQSURBVAjXY2hgQIf/GbAAAKCTBYBUjWvCAAAAAElFTkSuQmCC') no-repeat;
}
</style>
   </head>
   <body>
      <ul class="tree" id="tree">
         <li><b>load test </b>
            "Performance test of Bstackdemo" 
            (globalVars:[],
            executeTearDownThreadsOnShutdown: )
            <br>
            &nbsp;&nbsp;&nbsp;Comments: <i style="color:green">Here Load, stres and spike test performed.</i></li>
         <li>
            <ul>
               <li><b>run</b>
                  "Thread Group Load" <del>(disabled)</del>&nbsp;
                  
                  (
                  threads: "",
                  loops: "1",
                  ramp-up: ""
                  )
                  <br>
                  &nbsp;&nbsp;&nbsp;Comments: <i style="color:green">Thread Group for load testing. Loads: 200, 400, 600, 1000. </i></li>
               <li>
                  <ul>
                     <li><b>http request</b>
                        "Dashboard" 
                        (method: "GET",
                        url: "
                        https://bstackdemo.com:/",
                        
                        body: [
                        
                        ]
                        ,
                        upload-files: [
                        
                        ]
                        )
                        </li>
                     <li><b>http request</b>
                        "Signin" 
                        (method: "GET",
                        url: "
                        https://bstackdemo.com:/signin",
                        
                        body: [
                        
                        ]
                        ,
                        upload-files: [
                        
                        ]
                        )
                        </li>
                     <li><b>http request</b>
                        "Favourites" 
                        (method: "GET",
                        url: "
                        https://bstackdemo.com:/favourites",
                        
                        body: [
                        
                        ]
                        ,
                        upload-files: [
                        
                        ]
                        )
                        </li>
                     <li><b>http request</b>
                        "Orders" 
                        (method: "GET",
                        url: "
                        https://bstackdemo.com:/orders",
                        
                        body: [
                        
                        ]
                        ,
                        upload-files: [
                        
                        ]
                        )
                        </li>
                     <li><b>http request</b>
                        "Offers" 
                        (method: "GET",
                        url: "
                        https://bstackdemo.com:/offers",
                        
                        body: [
                        
                        ]
                        ,
                        upload-files: [
                        
                        ]
                        )
                        </li>
                     <li><b>write samples</b>
                        "Summary Report" </li>
                     <li><b>write samples</b>
                        "View Results Tree" </li>
                     <li><b>write samples</b>
                        "Graph Results" </li>
                     <li><b>write samples</b>
                        "Aggregate Graph" 
                        (filename: "Load_Test2.csv",
                        xml: false,
                        errorsOnly: false,
                        successOnly: )
                        <br>
                        &nbsp;&nbsp;&nbsp;Comments: <i style="color:green">Load: 200, 400, 600, 1000. </i></li>
                  </ul>
               </li>
               <li><b>run</b>
                  "Thread Group Stress" <del>(disabled)</del>&nbsp;
                  
                  (
                  threads: "",
                  loops: "1",
                  ramp-up: ""
                  )
                  <br>
                  &nbsp;&nbsp;&nbsp;Comments: <i style="color:green">Thread Group for Stress testing. Loads: 500, 1000, 1500, 3000, 5000</i></li>
               <li>
                  <ul>
                     <li><b>http request</b>
                        "Dashboard" 
                        (method: "GET",
                        url: "
                        https://bstackdemo.com:/",
                        
                        body: [
                        
                        ]
                        ,
                        upload-files: [
                        
                        ]
                        )
                        </li>
                     <li><b>http request</b>
                        "Signin" 
                        (method: "GET",
                        url: "
                        https://bstackdemo.com:/signin",
                        
                        body: [
                        
                        ]
                        ,
                        upload-files: [
                        
                        ]
                        )
                        </li>
                     <li><b>http request</b>
                        "Favourites" 
                        (method: "GET",
                        url: "
                        https://bstackdemo.com:/favourites",
                        
                        body: [
                        
                        ]
                        ,
                        upload-files: [
                        
                        ]
                        )
                        </li>
                     <li><b>http request</b>
                        "Orders" 
                        (method: "GET",
                        url: "
                        https://bstackdemo.com:/orders",
                        
                        body: [
                        
                        ]
                        ,
                        upload-files: [
                        
                        ]
                        )
                        </li>
                     <li><b>http request</b>
                        "Offers" 
                        (method: "GET",
                        url: "
                        https://bstackdemo.com:/offers",
                        
                        body: [
                        
                        ]
                        ,
                        upload-files: [
                        
                        ]
                        )
                        </li>
                     <li><b>write samples</b>
                        "Summary Report" </li>
                     <li><b>write samples</b>
                        "View Results Tree" </li>
                     <li><b>write samples</b>
                        "Graph Results" </li>
                     <li><b>write samples</b>
                        "Aggregate Graph" 
                        (filename: "Stress_Test.csv",
                        xml: false,
                        errorsOnly: false,
                        successOnly: )
                        <br>
                        &nbsp;&nbsp;&nbsp;Comments: <i style="color:green">Thread Group for Stress testing. Loads: 500, 1000, 1500, 3000, 5000</i></li>
                  </ul>
               </li>
               <li><b>run</b>
                  "Thread Group Spike" 
                  (
                  threads: "",
                  loops: "1",
                  ramp-up: ""
                  )
                  <br>
                  &nbsp;&nbsp;&nbsp;Comments: <i style="color:green">Thread Group for  Spike  testing. Loads: 500, 600, 500, 2000, 500, </i></li>
               <li>
                  <ul>
                     <li><b>http request</b>
                        "Dashboard" 
                        (method: "GET",
                        url: "
                        https://bstackdemo.com:/",
                        
                        body: [
                        
                        ]
                        ,
                        upload-files: [
                        
                        ]
                        )
                        </li>
                     <li><b>http request</b>
                        "Signin" 
                        (method: "GET",
                        url: "
                        https://bstackdemo.com:/signin",
                        
                        body: [
                        
                        ]
                        ,
                        upload-files: [
                        
                        ]
                        )
                        </li>
                     <li><b>http request</b>
                        "Favourites" 
                        (method: "GET",
                        url: "
                        https://bstackdemo.com:/favourites",
                        
                        body: [
                        
                        ]
                        ,
                        upload-files: [
                        
                        ]
                        )
                        </li>
                     <li><b>http request</b>
                        "Orders" 
                        (method: "GET",
                        url: "
                        https://bstackdemo.com:/orders",
                        
                        body: [
                        
                        ]
                        ,
                        upload-files: [
                        
                        ]
                        )
                        </li>
                     <li><b>http request</b>
                        "Offers" 
                        (method: "GET",
                        url: "
                        https://bstackdemo.com:/offers",
                        
                        body: [
                        
                        ]
                        ,
                        upload-files: [
                        
                        ]
                        )
                        </li>
                     <li><b>write samples</b>
                        "Summary Report" </li>
                     <li><b>write samples</b>
                        "View Results Tree" </li>
                     <li><b>write samples</b>
                        "Graph Results" </li>
                     <li><b>write samples</b>
                        "Aggregate Graph" 
                        (filename: " Spike_Test.csv",
                        xml: false,
                        errorsOnly: false,
                        successOnly: )
                        <br>
                        &nbsp;&nbsp;&nbsp;Comments: <i style="color:green">Thread Group for Spike testing. Loads: 500, 600, 500, 2000, 500, </i></li>
                  </ul>
               </li>
            </ul>
         </li>
      </ul>
   </body>
</html>
