import { Link } from 'react-router-dom';
import articles from '../data/articles';
import Menu from './Menu';

const Article = () => {
  return (
    <>
      <Menu />
      <div className="Wrapper">
        <div className="ArticleItem">
          {articles.map((article) => (
            <div key={article.id} className="ArticleContainer">
              <Link to={article.id.toString()} className="ArticleLink">
                <img
                  src={article.imageUrl}
                  alt="Generic placeholder"
                  className="ArticleImg"
                />
                <div className="ArticleTitle">{article.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Article;
