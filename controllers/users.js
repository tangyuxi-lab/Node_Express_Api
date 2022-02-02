import {v4 as uuid4} from 'uuid';
export const createUser = (req, res) => {
    const user = req.body;
    const userId = uuid4();
    const userWithId = {...user, id: userId};
    users.push(userWithId);
    res.send(`User with the name ${user.firstName} added to the database`);
}