import React, { useEffect, useState } from "react";
import Container from "../component/layout/Container";
import Breadcrum from "../component/Breadcrum";
import Flex from "../component/layout/Flex";
import SideBar from "../component/layout/SideBar";
import { IoGridSharp, IoList } from "react-icons/io5";
import Filter from "../component/layout/Filter";
import Pagination from "../component/layout/Pagination";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await fetch("https://dummyjson.com/products?limit=100")
        .then((res) => res.json())
        .then((data) => setProducts(data.products));
    };
    getData();
  }, []);
  return (
    <section>
      <Container>
        <Breadcrum
          title={window.location.pathname.split("/")[1]}
          linkVal={"home"}
          link={"/"}
          currentPage={window.location.pathname.split("/")[1]}
          currentPageLink={"/shop"}
        />
        <Flex className="my-12 md:gap-8">
          <SideBar />
          <div className="md:w-[71%] w-full justify-around sm:justify-normal">
            <Flex className={"sm:mb-[60px] mb-5 flex-col sm:flex-row gap-y-5 "}>
              <Flex className={"w-[20%] gap-x-5 text-3xl"}>
                <IoGridSharp />
                <IoList />
              </Flex>
              <Flex
                className={
                  "md:w-[75%] w-full sm:justify-end justify-between sm:gap-x-10"
                }
              >
                <Filter
                  title={"Sort by:"}
                  selectClass={"lg:w-[200px] w-[120px]"}
                >
                  <option value="">Featured</option>
                  <option value="">Best Seller</option>
                  <option value="">New Arrival</option>
                </Filter>
                <Filter title={"Show:"} selectClass={"lg:w-[100px]  w-[80px] "}>
                  <option value="">12</option>
                  <option value="">24</option>
                  <option value="">36</option>
                </Filter>
              </Flex>
            </Flex>

            <Pagination itemsPerPage={12} data={products} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Shop;
