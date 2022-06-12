import express from "express";
const app = express();
const port = 3000;

app.use("/dist", express.static(process.cwd() + "/../dist"));
app.use("/", express.static(process.cwd() + "/web"));

app.listen(port, () => {
  console.log(
    `Example app listening on port ${port}: http://localhost:${port}`
  );
});
