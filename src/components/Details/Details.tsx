import React from "react";
import "./Details.css";
import { useNavigate } from "react-router-dom";
export interface myBlogsProps {
  myBlogList: any;
  setMyBlogList: any;
  filterId: number;
}

export default function Details(props: myBlogsProps) {
  const navigate = useNavigate();
  const deleteBlog = () => {
    navigate("/myblogs");
    props.setMyBlogList(
      props.myBlogList.filter((e: any) => props.filterId !== e.id)
    );
  };
  const filtered = props.myBlogList.filter((e: any) => props.filterId === e.id);

  console.log(filtered[0].title);

  return (
    <div className="filtered-main">
      <div className="myblog-filtered">
        <div>
          <h1>Title: {filtered[0].title}</h1>
          <p>Descripion: {filtered[0].description}</p>
          <p>Publisher : {filtered[0].publisher}</p>
        </div>
        <div>
          <h3 className="deleteblog" onClick={deleteBlog}>
            Delete this blog
          </h3>
        </div>
      </div>
    </div>
  );
}
