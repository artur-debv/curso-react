import styles from './Frase.module.css'

function Frase(){
    return (
        <div className={styles.Frasecontainer}>
           <p className={styles.frasecontent}>meu primeiro componente com uma frase</p>
        </div>
    )
}


export default Frase

