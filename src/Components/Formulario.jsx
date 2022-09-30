import React, { useState } from 'react';
import axios from 'axios';

export default function Formulario() {
  const [input, setInput] = useState('');
  const [info, setInfo] = useState({
    rua: "",
    bairro: "",
    cidade: ""
  });

  let API = `https://viacep.com.br/ws/${input}/json/`;

  function getApi() {
    axios.get(API).then((res) => {
      console.log(res);
      setInfo({
        rua: res.data.logradouro,
        bairro: res.data.bairro,
        cidade: res.data.localidade
      });
    });
  }

  return (
    <>
      <input value={input}onChange={(e) => {setInput(e.target.value);}}/>
      <button onClick={() => {getApi()}}>Procurar</button>
      <h1>{info.rua}</h1>
      <h3>{info.cidade}</h3>
      <p>{info.bairro}</p>
    </>
  )
}
