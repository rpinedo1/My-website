import express from 'express';
// importing all the route handlers
import * as routes from './routes';
import * as db from './db/connect';


const app = express();
const port = 5001;

// middleware
// app.use -> the function passed in will get called on every request
// express.json() -> will convert the reponse into a json object
app.use(express.json());

Object.values(routes).forEach((route) => {
  console.log(route);
  // grabbing the objects from the routes folder
  // e.g { method: 'get', path: '/questions', handler: [Function: handler] } 
  // app['get']('/questions', handlerFunction)
  app[route.method](route.path, route.handler);

});






// on our express app when a get request is made to 'url/test' use the handler passed in
app.get('/test', (req, res) => {
  res.status(200);
  res.send({
    success: true,
  });
});

const start = async () => {
  
  // waiting for database to connect (using the function we created in db/connect.js)
  await db.connect();
  // start server
  app.listen(port);

  console.log(`server listening on port: ${port}`)
}

start();

// to run app on dev mode run : 'npm run dev'