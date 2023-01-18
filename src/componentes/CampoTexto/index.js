import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`;
  const erro = true;
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
        id={props.id}
      />
      {}
      {erro ? <p id={`${props.id}-erro`}>Mensagem de erro</p> : ""}
    </div>
  );
};

export default CampoTexto;
