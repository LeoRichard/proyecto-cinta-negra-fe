import React from 'react';
import AddFavorite from '../Favorites/favoritesRegister';
import DeleteFavorite from '../Favorites/favoritesDelete';

const Receta = ({ recetaid, name, difficulty, content, author, profileImage, featuredImage, isFavoriteSection }) => {
  return (
    <div className="col-lg-4 mt-4 mb-4">
      <div className="card">
        <div className="featured-image">
          <img src={featuredImage} className="card-img-top" alt="..." />
          <div className="tags absolute"><a href="/" className="tag-link-7">{difficulty}</a></div>
        </div>
        <div className="card-body gradient-effect">
          <a href="/">
            <h5 className="card-title">{name}</h5>
          </a>
          <p className="card-text">{content}</p>
        </div>
        <div className="card-footer author-meta">
          <a href="/" className="author" title="Richard Leo">
            <span className="author-image cover" style={{backgroundImage: `url(${profileImage})`}}></span>
            <span className="author-name">{author}</span>
            </a>
            { isFavoriteSection ? (
              <DeleteFavorite recetaID={recetaid}/>
            ) : (
              <AddFavorite recetaID={recetaid}/>
            )
            }

        </div>
      </div>
    </div>
  );
};

export default Receta;
