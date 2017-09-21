The adminSrc folder is for the express server.

Overview of what each file is doing:

### app.js
Main script that runs express server and socket client. Changefeed from the database is passed to the socket for real time updates.Run this file with node to start the server. (i.e. `node ./adminSrc/app.js`).

### dbQueries.js
Contains functions that calls into the event-log for more detail such as all of the paid/charged events for a specific member or bounty.

### dctrlDb.js
This file initializes the connection to the rethinkDb database. It exposes the changefeed as a kefir stream and also a function for inserting new events.

### events
This folder defines the events and exposes functions that create them in the database.

### mutations.js
This file defines mutations that determine a new state. These functions are used by the server and by vuex in each client to all maintain current state from the eventstream.

### README.md
You are here.

### router.js
This file defines the API and serves the web app. There is /db/ routes that wrap queries for db history, /state/ routes that serve up the current state and /events/

### spec.js
This file contains the field validation functions used by the events functions to verify fields. Would like to think of a way to be able to use this on frontend like the mutations.

### state.js
Backend tracking of the current state. On startup it loads all of the history and runs through it to get to the current state. Once up to date it listens to the database changefeed to keep up to date.
