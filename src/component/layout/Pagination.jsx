import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Products from "./Products";
import Flex from "./Flex";

const Pagination = ({ itemsPerPage, data }) => {
  // Example items, to simulate fetching from another resources.
  const items = data;
  function Items({ currentItems }) {
    console.log(data.id);
    return (
      <>
        {currentItems &&
          currentItems.map((products) => (
            <Products
              key={products.id}
              link={`/shop/${products.id}`}
              className={"w-full sm:w-[47%] lg:w-[31.5%]"}
              label={products.brand}
              labelShow={true}
              ProductImg={products.thumbnail}
              ProductTitle={products.category}
              Price={products.price}
              // link={}
            />
          ))}
      </>
    );
  }

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Flex
        className={"flex-wrap gap-y-10 xl:gap-x-6 gap-4 justify-center mb-12"}
      >
        <Items currentItems={currentItems} />
      </Flex>
      <Flex
        className={
          "xl:justify-between xl:items-center flex-col xl:flex-row gap-y-10 xl:gap-y-0"
        }
      >
        <ReactPaginate
          className="flex flex-wrap sm:gap-x-5 gap-x-1 gap-y-6 sm:gap-y-0"
          pageLinkClassName="border-[1px] border-[#F0F0F0] hover:border-gray-800 font-semibold py-2 px-4 duration-500"
          activeLinkClassName="bg-black text-white"
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
        />
        <p className="text-[#767676] text-sm font-mono xl:ml-0 ml-5">
          Products from {itemOffset == 0 ? 1 : itemOffset} to{" "}
          {endOffset >= 100 ? 100 : endOffset} of {items.length}{" "}
        </p>
      </Flex>
    </>
  );
};

export default Pagination;
