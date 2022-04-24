import React from "react";
import {
  BlogContainer,
  TitleBlog,
  SubTitleBlog,
  LineBorder,
  Line,
} from "./BlogStyles";

export default function Blog({ img }) {
  return (
    <BlogContainer img={img}>
      <TitleBlog>Unleash Your Creativity</TitleBlog>
      <SubTitleBlog>Nine for Mortal Men, doomed to die, One for</SubTitleBlog>
    </BlogContainer>
  );
}

export function Slider() {
  return (
    <div style={{ display: "flex", flexDirection: "row", height: "467px" }}>
      <Line />
      <LineBorder />
    </div>
  );
}
