let { orders } = require('../data/data');
const fs=require('fs');
exports.ordersController = {
    getOrders(req, res) {
        console.log("Get orders");
        res.json(orders);
    },
    getOrderbyId(req, res) {
        console.log("Get orders by id");
        const {id} = req.params;
        const order = orders.find(order =>order.id == id);
        res.json(order);
    },
    createOrder(req, res) {
        console.log("Add an order");
        const {body} = req;
        users.push({...body});
        fs.writeFileSync('./data/orders.json', JSON.stringify(orders));
        res.json(orders);
    },
    updateOrder(req, res) {
        console.log("Update an order");
        const {id}=req.params;
        const {price,dishID,restaurandId}=req.body;
        const newOrders = orders.map((item) => {
            if (item.id == id) {
                item.id=id;
                item.price=price;
                item.dishID=dishID;
                item.restaurandId=restaurandId;
            }
            return item;
        });
        fs.writeFileSync('./data/orders.json', JSON.stringify(newOrders));
        res.json({ status: "success"});
    },
    deleteOrder(req, res) {
        res.json("Get an order");
        const {id}=req.params;
        const newOrders = orders.filter((item) => item.id != id);
        fs.writeFileSync('./data/orders.json', JSON.stringify(newOrders));
       
    }
};