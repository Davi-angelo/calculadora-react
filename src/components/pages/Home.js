import { useEffect, useState } from "react"

import styles from "./Home.module.css"

import Visor from '../interact/Visor'
import Button from '../interact/Button'


function Home() {

    const operations = ["/", "x", "-", "+"]

    const [text, setText] = useState('')
    const [number, setNumber] = useState('')

    useEffect(() => {

    }, [text])

    function changeText(type, char) {
        switch (type) {
            case 'number':
                setNumber(number + char)
                setText(text + char)
                break

            case 'operation':
                if(text.length === 0){
                    setText("0" + char)
                }
                else if(text.at(-1) === "."){
                    setNumber('')
                    setText(text.slice(0, -1) + char)
                }
                else if (operations.includes(text.at(-1))) {
                    setText(text.slice(0, -1) + char)
                }
                else {
                    setNumber('')
                    setText(text + char)
                }
                break
            
            case 'dot':
                if(text.length === 0 || operations.includes(text.at(-1))){
                    setNumber("0" + char)
                    setText(text + "0" + char)
                }
                else if(!number.includes(".")){
                    setNumber(number + char)
                    setText(text + char)
                }
                break

            case 'bracket':
                setText(text + char)
                break

            case 'delete':
                if(operations.includes(text.at(-1))){
                    let num = ''
                    for (let i = (text.length - 2); i >= 0; i--) {
                        
                        if(operations.includes(text[i])){
                            break
                        }
                        num = text[i] + num
                    }
                    setNumber(num)
                }
                else{
                    setNumber(number.slice(0, -1))
                }

                setText(text.slice(0, -1))
                break

            case 'clear':
                setNumber('')
                setText('')
                break

            case 'equal':
                calculationHandle(text)
                setNumber('')
                setText('')
                break

            default:
                return
        }

    }

    function calculationHandle(equation){
        console.log("24-34")
    }

    return (
        <div className={styles.page}>
            <div className={styles.calculator}>
                <div className={styles.visor}>
                    <Visor text={text} />
                </div>
                <div className={styles.buttons}>
                    <Button symbol="7" changeText={changeText} />
                    <Button symbol="8" changeText={changeText} />
                    <Button symbol="9" changeText={changeText} />
                    <Button symbol="<-" type="delete" changeText={changeText} />
                    <Button symbol="AC" type="clear" changeText={changeText} />
                    <Button symbol="4" changeText={changeText} />
                    <Button symbol="5" changeText={changeText} />
                    <Button symbol="6" changeText={changeText} />
                    <Button symbol="x" type="operation" changeText={changeText} />
                    <Button symbol="/" type="operation" changeText={changeText} />
                    <Button symbol="1" changeText={changeText} />
                    <Button symbol="2" changeText={changeText} />
                    <Button symbol="3" changeText={changeText} />
                    <Button symbol="+" type="operation" changeText={changeText} />
                    <Button symbol="-" type="operation" changeText={changeText} />
                    <Button symbol="(" type="bracket" changeText={changeText} />
                    <Button symbol="0" changeText={changeText} />
                    <Button symbol="." type="dot" changeText={changeText} />
                    <Button symbol=")" type="bracket" changeText={changeText} />
                    <Button symbol="=" type="equal" changeText={changeText} />
                </div>
            </div>
            <p>{number}</p>
        </div>
    )
}

export default Home