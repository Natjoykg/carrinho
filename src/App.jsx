import React, { useState, useEffect } from 'react';
import './App.css'


const availableItems = [
     {id:126,name:'mangá One Piece vol:63',price:30,imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgImYHNdg5NzHzyrHtrcO1DOFHW767Tc1fAg&usqp=CAU'},{id:136,nome:'mangá One Piece vol:100',price:30,imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXm_F9s-AMf19gdOawaXASA_cdMAO6azgQA&usqp=CAU'},{id:136,name:'mangá One Piece vol:95',price:30,imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLfSZ1hos1t4aF-bBEa34HwSpX2RoYc-Sug&usqp=CAU'},{id:156,name:'mangá One Piece vol:46',price:30,imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgImYHNdg5NzHzyrHtrcO1DOFHW767Tc1fAg&usqp=CAU'}
];

const App = () => {
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="App">
      <h1>Mangá Store</h1>

      <div className="items-container">
        <h2>Itens Disponíveis</h2>
        <div>
          {availableItems.map((item) => (
            <div key={item.id}>
              <img className="img"src={item.imgUrl} alt={item.name}/>
              <h3>{item.name}</h3>
              <p>R$ {item.price}</p>
              <button onClick={() => addToCart(item)}>Adicionar ao Carrinho</button>
            </div>
          ))}
        </div>
      </div>

      <div className="cart-container">
        <h2>Seu Carrinho</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - R$ {item.price}
              <button onClick={() => removeFromCart(item)}>Remover do Carrinho</button>
            </li>
          ))}
        </ul>
        <p>Total: R$ {cartTotal}</p>
      </div>
    </div>
  );
};

export default App;
