const Article = function({articleObject}){
    return (
        <li className="article">
        <a href={articleObject.url}>
            <p>{articleObject.title}</p>
            </a>
      </li>
    )
};

export default Article