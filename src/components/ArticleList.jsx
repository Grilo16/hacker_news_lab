import Article from "./Article";

const ArticleList = function ({filteredArticles}){
    const articles = filteredArticles.map((articleObject) => {
        return (
            <Article key={articleObject.id} articleObject={articleObject}/>
        )
    })

    return (
    <div className="article-list">
      <ul>
        {articles}
      </ul>
      </div>
    )
};

export default ArticleList