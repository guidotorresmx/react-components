import '../css/index.css';
import '../css/info.css';

function Info() {
  return (
    <div className="info">
      <header className="main-info">
        <section className="blog about">
          <p>
            Hi, this is Marco, part-time sleeper, 
            full-time pesimist and casual programmer, 
            experienced full-stack dev with a solid 
            machine learning foundation.
          </p>
        </section>
        <section className="blog interests">
          <p>
            Machine Learning, microservice, CI/CD, WebApps.
          </p>
        </section>
        <section className="blog tools">
        <ul className="blog list">
          <li className="blog list-items">atom (hydrogen)</li>
          <li className="blog list-items">vscode (dotnet tools)</li>
          <li className="blog list-items">linux (pop-os fan)</li>
          <li className="blog list-items">Win + WSL (best of both worlds)</li>
          <li className="blog list-items">zsh + powerlevel9k (feeling fancy)</li>
          <li className="blog list-items">multidesktop</li>
          <li className="blog list-items">botframework (emulator, no composer)</li>
          <li className="blog list-items">ngrok</li>
          <li className="blog list-items">postman</li>
        </ul>            
        </section>

      </header>
    </div>
  );
}

export default Info;
