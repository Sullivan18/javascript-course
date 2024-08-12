import './Home.css'; // Importar o arquivo CSS para estilização
import Menu from '../components/Menu';
import produto1 from '../assets/produto.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <Menu />
      <header className="header">
        <h1>Minha Loja</h1>
      </header>

      <section id="products" className="products">
        <h2>Produtos em Destaque</h2>
        <div className="product-list">
          <div className="product-item">
            <img src={produto1} alt="Produto 1" />
            <h3>Produto 1</h3>
            <p>Descrição do produto 1</p>
            <button>Comprar</button>
          </div>
          <div className="product-item">
            <img src={produto1} alt="Produto 1" />
            <h3>Produto 2</h3>
            <p>Descrição do produto 2</p>
            <button>Comprar</button>
          </div>
          {/* Adicione mais produtos conforme necessário */}
        </div>
      </section>

      <section id="categories" className="categories">
        <h2>Categorias</h2>
        <div className="category-list">
          <div className="category-item">
            <h3>Categoria 1</h3>
          </div>
          <div className="category-item">
            <h3>Categoria 2</h3>
          </div>
          {/* Adicione mais categorias conforme necessário */}
        </div>
      </section>

      <footer id="contact" className="footer">
        <h2>Contato</h2>
        <p>Email: contato@minhaloja.com</p>
        <p>Telefone: (11) 1234-5678</p>
        <div className="social-media">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://twitter.com">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
