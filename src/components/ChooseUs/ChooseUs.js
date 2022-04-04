import styled from "styled-components";

export const CorneredImage = styled.img`
  border-radius: 10px;
  border-top-right-radius: 292px;
  width: 584px;
  height: 100%;
`;

export const PointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

export const PointContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const PointIcon = styled.div`
  width: 76px;
  height: 76px;
  border-radius: 5px 35px;
  background: ${({ color }) => color && color};
`;

export const PointNumber = styled.h2`
  position: absolute;
  top: -30px;
  left: 29px;
  font-size: 72px;
  font-weight: 600;
  color: #313131;
  line-height: 100%;
`;

export const PointTitle = styled.p`
  width: 359px;
  margin-left: 50px;
  justify-self: end;
  font-size: 18px;
  font-weight: 400;
  color: #6b6b6b;
  line-height: 28px;
`;
