import React, { useState } from "react";
import "./myblogs.css";
import { Link } from "react-router-dom";

export interface myBlogsProps {
  myBlogList: any;
  setMyBlogList: any;
  blogsMap: any;
}
export default function MyBlogs(props: myBlogsProps) {
  const { myBlogList, setMyBlogList } = props;
  if (myBlogList.length === 0) {
    return (
      <div className="noblogs">
        <h1>You dont have any blog !</h1>
        <div>
          <h1>Add some blog : </h1>
          <Link to={"/addblog"}>Create Blog</Link>
        </div>
      </div>
    );
  }
  return <div className="myblogs">{props.blogsMap()}</div>;
}
