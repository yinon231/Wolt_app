const { users } = require('../data/data');
const fs=require('fs');
exports.usersController = {
    getUsers(req, res) {
        res.json("Get an User");
        res.json(users);
    },
    getUserbyId(req, res) {
        res.json("Get an User");
        const {id} = req.params;
        const user = users.find(user =>user.id == id);
        res.json(user);
    },
    createUser(req, res) {
        const {body} = req;
        users.push({...body});
        fs.writeFileSync('./data/users.json', JSON.stringify(users));
        res.json(users);
    },
    updateUser(req, res) {
        res.json("Get an User");
        const {id}=req.params;
        const {firstname,lastname,email,balance,history}=req.body;
        const newUsers = users.map((item) => {
            if (item.id == id) {
                item.id=id;
                item.firstname=firstname;
                item.lastname=lastname;
                item.email=email;
                item.balance=balance;
                item.history=history;
            }
            return item;
        });
        fs.writeFileSync('./data/users.json', JSON.stringify(newUsers));
        res.json({ status: "success"});
    },
    deleteUser(req, res) {
        res.json("Get an User");
        const {id}=req.params;
        const newUsers= users.filter((item) => item.id != id);
        fs.writeFileSync('./data/users.json', JSON.stringify(newUsers));
    }
};