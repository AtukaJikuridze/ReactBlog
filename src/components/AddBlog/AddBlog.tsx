import React, { useState } from "react";
import "./addblog.css";
import { Link, useNavigate } from "react-router-dom";
interface addBlogProps {
  setMyBlogList: any;
  myBlogList: Array<any>;
}
export default function AddBlog(props: addBlogProps) {
  const navigate = useNavigate();
  const setStateValue = (setState: any, value: string) => {
    setState(value);
  };
  const submit = () => {
    if (
      titleValue.length > 5 &&
      descriptionValue.length > 10 &&
      publisher.length > 2
    ) {
      props.setMyBlogList([
        ...props.myBlogList,
        {
          title: titleValue,
          description: descriptionValue,
          publisher: publisher,
          id: Math.random(),
        },
      ]);
      navigate("/myblogs");
    }
  };

  const [titleValue, setTitleValue] = useState<string>("");
  const [descriptionValue, setDescriptionValue] = useState<string>("");
  const [publisher, setPublisher] = useState<string>("");

  return (
    <div className="addblog">
      <h1 className="addblogh1">Add Blog:</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Form Title :</label>
        <input
          onChange={(e) => setStateValue(setTitleValue, e.target.value)}
          type="text"
        />
        <label>Form Description :</label>

        <textarea
          onChange={(e) => setStateValue(setDescriptionValue, e.target.value)}
        />

        <label>Form Publisher :</label>
        <input
          type="text"
          onChange={(e) => setStateValue(setPublisher, e.target.value)}
        />

        <button type="submit" onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  );
}
