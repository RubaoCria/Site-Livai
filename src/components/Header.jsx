import React from 'react';
import './App.css';

const Header = () => {
  return (
    <header>
      <img src="Imagens/logo.png" alt="Logo da Loja" />
      <nav>
        <ul>
          <li>
            <a href="pagina-inicial.html">Página Inicial</a>
          </li>
          <li>
            <a href="camisetas-promocao.html">Camisetas na Promoção</a>
          </li>
          <li>
            <a href="tenis-populares.html">Tênis Populares</a>
          </li>
        </ul>
      </nav>
      <div className="search-container">
        <input type="text" className="search-box" placeholder="Buscar..." />
        <span className="search-icon">🔍</span>
      </div>
    </header>
  );
};

const ProductBox = ({ image, title, oldPrice, newPrice }) => {
  return (
    <div className="box">
      <img src={image} alt={title} />
      <p>{title}</p>
      <div className="precos">
        <span className="preco-antigo">de {oldPrice}</span>
        <span className="preco-novo">por {newPrice}</span>
      </div>
    </div>
  );
};

const App = () => {
  const products = [
    {
      image: 'Imagens/Camiseta 01.webp',
      title: 'Camiseta Maresia Black',
      oldPrice: 'R$89,90',
      newPrice: 'R$69,00',
    },
    {
      image: 'Imagens/Camiseta 02.webp',
      title: 'Camiseta Maresia Marinho',
      oldPrice: 'R$89,90',
      newPrice: 'R$69,00',
    },
    {
      image: 'Imagens/Camiseta Fire 01.webp',
      title: 'Camiseta Fire Branca',
      oldPrice: 'R$89,90',
      newPrice: 'R$69,00',
    },
    {
      image: 'Imagens/Camiseta Fire 02.webp',
      title: 'Camiseta Fire Rosa',
      oldPrice: 'R$89,90',
      newPrice: 'R$69,00',
    },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <div style={{ backgroundColor: '#006494', margin: 0 }}>
      <Header />
      <h1 style={{ textAlign: 'center', color: '#fff' }}>
        Camisetas na Promoção:
      </h1>
      <div className="container">
        {products.map((product, index) => (
          <ProductBox key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default App;
