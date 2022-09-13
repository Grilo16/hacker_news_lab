import { useState } from "react";

const SearchForm = function ({filterArticles}){

    const [userInput, setUserInput] = useState("")



    const handleSubmit = function(e){
        e.preventDefault()
    };
    
    const handleInput = function(e){
        
        setUserInput(e.target.value)
        e.target.value 
        ? filterArticles(userInput)
        : filterArticles(false)
        
    }


    return (
        <form onSubmit={handleSubmit} className="search-form">
          <input onChange={handleInput} type="text"  value ={userInput}/>
        </form>  
    )
};

export default SearchForm