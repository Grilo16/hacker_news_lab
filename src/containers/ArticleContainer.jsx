import { useEffect, useState } from "react";
import ArticleList from "../components/ArticleList";
import SearchForm from "../components/SearchForm";

const ArticleContainer = function (){

    const [articleList, setArticleList] = useState([])
    const [filteredArticles, setFilteredArticles] = useState([])


    const filterArticles = function(filterBy){
       setFilteredArticles(articleList.filter(article => article.title.toLowerCase().indexOf(filterBy) !== -1))
    };

    useEffect(() => {
        
        const fetchObjectsJson = (objectId) => fetch(`https://hacker-news.firebaseio.com/v0/item/${objectId}.json`)
        .then(getJson)
        const getJson = (res) => res.json()
        const getTop5 = (top5) => top5.slice(0, 5)
        const getObjects = (idList) => idList.map(fetchObjectsJson)
        const fulfillPromises = (promises) => Promise.all(promises)
        const setStates = (objects) => {setArticleList(objects); setFilteredArticles(objects)}
        
        

        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(getJson)
        .then(getTop5)
        .then(getObjects)
        .then(fulfillPromises)
        .then(setStates)
        
        
        
    },[]);




    return (
        
        <div className="article-container">
        <SearchForm filterArticles={filterArticles}/>
        <hr />
        <ArticleList filteredArticles={filteredArticles}/>
        </div>

    )
};

export default ArticleContainer