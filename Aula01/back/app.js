import express from "express";
import "dotenv/config";
import cors from "cors";
import AlunoRoutes from "./src/routes/AlunoRoutes.js";

const app = express();
const PORT =  process.env.PORT;

app.use(express.json());
app.use(
    cors(
        {
            origin: process.env.API_URL_FRONT
        }
    )
)
app.use("/alunos", AlunoRoutes);

app.get("/", (req, res)=>{
    res.status(200).json({msg: "Hello World"});
});

app.listen(PORT, ()=>{
    console.log(`Aplicação rodando em http://localhost:${PORT}`);

});