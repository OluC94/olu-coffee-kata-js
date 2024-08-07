import cors from "cors";
import express from "express";
import morgan from "morgan";
import { addNewCustomer, updateStampCount } from "./utils/utils.js";

const customers = [
    {
        id: 1,
        name: "Ali",
        stampCount: 3,
        coffeeCount: 0,
    },
    {
        id: 2,
        name: "Bilal",
        stampCount: 5,
        coffeeCount: 0,
    },
    {
        id: 3,
        name: "Charlie",
        stampCount: 0,
        coffeeCount: 2,
    },
    {
        id: 4,
        name: "Dani",
        stampCount: 3,
        coffeeCount: 1,
    },
];

const app = express();

//allow morgan logger to get access to each request before and after our handlers
app.use(morgan("dev"));
//auto-include CORS headers to allow consumption of our content by in-browser js loaded from elsewhere
app.use(cors());
//parse body text of requests having content-type application/json, attaching result to `req.body`
app.use(express.json());

//use the environment variable PORT, or 4000 as a fallback
const PORT = process.env.PORT ?? 4000;

app.get("/", (req, res) => {
    res.json({ msg: "Hello world" });
});

app.get("/customers", (req, res) => {
    res.status(200).send({ msg: "within get /customers" });
});

app.post("/customers", (req, res) => {
    const { name } = req.body;

    if (name === undefined || name.length < 1) {
        res.status(400).send({ error: "bad request" });
        return;
    }

    addNewCustomer(customers, name);
    res.status(200).send({ msg: "Customer successfully added" });
});

app.put("/customers/:id", (req, res) => {
    const { id } = req.params;
    const targetId = parseInt(id);
    if (isNaN(targetId)) {
        res.status(400).send({ error: "bad request" });
        return;
    }

    const isValidId =
        customers.filter((customer) => customer.id === targetId).length === 1;
    if (isValidId) {
        updateStampCount(customers, targetId);
        res.status(200).send({ msg: "Stamps successfully updated" });
    } else {
        res.status(404).send({ error: "Customer not found" });
    }
});

app.listen(PORT, () => {
    console.log(
        `Your express app started listening on ${PORT}, at ${new Date()}`
    );
});
