# load test "Performance test of Bstackdemo" (globalVars:[], executeTearDownThreadsOnShutdown: )
   Comments: Here Load, stres and spike test performed.
# run "Thread Group Load" (disabled)  ( threads: "", loops: "1", ramp-up: "" )
   Comments: Thread Group for load testing. Loads: 200, 400, 600, 1000.
- http request "Dashboard" (method: "GET", url: " https://bstackdemo.com:/", body: [ ] , upload-files: [ ] )
- http request "Signin" (method: "GET", url: " https://bstackdemo.com:/signin", body: [ ] , upload-files: [ ] )
- http request "Favourites" (method: "GET", url: " https://bstackdemo.com:/favourites", body: [ ] , upload-files: [ ] )
- http request "Orders" (method: "GET", url: " https://bstackdemo.com:/orders", body: [ ] , upload-files: [ ] )
- http request "Offers" (method: "GET", url: " https://bstackdemo.com:/offers", body: [ ] , upload-files: [ ] )
write samples "Summary Report" <br/>
write samples "View Results Tree"<br/>
write samples "Graph Results"<br/>
write samples "Aggregate Graph" (filename: "Load_Test2.csv", xml: false, errorsOnly: false, successOnly: )<br/>
   Comments: Load: 200, 400, 600, 1000.<br/>
   
# run "Thread Group Stress" (disabled)  ( threads: "", loops: "1", ramp-up: "" )
   Comments: Thread Group for Stress testing. Loads: 500, 1000, 1500, 3000, 5000
- http request "Dashboard" (method: "GET", url: " https://bstackdemo.com:/", body: [ ] , upload-files: [ ] )
- http request "Signin" (method: "GET", url: " https://bstackdemo.com:/signin", body: [ ] , upload-files: [ ] )
- http request "Favourites" (method: "GET", url: " https://bstackdemo.com:/favourites", body: [ ] , upload-files: [ ] )
- http request "Orders" (method: "GET", url: " https://bstackdemo.com:/orders", body: [ ] , upload-files: [ ] )
- http request "Offers" (method: "GET", url: " https://bstackdemo.com:/offers", body: [ ] , upload-files: [ ] )
write samples "Summary Report" <br/>
write samples "View Results Tree" <br/>
write samples "Graph Results" <br/>
write samples "Aggregate Graph" (filename: "Stress_Test.csv", xml: false, errorsOnly: false, successOnly: )<br/>
   Comments: Thread Group for Stress testing. Loads: 500, 1000, 1500, 3000, 5000<br/>
   
# run "Thread Group Spike" ( threads: "", loops: "1", ramp-up: "" )
   Comments: Thread Group for Spike testing. Loads: 500, 600, 500, 2000, 500,
- http request "Dashboard" (method: "GET", url: " https://bstackdemo.com:/", body: [ ] , upload-files: [ ] )
- http request "Signin" (method: "GET", url: " https://bstackdemo.com:/signin", body: [ ] , upload-files: [ ] )
- http request "Favourites" (method: "GET", url: " https://bstackdemo.com:/favourites", body: [ ] , upload-files: [ ] )
- http request "Orders" (method: "GET", url: " https://bstackdemo.com:/orders", body: [ ] , upload-files: [ ] )
- http request "Offers" (method: "GET", url: " https://bstackdemo.com:/offers", body: [ ] , upload-files: [ ] )
write samples "Summary Report" <br/>
write samples "View Results Tree" <br/>
write samples "Graph Results" <br/>
write samples "Aggregate Graph" (filename: " Spike_Test.csv", xml: false, errorsOnly: false, successOnly: ) <br/>
   Comments: Thread Group for Spike testing. Loads: 500, 600, 500, 2000, 500,<br/>
