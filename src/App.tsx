import React, { useState, useRef } from "react";
import "./App.css";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import MyBlog from "./components/MyBlogs/MyBlogs";
import AddBlog from "./components/AddBlog/AddBlog";
import Details from "./components/Details/Details";
import FavoriteBlog from "./components/FavoriteBlogs/FavoriteBlog";
import { GlobalBlogs } from "./GlobalBlogs";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

function App() {
  const linkBtnCloseNav = () => {
    document.querySelector("nav")?.classList.remove("mobilenav");
  };
  const toggleNav = () => {
    setNavMenu((current) => !current);
    navRef.current.classList.toggle("mobilenav");
  };
  const navRef = useRef<any>(null);
  const [navMenu, setNavMenu] = useState<boolean>(false);

  // My Blog List => delete blogs
  const [myBlogList, setMyBlogList] = useState<Array<any>>([]);
  const [filterId, setFilterId] = useState<number>(0);
  // enf od my blog list

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Home Page => favorite-page
  const [favorites, setFavorites] = useState<Array<any>>([]);
  const [globalUsers, setGlobalUsers] = useState<Array<any>>(GlobalBlogs);
  // end of Home Page => favorite-page

  const navigate = useNavigate();
  interface BlogsMapJSX {
    title: string;
    description: string;
    publisher: string;
    id: number;
  }
  function BlogsMapJSX(props: BlogsMapJSX) {
    return (
      <div className="myblog">
        <div>
          <h1>{props.title}</h1>
          <p>Publisher : {props.publisher}</p>
        </div>
        <div className="see-details">
          <p
            onClick={() => {
              navigate("/details");
              setFilterId(props.id);
            }}
          >
            See Details
          </p>
        </div>
      </div>
    );
  }

  const blogsMap = () => {
    return myBlogList.map((e) => BlogsMapJSX(e));
  };
  return (
    <>
      <nav ref={navRef}>
        {navMenu ? (
          <AiOutlineClose onClick={toggleNav} />
        ) : (
          <AiOutlineBars onClick={toggleNav} />
        )}
        <h3>ReactBlog</h3>
        <ul>
          <li>
            <Link onClick={linkBtnCloseNav} to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={linkBtnCloseNav} to={"/myblogs"}>
              My Blogs
            </Link>
          </li>
          <li>
            <Link onClick={linkBtnCloseNav} to={"/addblog"}>
              Add new blog
            </Link>
          </li>
          <li>
            <Link onClick={linkBtnCloseNav} to={"/favoriteblogs"}>
              Favorite Blogs
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              globalUsers={globalUsers}
              setGlobalUsers={setGlobalUsers}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        <Route
          path="/details"
          element={
            <Details
              filterId={filterId}
              myBlogList={myBlogList}
              setMyBlogList={setMyBlogList}
            />
          }
        />
        <Route
          path="/myblogs"
          element={
            <MyBlog
              blogsMap={blogsMap}
              myBlogList={myBlogList}
              setMyBlogList={setMyBlogList}
            />
          }
        />
        <Route
          path="/addblog"
          element={
            <AddBlog myBlogList={myBlogList} setMyBlogList={setMyBlogList} />
          }
        />
        <Route
          path="/favoriteblogs"
          element={
            <FavoriteBlog
              setFavorites={setFavorites}
              globalUsers={globalUsers}
              favorites={favorites}
              setGlobalUsers={setGlobalUsers}
            />
          }
        />
      </Routes>
    </>
  );
}
export default App;
