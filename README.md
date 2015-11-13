# dulcetgnome [![Build Status](https://travis-ci.org/dulcetgnome/dulcetgnome.svg?branch=master)](https://travis-ci.org/dulcetgnome/dulcetgnome)
Greenfield Project

Web application that enables users to search across the globe for dive bars and add their favorite dive bars to the map

## Team

  - Product Owner: Tim Scheys
  - Scrum Master: Edgar Padon
  - Development Team Members: Tommy Sander, Bowen Yang, Tim Scheys, Edgar Pabon

## Table of Contents

1. [Team](#team)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)



## Requirements

- Node 0.10.x
- Redis 2.6.x
- Postgresql 9.1.x

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
grunt watch
```

###Testing & Building

We use grunt for managing all of our tests. Running `grunt test` will lint and run all test in the test directory.

`grunt test-server`: Will run tests in test/server directory
`grunt test-client`: Will run tests in test/client directory

Run `grunt watch` to listen for changes. If sass files are added or changed, it will compile out to style.css. If javascript is changed it will run linter, the correct tests (server or client), and then uglify if passing. Notifications are enabled for failing tests, or linting errors.

Look at the Gruntfile.js for more tasks.

All files are built to the client/build/ directory. The javascript file and css file located there should be the two includes in the html. Libraries are not being minified and should be included per usual with preference towards their minified versions. 

In addition, we are using Travis for continuous integration. Whenever a PR is opened, Travis will run all tests, lint, and create a temporary database (for further testing). If this passes the status of the PR will update from 'pending' to 'open'.


### Roadmap

View the project roadmap [here](https://github.com/CrimeVisualizer/DiveStop/issues)



