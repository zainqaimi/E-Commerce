import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
// import Dropdown from "../../Dropdown";
// products APi...
// https://fakestoreapi.com/products
function Home() {
  return (
    <>
      <main className="">
        <Section1 />
        {/* <Dropdown /> */}
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </main>
    </>
  );
}

export default Home;
