const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.json());

let users = [];
let counter = 1;

app.get('/user', (req, res) => {
    res.json(users);
});

app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter;
    counter += 1;
    users.push(user);
    res.json({
        message: 'User added successfully',
        user: user
    });
});

app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let updatedData = req.body;
    let selectedIndex = users.findIndex(user => user.id == id);

    if (selectedIndex !== -1) {
        
        users[selectedIndex] = {
            ...users[selectedIndex],
            ...updatedData,
            id: Number(id)
        };
        res.json({
            message: 'User updated successfully',
            user: users[selectedIndex]
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.delete('/user/:id', (req, res) => {
    let id = req.params.id;
    let selectedIndex = users.findIndex(user => user.id == id);

    if (selectedIndex !== -1) {
        users.splice(selectedIndex, 1);
        res.json({
            message: 'User deleted successfully',
            deletedId: id
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
