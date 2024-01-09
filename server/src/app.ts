import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session, * as expressSession from 'express-session';
import MySQLStoreClass from 'express-mysql-session';
import flash from 'express-flash';
import passport from 'passport';
import userRoutes from './routes/userRoutes';
import productsRoutes from './routes/productsRoutes';
import ordersRoutes from './routes/ordersRoutes'
import passportConfig from './config/passport';
import {ensureAuthenticated} from './middleware/authenticate'
import dotenv from 'dotenv';
import { resolve } from 'path';

const app = express();
const envPath = resolve(__dirname, '../.env');
const port = process.env.PORT || 3001;

dotenv.config({ path: envPath });
passportConfig(passport);

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);

const MySQLStore = MySQLStoreClass(expressSession);
const sessionStore = new MySQLStore({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'ShopDB',
});

app.use(flash());

app.use(
    session({
        secret: process.env.SESSIONS_SECRET!,
        resave: true,
        saveUninitialized: true,
        store: sessionStore,
    })
);

app.use(cookieParser(process.env.SESSIONS_SECRET));

app.use(passport.initialize());

app.use('/products', productsRoutes);
app.use('/user', userRoutes);
app.use('/orders',ensureAuthenticated, ordersRoutes);


app.listen(port, () => {
    console.log(`Server is running now on ${port}...`);
});