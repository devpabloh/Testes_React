
import './App.css';
import { useState, useEffect } from 'react';
const url = "http://localhost:3002";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("")

  /* 1 - resgatando os dados do json */
  useEffect(()=>{
    async function fetchData(){
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data.products)
      console.log(data)
    }
    fetchData();
  },[]);

  

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((produto)=>(
          <li key={produto.id}>
            {produto.name}
            {produto.price}
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
