import "./App.css";
import LeftSidebar from "./components/LeftSidebar";
import Newsfeed from "./components/Newsfeed";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import FormModal from "./components/FormModal";
import VerticleNewsfeed from "./components/VerticleNewsfeed";

function App() {
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [viewToggle, setViewToggle] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const handleRemove = (id) => {
    const newItem = currentItems.filter((item) => item.id !== id);
    setCurrentItems(newItem);
  };
  function Items({ currentItems }) {
    return (
      <>
        {currentItems.map((item) =>
          viewToggle ? (
            <VerticleNewsfeed
              key={item.id}
              post={item}
              handleRemove={handleRemove}
            />
          ) : (
            <Newsfeed key={item.id} post={item} handleRemove={handleRemove} />
          )
        )}
      </>
    );
  }

  return (
    <div className="bg-gray-200 grid grid-cols-12 py-12">
      <div className=" col-span-3">
        <LeftSidebar
          viewToggle={viewToggle}
          setViewToggle={setViewToggle}
          setModalShow={setModalShow}
        />
      </div>
      <div className="col-span-9">
        {viewToggle && (
          <div className="">
            {currentItems && (
              <Items currentItems={currentItems} handleRemove={handleRemove} />
            )}
          </div>
        )}
        {!viewToggle && (
          <div className="flex justify-center	 flex-wrap gap-4">
            {currentItems && (
              <Items currentItems={currentItems} handleRemove={handleRemove} />
            )}
          </div>
        )}
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >>>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<<<"
          renderOnZeroPageCount={null}
          containerClassName="paginationBttns"
          previousLinkClassName="previousBttn"
          nextLinkClassName="nextBttn"
          disabledClassName="paginationDisabled"
          activeClassName="paginationActive"
        />
      </div>
      <FormModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default App;
