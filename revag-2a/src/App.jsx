
import './App.css'
import Logo from "./assets/logo.svg"
import { Flame, Database } from 'lucide-react';
import imgAlibaba from "./assets/alibaba.png"
import imgHalfbrick from "./assets/halfbrick.png"
import imgSocial from "./assets/social.png"

export default function App() {

  return (
    <>
    <div className="container">
      <header className="header">
        <h1>🔥 FIREBASE</h1>
        <p>Plataforma de Desenvolvimento de Aplicativos</p>
        <a href="https://firebase.google.com/?hl=pt-br"> Link para Acessar o Firebase</a>
      </header>

        <section className="section">
        <h2>❓ O QUE É?</h2>
        <p>Plataforma BaaS para apps <strong>Web e Mobile</strong></p>

        <div className="cards">
          <div className="card">Banco de Dados em Tempo Real</div>
          <div className="card">Autenticação de Usuários</div>
          <div className="card">Armazenamento e Hospedagem</div>
        </div>
      </section>

  
      <section className="section orange">
        <h2>🌎 ONDE É USADO?</h2>

        <div className="icons">
          <div>📱 Apps Mobile</div>
          <div>💻 Aplicações Web</div>
          <div>🎮 Jogos Online</div>
          <div>📊 Dados em Tempo Real</div>
        </div>
      </section>


      <section className="section dark">
        <h2> DIFERENÇAS PARA OUTROS BANCOS</h2>

        <div className="compare">
          <div>
            <Flame className='icone'/>
            <h3>FIREBASE</h3>
            <ul>
              <li>Banco NoSQL</li>
              <li>Dados JSON</li>
              <li>Atualização em Tempo Real</li>
            </ul>
          </div>

          <div>
            <Database className='icone'/>
            <h3>BANCOS TRADICIONAIS</h3>
            <ul>
              <li>Estrutura em Tabelas</li>
              <li>Banco Relacional</li>
              <li>Configuração de Servidor</li>
            </ul>
          </div>
        </div>
      </section>

    
      <section className="section">
  <h2>📱 EXEMPLOS DE APPS</h2>

  <div className="apps">
    <div>
      <span>Alibaba</span>
      <img src={imgAlibaba} alt="Alibaba" style={{ width: '100px', display: 'block', margin: '10px auto' }} />
    </div>

    <div>
      <span>Halfbrick</span>
      <img src={imgHalfbrick} alt="Halfbrick" style={{ width: '100px', display: 'block', margin: '10px auto' }} />
    </div>

    <div>
      <span>Redes Sociais</span>
      <img src={imgSocial} alt="Redes Sociais" style={{ width: '100px', display: 'block', margin: '10px auto' }} />
    </div>
  </div>
</section>

      <footer className="footer">
        <p>
          Maria Helena • Yago Delbone • Lucas Ferreira • Nathan Liberato • Ana Luisa
        </p>
      </footer>
    </div>
    </>
  )
}

