
import styles from "./Visor.module.css"

function Visor({ text }){

    return(
        <div className={styles.geral}>
            <p>{text}</p>
        </div>
        
    )
}

export default Visor