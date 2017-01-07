## Welcome to Imagine-X
Welcome to the Imagine-x development site. If you want to help out with the process, you can get started by following the build instructions below. Once you have you will be able to make changes to the project locally, and see the changes immeadiately appear in your browser. When you push them to the main repository, all the   If you have problems getting set up, make an issue and I'll get back to you.

We are not only designing our website, we are in the process of trying to define who we are, what we believe, and what we are trying to accomplish. Welcome!

### Ad Copy Help

If you have ideas for our values are goals. Please add them to files within the ./src/vuex/imaginexCopy folder.

If you want to call attention to incompetence, corruption, stupidity, or other activities far too often associated with our politicians: Add your ideas to the ./src/vuex/attackAdCopy folder.


### Development Help

If you are a website/javascript developer, take a moment read http://vuejs.org/ . It is a framework that breaks websites down into components. Each component has a template, a script, and a style tag. Feel free to experiment with major changes to styles/structure. All the things will change.

### Build Setup (mac, linux)
```
# clone the repo
git clone https://github.com:imagine-x/website.git
cd website

# install dependencies
npm install

# serve with hot reload at localhost:8080
MAILAPIKEY=<API KEY> npm run dev

# visit localhost:8080 in your browser
```

### Installing Node
```
# Get Node version manager (nvm)
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
# or
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash

nvm install stable
```
### Development Deploy:
www.imagine-x.github.io


### Server side API's

## Custom modules

* ./services/databaseService
* ./services/contactsService
* ./services/mailService
* ./services/slackService

To use a module, require and instantiate with `new` and constructor parameters:
`var contactsController = new (require('./services/<module>'))(<parameter>);`


# databaseService

* constructor (filename)
  * param: (filename) of the database file

* select(query, params) - runs select queries
  * param: query - string of the sql, can have template with $parameters `SELECT * FROM first_form where email = $email`
  * param: params - object of parameters `{$email : 'email@email.com'}`
  * returns: promise with the array of results

* execute(query, params) - runs insert, update, delete and DML queries
  * param: query - string of the sql, can have template with $parameters `INSERT INTO first_form (email) VALUES ($email)`
  * param: params - object of parameters `{$email : 'email@email.com'}`
  * returns: promise that provides no output when resolved, but returns an error variable when rejected

# contactsService
* constructor (database)
  * param: (database) service instance

* add(contact) - adds to mailing list provider
  * param: contact - object ```{
      'name' : 'first last',
      'email' : 'email@email.com',
      'postal_code' : 'V6A 1E7',
      'subscribed' : true,
      'clientIP' : '127.0.0.1',
      'country' : 'CAN',
      'timestamp' : '2016-11-26 23:12'
  }```
  * returns: promise with response from provider

* save(contact) - saves contact to database
  * param: contact object
  * returns: promise that provides no output when resolved, but returns an error variable when rejected


# mailService

* sendWelcome(contact) - sends a welcome email from template
  * param: contact - object
  * returns: promise with response from email provider

# slackService

* notify(contact) - sends message to the system updates slack channel
  * param: contact - object
  * returns: promise with response from slack
