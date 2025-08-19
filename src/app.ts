import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import logger from'morgan';
import db from './models/index'
import helmet from 'helmet';

let app = express();

//Configure Express
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Serve the static files from the React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(
  cors({
    origin: "*",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS",
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
);

app.all('/api/*', function(req: Request, res: Response, next: NextFunction) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});


// //Routes
// app.use('/', (req, res) => {
//   return res.render('default/index');
// });

app.get('/api', (req: Request, res: Response) => {
  return res.status(200).json({ msg: 'Welcome to the API.'});
});

// Handles any requests that don't match the ones above
app.get('*', (req: Request, res: Response) =>{
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


app.get((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send('Something is broken!')
})

const port = (process.env.PORT || 5050);

const server = app.listen(port, () => console.log(`Server Running on ${port}`));

module.exports = app;
