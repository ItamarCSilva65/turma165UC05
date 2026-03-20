import { useEffect, useState } from "react";
import FilmeList from "../../components/FilmeList/FilmeList";
import { listarFilmes } from "../../services/filmeService";
import "./FilmesUsuarioPage.css";


export default function FilmesUsuarioPage(){
     const [filmes, setFilmes] = useState([]);
     const [busca, setBusca] = useState("");
     const [ordenacao, setOrdenacao] = useState("");
     const [novaOrdenacao, setNovaOrdenacao] = useState ................

 async function carregarFilmes() {
        try {
            const response = await listarFilmes();
            setFilmes(response.data.filmes);
        } catch (error) {
            console.error("Erro interno ao carregar filmes:", error);
        }
    }
    useEffect(() => {
        carregarFilmes();
    }, [])
    
    /* Filto de busca */
    const filmesFiltrados = filmes.filter((filme)=>
    filme.titulo.toLowerCase().includes(busca.toLowerCase())
    );
    const filmesOrdenados = [...filmesFiltrados].sort((a,b)=>{
        if(ordenacao === "titulo-asc"){
            return a.titulo.localeCompare(b.titulo)
        }
        if(ordenacao === "titulo-desc"){
            return b.titulo.localeCompare(a.titulo)
        }
         if(ordenacao === "genero-asc"){
            return a.genero.localeCompare(b.genero)
        }
        if(ordenacao === "genero-desc"){
            return b.genero.localeCompare(a.genero)
        }

        if(ordenacao === "ano-asc"){
            return a.ano - b.ano;
        }
        if(ordenacao === "ano-desc"){
            return b.ano - a.ano;
        }
        return 0;

    });

    const filmesOrdenados = [...filmesFiltrados].sort((a, b)=> {...});

    function alternarOrdenacao(campo){
        setNovaOrdenacao((prev)=>{
            if(prev.campo === campo){
                return{
                    campo,
                    direcao: prev.direcao === "asc" ? "desc" : "asc"
                }
            }
            return(
                campo,
                direcao: "asc"
            )
        })
    }

    const filmesOrdenados2 = [...filmesFiltrados].sort((a, b)=>{
        if(novaOrdenacao.campo === "titulo"){
            return novaOrdenacao.direcao === "asc" ?
            a.titulo.localeCompare(b.titulo) :
            b.titulo.localeCompare(a.titulo)
        }

         if(novaOrdenacao.campo === "genero"){
            return novaOrdenacao.direcao === "asc" ?
            a.genero.localeCompare(b.genero) :
            b.genero.localeCompare(a.genero)
        }
         if(novaOrdenacao.campo === "ano"){
            return novaOrdenacao.direcao === "asc" ?
            a.ano.localeCompare(b.ano) :
            b.ano.localeCompare(a.ano)
        }
    })


    return(
        <>
        <main className="container">
            <section className="cabecalho-usuario">
                <h1> Catalogo de Filmes</h1>
                <p>Confira os filmes disponíveis no catálogo</p>
                <div className="filtros-container">
                    <div className="busca-box">
                     <input
                        type="text"
                        value={busca}
                        placeholder="Buscar filme..."
                        onChange={(e)=> setBusca(e.target.value)}
                        />
                </div>

                </div>
                <div className="ordenacao-botoes">
                    <button className={ordenacao === "ano-asc" ? "ativo" : ""} onClick={() => setOrdenacao
                        ("titulo-asc")}>
                        Título A-Z
                    </button>

                    <button className={ordenacao === "ano-asc" ? "ativo" : ""} onClick={() => setOrdenacao
                        ("titulo-desc")}>
                        Título Z-A
                    </button>

                    <button className={ordenacao === "ano-asc" ? "ativo" : ""} onClick={()=> setOrdenacao
                        ("genero-asc")}>
                        Gênero A-Z
                    </button>

                    <button className={ordenacao === "ano-asc" ? "ativo" : ""} onClick={()=> setOrdenacao
                        ("genero-desc")}>
                        Gênero Z-A
                    </button>

                    <button className={ordenacao === "ano-asc" ? "ativo" : ""}
                    onClick={()=> setOrdenacao ("ano-asc")}>
                        Ano ⇡
                    </button>

                    <button className={ordenacao === "ano-desc" ? "ativo" : ""}
                    onClick={()=> setOrdenacao ("ano-desc")}>
                        Ano ↓
                    </button>
                    <button className="" onClick={()=> setOrdenacao
                        ("")}>
                        Limpar
                    </button>
        
                </div>
            </section>
              <FilmeList filmes={filmesOrdenados} />
        </main>          
        </>
    )
    

}