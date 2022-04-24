import styled from "styled-components";
import { ceo } from "./assets/index";

export const ContainerControl = styled.div`
  width: 120px;
  height: 66px;
  box-shadow: 5px 0px 50px rgba(198, 217, 225, 0.3);
  border-radius: 33px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const ControlBtn = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ color }) => (color ? "#18A7B9" : "initial")};
`;

export const Icon = styled.img`
  size: 8px;
`;

export const CeoContainer = styled.div`
  background-image: url(${ceo});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 939px;
`;

export const OpacityLayer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 939px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 176px 200px;
`;

export const CeoTitle = styled.p`
  font-size: 54px;
  font-weight: 500;
  line-height: 76px;
  color: #fafafa;
`;

export const CeoIcon = styled.img`
  size: 64;
  align-self: ${({ alignSelf }) => (alignSelf ? "flex-start" : "flex-end")};
`;

export const CeoMessage = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  margin: 0 91px;
  color: #fafafa;
`;

export const Input = styled.input`
  width: 489px;
  height: 64px;
  font-weight: 400;
  font-size: 18px;
  color: #6b6b6b;
  background: #f9f9f9;
  border-radius: 7px;
  border: none;
  padding-left: 24px;
  padding-bottom: 17px;
  padding-top: 20px;
  outline: none;
  text-align: start;
`;

export const InputArea = styled.textarea`
  width: 489px;
  height: 200px;
  font-weight: 400;
  font-size: 18px;
  color: #6b6b6b;
  background: #f9f9f9;
  border-radius: 7px;
  border: none;
  padding-left: 24px;
  padding-bottom: 17px;
  padding-top: 20px;
  outline: none;
  resize: none;
`;

export const MapImage = styled.img`
  width: 782px;
  height: 500px;
`;
