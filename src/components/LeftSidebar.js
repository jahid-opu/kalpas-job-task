import React from "react";

const LeftSidebar = ({
  viewToggle,
  setViewToggle,
  setModalShow,
  feedback,
  setFeedback,
}) => {
  const modalShow = () => {
    setModalShow(true);
    setFeedback(true);
  };

  return (
    <div className="p-4 ml-8">
      <div className="mb-3 flex p-2 w-52 justify-around bg-gray-50">
        <img
          style={{ width: "40px", height: "40px" }}
          className="rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKNefCbvtY3-yBY3np4fKVrD2c-FZCvSSNHJPM-e4SwRrtYOdmVjdpghX-fsK7itHSK4&usqp=CAU"
          alt=""
        />
        <div>
          <h3 className="font-bold">Hi Reader,</h3>
          <p>Here's your news</p>
        </div>
      </div>
      {!feedback && (
        <div className="mb-3 p-2 w-52 bg-gray-50 ">
          <h2 className="font-bold text-center mb-4">View Toggle</h2>
          <div
            onClick={() => setViewToggle(!viewToggle)}
            className="flex justify-center cursor-pointer"
          >
            <div
              className={`${
                viewToggle ? "bg-gray-300" : "bg-emerald-400 "
              } py-2 px-4 rounded-l`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <div
              className={`${
                viewToggle ? "bg-emerald-400" : " bg-gray-300"
              } py-2 px-4 rounded-r`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      <div className="p-2 w-52 bg-gray-50">
        <h2 className="font-bold text-center">Have a Feedback?</h2>
        <p
          variant="primary"
          onClick={() => modalShow()}
          className={`${
            feedback ? "bg-red-400" : "bg-emerald-400"
          } p-1 m-2 text-center rounded cursor-pointer`}
        >
          We are listening
        </p>
      </div>
    </div>
  );
};

export default LeftSidebar;
