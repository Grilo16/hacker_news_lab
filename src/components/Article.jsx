const Article = function({articleObject}){
    return (
        <li className="article">
        <p>{articleObject.title}</p>
      </li>
    )
};

export default Article