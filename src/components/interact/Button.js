import styles from "./Button.module.css"

function Button({ symbol, type = "number",  changeText }){

    //type number
    //type equal
    //type delete
    //type clear
    //type operation 

    function handleClick(){
        changeText(type, symbol)
    }

    return(
        <div className={styles.geral} onClick={handleClick}>
            <p>{symbol}</p>
        </div>
        
    )
}

export default Button