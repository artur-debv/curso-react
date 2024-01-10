
import Item from "./Item"


function List(){
   return(
     <>
       <h1>minha lista</h1>
       <ul>
         <Item marca="ferrari" ano_lancamento={1939}/>
         <Item marca="bmw" ano_lancamento={1916}/>
         <Item marca="porsche" ano_lancamento={1931}/>
         <Item marca="chevrolet" ano_lancamento="olá"/>
         <Item/>
       </ul>
       </>
   )
}

export default List