import express, { response } from 'express';
import User from '../models/user.js';
const router = express.Router();

router.post("/users", async(req, res) => {

    const user = new User(req.body);

    try {
    await user.save(); 
    res.send(user);      
    } catch (error) {
        res.status(500).send(error);
    }

});

router.get("/users" ,async(req , res) => {

    try {
       const users =  await User.find({},{_id : 1 , username : 1 }) 
        res.send(users);      
        } catch (error) {
            res.status(500).send(error);
        }


})

export default router;