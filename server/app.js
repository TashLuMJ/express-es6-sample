import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// ADD THE NEW ROUTE HERE
app.get('/', (req, res) => {
    res, send('My name is Mingjun Lu, I am student at Curtin.');
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
