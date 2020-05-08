import React from 'react';
import Auction from './components/Auction'


function App() {
  const products = [
    { title: "Desenho 01", author: "Author 01", initialValue: "30,00", imagem: "https://picsum.photos/seed/picsum/1280/800" },
    { title: "Desenho 02", author: "Author 02", initialValue: "30,00", imagem: "https://placeimg.com/1280/800" }
  ]

  return (
    <div className="App">
      {products.map((prod) => {
        return <Auction
          title={prod.title}
          author={prod.author}
          initialValue={prod.initialValue}
          imagem={prod.imagem}
        />
      })}
    </div>
  );
}

export default App;
