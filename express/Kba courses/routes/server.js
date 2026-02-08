import express, { json } from 'express';
import adminRoutes from './routes/kba_admin_routes.js';
import userRoutes from './routes/kba_user_routes.js';
import {user} from './map.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'

dotenv.config()
const app = express();
const port = 8000;

app.use(cookieParser())
app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.status(200).send('Homepage');
});
app.get('/certi', (req, res) => {
    res.status(200).send('CertiAPP homepage');
});
app.get('/contacts', (req, res) => {
    res.status(200).send('Contacts');
});

app.post('/signup', async (req, res) => {
    try {
        const { email, name, password, role } = req.body;
        console.log(email, name, password, role);
        const hash_passwd = await bcrypt.hash(password,10)
        if(!user.has(email)){
            user.set(email,{name,hash_passwd,role})
            const token = jwt.sign(
                {email,role},
                process.env.JWT_SECRET_KEY,
                {expiresIn: '1h'}
            )
            if(token){
                res.status(200).cookie("kba_token", token,{
                httpOnly:true
                }).json({message:'login success'})
            }
        }else{
            res.status(400).send('Email already existed!');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Signup failed');
    }
});

app.post('/login',async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send('All fields are required');
        }else{
            if(user.has(email)){
                let usr = user.get(email)
                let hashed_passwd = usr.hash_passwd
                let result = await bcrypt.compare(password, hashed_passwd)
                if(result){
                    return res.status(200).send('logged!')
                }else{
                    return res.status(400).send('password incorrect')
                }
            }else{
                return res.status(401).send('invalid user')
            }
        }

    } catch (error) {
        console.error(error);
        res.status(401).send('Login failed');
    }
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});