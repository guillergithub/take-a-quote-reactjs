import { useState } from 'react'
import quotes from './quotes'
import Quote from './Quote'

/* Saving the json file into a constant to get easy access. Type = Array */
const arrQuote = quotes.quotes

const QuotesContainer = () => {    
    const [quote, setQuote] = useState(arrQuote[Math.floor(Math.random()*arrQuote.length)]) // Our initial state is a random element from arrQuote array.
    const [color, setColor] = useState('') 

    
    //This is the function that work when the user clicks on the "New Quote" button.    
    const randomQuote = () => {   
        randomColor()    
        setQuote(arrQuote[Math.floor(Math.random()*arrQuote.length)])
    }

    //This function generates random colors and return it like a string. Ex: '#14E54F'
    const randomColor = () => {
        const digits = "0123456789ABCDEF"
        let newColor = [];
        for(let i=1; i<=6; i++){
            newColor.push(digits[Math.floor(Math.random()*15)])
        }
        newColor = newColor.join('')
        setColor(`#${newColor}`) 
        return `#${newColor}`         
    }
    
    // This constant contain the property background of our inline style component. "style: {colorBg}"
    const colorBg = {background: color}

    return  (
        <div className="container-color" style={colorBg}>
            <div className="container">
                <Quote quote={quote}/>
                <div className="btn-container mt-3">
                    <a className="btn btn-primary" href={`https://twitter.com/intent/tweet?text=${quote.quote} By: -${quote.author}`} rel="noreferrer" target="_blank">
                       Tweet it
                    </a>   

                    <button className="btn btn-primary" onClick={randomQuote}>New Quote</button>       
                </div>            
            </div>
        </div>
    )
}



export default QuotesContainer;
