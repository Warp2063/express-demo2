# Express Demo 2

This is a demonstration of an Express server API containing a small database. By entering different URL endpoints, we can query the database via request.params or request.query and return JSON data.

## Prerequisites

- Requires node.js to be installed locally.
- Run `npm i` to install additional necessary packages.
- Create an `.env` file in the root folder containing an environment variable for PORT. For example, `PORT=8080`.

## Running

- Run the server from the command line via `npx nodemon server`.
- In your web browser, navigate to `localhost:XXXX` where XXXX is the port number you assigned it in the .env file. It should return the root endpoint, which is simply a welcome message identifying the API.

## Using the API

There are four endpoints available with this API - one root endpoint, and three that return JSON structures containing data on one or more Beasts:

- `/` - root endpoint, returns a welcome message identifying the API.
- `/beasts/keyword/:keyword` - requests.params endpoint for number of horns, where `:keyword` should be replaced with a keyword to search for. For example: `localhost:8080/keyword/unicorn` will return all Beasts that have the keyword "unicorn".
- `/beasts/horns/:numHorns` - requests.params endpoint for number of horns, where `:numhorns` should be replaced with a number of horns to search for. For example: `localhost:8080/horns/2` will return all Beasts that have two horns.
- `/beasts` - requests.query endpoint supporting zero or more queries.
  - If no query is specified, it will return all Beasts in the database. `localhost:8080/beasts`
  - If a query is specified, it will return all Beasts that match the query. For example, `localhost:8080/beasts/?keyword=unicorn` will return all Beasts that have a keyword of "unicorn".
  - Multiple queries can be specified, separating each query with an ampersand. For example, `http://localhost:8080/beasts/?keyword=chameleon&horns=3&_id=18` will return all Beasts that have a keyword of "chameleon" and three horns with the ID number 18.
