import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./home.css";
interface HomePageProps {
  favorites: Array<[number]>;
  setFavorites: any;
  globalUsers: any[];
  setGlobalUsers: any;
}
export default function Home(props: HomePageProps) {
  interface userInterface {
    title: string;
    body: string;
    id: number;
    favorited: boolean;
  }

  const AddToFavorites = (e: any, id: number, index: number) => {
    props.globalUsers[index].favorited = !props.globalUsers[index].favorited;

    if (!props.favorites.includes(e.id)) {
      props.setFavorites([...props.favorites, e.id]);
      props.setGlobalUsers([...props.globalUsers]);
    } else {
      props.setFavorites(props.favorites.filter((x) => x !== e.id));
    }
  };
  return (
    <div className="homepage">
      <h2>Here Some Global Blogs...</h2>
      {props.globalUsers?.map((e: userInterface, indx: number) => (
        <div className="myblog" key={indx}>
          <div>
            <h1>{e.title}</h1>
            <p>Desciption : {e.body}</p>
            <div className="see-details">
              {e.favorited ? (
                <AiFillHeart
                  className={"favoritesP"}
                  onClick={() => AddToFavorites(e, e.id, e.id - 1)}
                />
              ) : (
                <AiOutlineHeart
                  className={"favoritesP"}
                  onClick={() => AddToFavorites(e, e.id, e.id - 1)}
                />
              )}
              <h3>Add To Favorites</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
