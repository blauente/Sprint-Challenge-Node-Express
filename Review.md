# Review Questions

## What is Node.js?
Node is a platform to run JavaScript outside of the browser, for instance to run a server based on JavaScript.
## What is Express?
Express is a web app framework that extends Node's web server. It sits on Node's http server module and gives abilities like routing and support for middleware.
## Mention two parts of Express that you learned about this week.
Middleware and Routers
## What is Middleware?
Functions for things like security or logging or performing a specific task to the request and response objects and in turn either return the response or call the next middleware.
## What is a Resource?
In REST, everything is a resource. It is something that can be accessed from a server at a particular endpoint (a CRUD method to a URL). For example, an array of Smurf objects or an array of user objects.
## What can the API return to help clients know if a request was successful?
A status code of 200, meaning "OK", or a 201, meaning "created".
## How can we partition our application into sub-applications?
Using express Routers
## What is express.json() and why do we need it?
Built-in middleware that parses JSON content out of the request body.