const express = require("express");
const app = express();

const path = require("path");



app.listen(process.env.PORT || 3000, () => {
    console.log("funciona");
});


app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/home.html"));
});

app.get("/home", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/home.html"))
})

app.get("/ingresar", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/enter.html"))
})

app.get("/registrarse", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/register.html"))
})