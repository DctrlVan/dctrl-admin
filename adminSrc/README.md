The adminSrc folder is for the express server.

Overview of what each file is doing:

### app.js
Main script that runs express server and socket client. Changefeed from the database is passed to the socket for real time updates.Run this file with node to start the server. (i.e. `node ./adminSrc/app.js`).

### dbQueries.js
Contains functions that calls into the event-log for more detail such as all of the paid/charged events for a specific member or task.

### dctrlDb.js
This file initializes the connection to the rethinkDb database. It exposes the changefeed as a kefir stream and also a function for inserting new events.

### events
This folder defines the events and exposes functions that create them in the database.

### fobtap
Middleware on post req from the fob readers. Requests can create events, triggers on these events are listening to the rethinkdb feed. Creating the event causes the reaction to happen. 

### mutations
This file defines mutations that determine a new state. These functions are used by the server and by vuex in each client to all maintain current state from the eventstream.

### README.md
You are here.

### router
This file defines the API and serves the web app. There is /db/ routes that wrap queries for db history, /state/ routes that serve up the current state.

### spec
This file contains the field validation functions used by the events functions to verify fields. Includes middleware that parses the body request and creates validated event from proper formatted request. TODO: reuse this on frontend like the mutations.

### state.js
Backend tracking of the current state. On startup it loads all of the history and runs through it to get to the current state. Once up to date it listens to the database changefeed to keep up to date.
