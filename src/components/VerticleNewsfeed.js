import React, { useState } from "react";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

const VerticleNewsfeed = ({ post, handleRemove }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="verticleCard bg-gray-50 border p-3 m-8 w-5/6 rounded cursor-pointer">
        <div
          className="flex"
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          <img
            style={{ width: "50px", height: "50px" }}
            className="rounded-full mr-3"
            src="https://ichef.bbci.co.uk/images/ic/320xn/p03tsfyk.jpg"
            alt=""
          />
          <div className="h-24">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body.slice(0, 100)}...</p>
            <p className="text-gray-400 my-2">Data: Sun 11 Dec 1:26GMT</p>
          </div>
        </div>
        <button
          onClick={() => handleRemove(post.id)}
          type="button"
          className="removeCard"
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

export default VerticleNewsfeed;
