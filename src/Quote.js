const Quote = ({ quote, setQuote }) => {
    return (
        <div className="quote">                           
            <div className="quote-container">
                <p><span className="double-quote">❝</span>{quote.quote}"</p>   
            </div>         

            <div className="author-container">
                <h6>- {quote.author}</h6>            
            </div>    
        </div>
    )
}

export default Quote;