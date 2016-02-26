To test the failure:

1. npm install
2. start mongo in a terminal
3. run node index.js 
4. send a REST CURL 

curl -X POST -H 'X-Parse-Application-ID: hello' -H 'X-Parse-Client-Key: world' http://localhost:1337/functions/hello

 -> notice the result `{"code":141,"error":{"message":"unauthorized"}}`
 
 Working version:
 run JAVASCRIPT_KEY=h node index.js 
 
 run the curl
 notice the result `{"result":[]}` the query is run and returns nothing