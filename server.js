const express = require("express");
const studentRoutes = require("./src/students/routes")


const app = express();
const port = 3020;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world");
})
app.use("/api/v1/students1", studentRoutes);

app.listen(port, () => console.log(`running ${port}`));