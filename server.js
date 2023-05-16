import Express from "express";

const app = Express();

app.use(Express.json());

app.get("/", (req, res) => {
    res.send("Hello World\n");
});

app.get("/misnotas", (req, res) => {
    res.send("Mostrando tus notas registradas\n");
});

app.listen(3000, () => {
    console.log("Servidor Corriendo en 3000");
});