import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label='Nome'
          placeholder='Digite seu nome'
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          id='form-nome'
        />
        <CampoTexto
          obrigatorio={true}
          label='Cargo'
          placeholder='Digite seu cargo'
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
          id='form-cargo'
        />
        <CampoTexto
          label='Imagem'
          placeholder='Digite o endereço da imagem'
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          id='form-imagem'
        />
        <ListaSuspensa
          obrigatorio={true}
          label='Time'
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          id='form-times'
        />
        <Botao id='form-botao'>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
