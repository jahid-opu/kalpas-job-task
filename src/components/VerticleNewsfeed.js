import React, { useState } from "react";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import { Modal, Button } from "react-bootstrap";

const VerticleNewsfeed = ({ post, handleRemove }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className=" bg-gray-50 border p-4">
        <div variant="primary" onClick={() => setModalShow(true)}>
          <img
            style={{ width: "100px" }}
            src="https://ichef.bbci.co.uk/images/ic/320xn/p03tsfyk.jpg"
            alt=""
          />
          <div className="h-24">
            <h2>{post.title}</h2>
            <p>Data: Sun 11 Dec 1:26GMT</p>
          </div>
        </div>
        <button
          onClick={() => handleRemove(post.id)}
          type="button"
          className=""
        >
          Delete
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
