import React from "react";
import Heading from "components/about/Heading";
import More from "components/about/More";
import Page from "components/utility/Page";
import About from "@/components/about/About";

function about() {
  return (
    <Page
      currentPage="About"
      meta={{
        desc: "Learn more about me — my journey, skills, and passion for design and development.",
      }}
    >
      <Heading />
      <About />
      <More />
    </Page>
  );
}

export default about;
