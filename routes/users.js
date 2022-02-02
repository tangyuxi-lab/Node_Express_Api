import express from "express";

import {createUser} from "../controllers/users.js";
const router = express.Router();

let users = [
    {
        firstName : "John",
        lastName : "Doe",
        age : 25
    },
    {
        firstName : "yuxi",
        lastName : "Tang",
        age: 24
    }
]

router.get('/', (req, res) =>{
    res.send(users);
  
});

router.get('/:id',(req, res) => {
    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id );

    res.send(foundUser);
})

router.post('/',createUser)

router.delete('/:id' , (req, res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id !== id);

    res.send('Delete successfully!')
})

router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id = id);
    if(firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;
    res.send(user);
})

export default router;