import styled from "styled-components";

export const BlogContainer = styled.div`
  width: 496px;
  height: 467px;
  border: none;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-bottom: 55px;
  background-image: ${({ img }) => img && `url(${img})`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const TitleBlog = styled.p`
  font-size: 27px;
  font-weight: 600;
  color: #ffffff;
`;
export const SubTitleBlog = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
`;

export const LineBorder = styled.div`
  width: 2px;
  height: 467px;
  background: #cbcbcb;
  display: inline;
`;

export const Line = styled.div`
  margin-top: 98px;
  margin-right: -2px;
  width: 9px;
  height: 53px;
  background: #18a7b9;
  display: inline;
  z-index: 1;
`;
