# Overview

This is a movie library based on the following technologies:

-   MongoDB
-   ExpressJS
-   ReactJS
-   NodeJS

# Install dependencies

## Server NPM install

You need to install all the required npm packages for the server. Run the following command in the root folder:

-   `npm install`

## Client NPM install

You need to install all the required npm packages for the client. Run the following command in the client folder:

-   `cd client`
-   `npm install`

# Configuration

Create a new file `default.json` under `/config`
Then copy/paste the following code:

```
{
    "mongoURI": "mongodb+srv://<username>:<password>@movie-library.oci6qcr.mongodb.net/?retryWrites=true&w=majority"
}
```

Replace the `username` and `password` with the ones from MongoDB.

# How to run

## Server

To start the server go to the root folder and run the following command:

-   `npm run app`

## Client

To start the client go to the `client` folder and run the following command:

-   `npm start`

## Environment

After you start the server and the client, the website will be accessible under:

-   `http://localhost:3000/`

# MongoDB

tbd.

# Structure

tbd.
