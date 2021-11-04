const express = require("express");
const app = express();
app.use( express.json() );
const port = 8000;
app.use( express.urlencoded({ extended: true }) );
const faker = require("faker");

class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker. address.country()
        };
    }
}

// // req is short for request
// // res is short for response
app.get("/", (req, res) => {
res.json({message: "Hello Faker"});
});

// GET ALL:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
app.get("/api/users/new", (req, res) => {
res.json( new User() );
});

app.get("/api/companies/new", (req, res) => {
    res.json( new Company() );
    });

app.get("/api/user/company", (req, res) => {
    res.json([new Company(), new User()]);
    });

// // POST NEW::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// app.post("/users", (req, res) => {
// // req.body will contain the form data from Postman or from React
// console.log(req.body);
// // we can push it into the users array for now...
// // later on this will be inserted into a database
// users.push(req.body);
// // we always need to respond with something
// res.json( { status: "ok" } );
// });

// // GET AT SPECIFIED ID::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// // if we want to get a user with a specific id, we can make the id a part of the url
// // be sure to preface the id variable with a `:` colon
// app.get("/users/:id", (req, res) => {
// // we can get this `id` variable from req.params
// console.log(req.params.id);
// // assuming this id is the index of the users array we could return one user this way
// res.json( users[req.params.id] );
// });

// // PUT AT ID::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// app.put("/users/:id", (req, res) => {
// // we can get this `id` variable from req.params
// const id = req.params.id;
// // assuming this id is the index of the users array we can replace the user like so
// users[id] = req.body;
// // we always need to respond with something
// res.json( { status: "ok" } );
// });

// app.delete("/users/:id", (req, res) => {
// // we can get this `id` variable from req.params
// const id = req.params.id;
// // assuming this id is the index of the users array we can remove the user like so
// users.splice(id, 1);
// // we always need to respond with something
// res.json( { status: "ok" } );
// });

app.listen(port)
