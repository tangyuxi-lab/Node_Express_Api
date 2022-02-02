import {v4 as uuid4} from 'uuid';
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
export const createUser = (req, res) => {
    const user = req.body;
    const userId = uuid4();
    const userWithId = {...user, id: userId};
    users.push(userWithId);
    res.send(`User with the name ${user.firstName} added to the database`);
}

export const getUser = (req, res) =>{
    res.send(users);
}

export const findUser = (req, res) => {
    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id );

    res.send(foundUser);
}

export const deleteUser  =(req, res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id !== id);

    res.send('Delete successfully!')
}

export const updateUser = (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id = id);
    if(firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;
    res.send(user);
}