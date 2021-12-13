import React, { useState } from "react";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

const Newsfeed = ({ post, handleRemove }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="newsCard bg-gray-50 border w-64 p-4">
        <div variant="primary" onClick={() => setModalShow(true)}>
          <div className="h-32">
            <h2 className="font-bold">{post.title.slice(0, 40)}</h2>
            <p>{post.body.slice(0, 40)}...</p>
            <p className="my-1 text-gray-400">Date: Sun 11 Dec 1:26GMT</p>
          </div>
          <img
            style={{ width: "100%" }}
            src="https://ichef.bbci.co.uk/images/ic/320xn/p03tsfyk.jpg"
            alt=""
          />
        </div>
        <button
          onClick={() => handleRemove(post.id)}
          type="button"
          className="removeBtn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <MyVerticallyCenteredModal
        title={post.title}
        post={post.body}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Newsfeed;
