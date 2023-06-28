
const mongoose = require('mongoose');

mongoose
    .connect("mongodb+srv://root:akki909@cluster0.sm3rshd.mongodb.net/demoProject", {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("running port........");
    })
    .catch((error) => {

        console.log("not connect");
    });
