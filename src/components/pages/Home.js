import { useEffect, useState } from "react"

import styles from "./Home.module.css"

import Visor from '../interact/Visor'
import Button from '../interact/Button'


function Home() {
    const [text, setText] = useState('')

    useEffect(() => {

    }, [text])

    function changeText(type, char){
        switch(type) {
            case 'number':
                setText(text + char)
                break
            case 'operation':
                setText(text + char)
                break
            case 'delete':
                setText(text.slice(0,-1))
                break
            case 'clear':
                setText('')
                break
            case 'equal':
                setText('')
                break
            default:
                return
        }
        
    }

    return(
        <div className={styles.page}>
            <div className={styles.calculator}>
                <div className={styles.visor}>
                    <Visor text={text}/>
                </div>
                <div className={styles.buttons}>
                    <Button symbol="7" changeText={changeText}/>
                    <Button symbol="8" changeText={changeText}/>
                    <Button symbol="9" changeText={changeText}/>
                    <Button symbol="<-" type="delete" changeText={changeText} />
                    <Button symbol="AC" type="clear" changeText={changeText} />
                    <Button symbol="4" changeText={changeText}/>
                    <Button symbol="5" changeText={changeText}/>
                    <Button symbol="6" changeText={changeText}/>
                    <Button symbol="x" type="operation" changeText={changeText}/>
                    <Button symbol="/" type="operation" changeText={changeText}/>
                    <Button symbol="1" changeText={changeText}/>
                    <Button symbol="2" changeText={changeText}/>
                    <Button symbol="3" changeText={changeText}/>
                    <Button symbol="+" type="operation" changeText={changeText}/>
                    <Button symbol="-" type="operation" changeText={changeText}/>
                    <Button symbol="0" changeText={changeText}/>
                    <Button symbol="0" changeText={changeText}/>
                    <Button symbol="." changeText={changeText}/>
                    <Button symbol="0" changeText={changeText}/>
                    <Button symbol="=" type="equal" changeText={changeText}/>
                </div>
                <button onClick={() => {setText(text + '1')}}>clicka aqui</button>
            </div>
        </div>
    )
}

export default Home