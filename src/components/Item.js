import proptTypes from 'prop-types'

function Item({ marca, ano_lancamento }) {
    return (
      <>
        <li>
          {marca} - {ano_lancamento}
        </li>
      </>
    );
  }

  Item.proptTypes = {
    marca: proptTypes.string.isRequired,
    ano_lancamento: proptTypes.number,
  }

  Item.defaultProps = {
    marca : 'faltou a marca',
    ano_lancamento : 0
  }
  
  export default Item;