You must have previously installed mongodb on your system.

> On Windows

Add the mongo path as a local variable to use cmd or go to the mongodb / bin folder and shift + click
right and open the power shell in that directory.

Environment variables> Path> Edit> Add "C:\mongodb\bin" (your path)

Now, you will have the mongo command in any path

Inside the project folder start a cmd, bash, etc and run

```
mongo < file.js
```

This returns something like that

```
$ mongo < optica-script.js
MongoDB shell version v4.4.6
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
MongoDB server version: 4.4.6
connection to localhost:27017
-------------- Connecting to database --------------
optica
-------------- Deleting database --------------
{ "dropped" : "optica", "ok" : 1 }
-------------- Creating collections --------------
{ "ok" : 1 }
{ "ok" : 1 }
{ "ok" : 1 }
-------------- Creating Suppliers --------------
{ "acknowledged" : true, "insertedIds" : [ 0, 1 ] }
-------------- Creating Costumers --------------
{ "acknowledged" : true, "insertedIds" : [ 0, 1 ] }
-------------- Creating Glasses --------------
{ "acknowledged" : true, "insertedIds" : [ 0, 1 ] }
-------------- End script --------------
bye
```

It connects to the established database, deletes it if it exists and creates the collections with the documents in the file.js