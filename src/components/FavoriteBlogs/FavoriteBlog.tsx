import React from "react";
import "./favoriteblog.css";
import { Link } from "react-router-dom";
interface FavoriteBlogProps {
  favorites: Array<[number]>;
  setFavorites: any;
  globalUsers: any[];
  setGlobalUsers: any;
}

export default function FavoriteBlog(props: FavoriteBlogProps) {
  console.log(props.globalUsers[0]);
  const removeFavorite = (removeId: any) => {
    props.globalUsers[removeId - 1].favorited =
      !props.globalUsers[removeId - 1].favorited;
    props.setGlobalUsers([...props.globalUsers]);

    props.setFavorites(props.favorites.filter((e) => e !== removeId));
  };
  if (props.favorites.length === 0) {
    return (
      <div className="noblogs">
        <h1>You Dont Have Any Favorite Blog !</h1>
        <div>
          <h1>Here is Global Blogs : </h1>
          <Link style={{ fontSize: "30px", marginTop: "0px" }} to={"/"}>
            Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="favorite-blog">
      {props.favorites.map((e: any) => (
        <div className="myblog">
          <div>
            <h1>Title : {props.globalUsers[e].title}</h1>
            <p>Desciption : {props.globalUsers[e].body}</p>
            <div className="see-details">
              <h3 className="remove-favorite" onClick={() => removeFavorite(e)}>
                Remove From Favorites
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
