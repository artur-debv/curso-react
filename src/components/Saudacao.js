
function Saudacao({ nome }) {
    function gerarSaudacao() {
      return `olá, ${nome}, tudo bem?`;
    }
    return (
     <>
       { nome && <p>{gerarSaudacao()}</p>}
     </>
    );
 }
 export default Saudacao;
