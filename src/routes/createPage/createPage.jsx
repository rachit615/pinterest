import React, { useRef, useState } from "react";
import "./createPage.css";
import Image from "../../components/Image/Image";

const CreatePage = () => {
  const formRef = useRef();
  const [file, setFile] = useState([]);

  const handleSubmit = () => {};

  return (
    <div>
      <div className="createPage">
        <div className="createTop">
          <h1>{"Create Pin"}</h1>
          <button onClick={handleSubmit}>{"Publish"}</button>
        </div>
        <div className="createBottom">
          <label htmlFor="file" className="upload">
            {/* htmlFor is used with id of input so that  */}
            <div className="uploadTitle">
              <Image src="/general/upload.svg" alt="" />
              <span>Choose a file</span>
            </div>
            <div className="uploadInfo">
              We recommend using high quality .jpg files less than 20 MB or .mp4
              files less than 200 MB.
            </div>
          </label>
          <input
            type="file"
            id="files"
            hidden
            onChange={(e) => setFile(e.target.files[0])}
          />

          <form className="createForm" ref={formRef}>
            <div className="createFormItem">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Add a title"
                name="title"
                id="title"
              />
            </div>
            <div className="createFormItem">
              <label htmlFor="description">Description</label>
              <textarea
                rows={6}
                type="text"
                placeholder="Add a detailed description"
                name="description"
                id="description"
              />
            </div>
            <div className="createFormItem">
              <label htmlFor="link">Link</label>
              <input
                type="text"
                placeholder="Add a link"
                name="link"
                id="link"
              />
            </div>
            <div className="createFormItem">
              <label htmlFor="board">Board</label>
              <select name="board" id="board">
                <option value="">Choose a board</option>
                <option value="1">Board 1</option>
                <option value="2">Board 2</option>
                <option value="3">Board 3</option>
              </select>
            </div>
            {/* FIXED: SELECT OR ADD BOARD */}

            <div className="createFormItem">
              <label htmlFor="tags">Tagged topics</label>
              <input type="text" placeholder="Add tags" name="tags" id="tags" />
              <small>Don&apos;t worry, people won&apos;t see your tags</small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
