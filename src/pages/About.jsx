import React from "react";
import Container from "../component/layout/Container";
import Breadcrum from "../component/Breadcrum";
import Button from "../component/layout/Button";
import Flex from "../component/layout/Flex";

const About = () => {
  return (
    <section className="font-dm">
      <Container>
        <Breadcrum
          title={window.location.pathname.split("/")[1]}
          linkVal={"home"}
          link={"/"}
          currentPage={window.location.pathname.split("/")[1]}
          currentPageLink={"/about"}
        />
        <div className="mt-20">
          <p className="text-[#262626] md:text-3xl text-xl text-justify">
            <span className="font-bold md:text-4xl text-2xl">Orebi</span> is one
            of the world's leading ecommerce brands and is internationally
            recognized for celebrating the essence of classic Worldwide cool
            looking style.
          </p>
          <Button
            className={
              " bg-slate-600 hover:bg-slate-950 text-white text-xl rounded-sm transition-all duration-300 px-5 py-2 mt-20 inline-block"
            }
            title={"Contune Shopping"}
            link={"/shop"}
          />
        </div>
        <Flex
          className={
            "justify-between md:mt-40 mt-20 flex-col md:flex-row gap-y-10 md:gap-y-0"
          }
        >
          <div className="md:w-[31%] w-full">
            <h1 className="text-[#262626] text-2xl font-bold mb-2">
              Our Vision
            </h1>
            <p className="text-[#767676] text-base text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="md:w-[31%] w-full">
            <h1 className="text-[#262626] text-2xl font-bold mb-2">
              Our Story
            </h1>
            <p className="text-[#767676] text-base text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic.
            </p>
          </div>
          <div className="md:w-[31%] w-full">
            <h1 className="text-[#262626] text-2xl font-bold mb-2">
              Our Brands
            </h1>
            <p className="text-[#767676] text-base text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
