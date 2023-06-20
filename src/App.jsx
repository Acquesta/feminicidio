import "./App.css";

function App() {
  return (
    <>
      <main>
        <div className="topo">
          <h1>
            <span className="red">FEMINICIDIO</span> do estado de São Paulo
          </h1>
          <h2>
            As informações que <span className="red">você precisa</span> saber
            sobre sua cidade
          </h2>
        </div>
        <div className="cidade">
          <h2 className="title">
            A cidade com mais <span className="red">VÍTIMAS</span>
          </h2>
          <h3 className="subTitle">
            De acordo com a tabela das delegacias de todo o estado de São Paulo
            a cidade com mais vítimas é a própria São Paulo
          </h3>
          <div className="colunas">
            <div className="textoColuna">
              <h3 className="lugares">
                <span className="red">1º</span> São Paulo
              </h3>
              <h4><span className="red">232</span> vítimas</h4>
            </div>
            <div className="textoColuna">
              <h3 className="lugares">
                <span className="red">2º</span> Campinas
              </h3>
              <h4><span className="red">50</span> vítimas</h4>
            </div>
            <div className="textoColuna">
              <h3 className="lugares">
                <span className="red">3º</span> Guarulhos
              </h3>
              <h4><span className="red">28</span> vítimas</h4>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
