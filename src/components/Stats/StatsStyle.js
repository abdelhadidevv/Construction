import styled from "styled-components";

export const StatsContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 500px;
  min-height: 102px;
`;

export const Stat = styled.div`
  position: relative;
`;

export const StatIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 41px;
  height: 45px;
  background: ${({ color }) => color && color};
  clip-path: circle(50% at 0%);
  transform: rotate(220deg);
`;
export const StatTitle = styled.h2`
  position: absolute;
  top: 17px;
  left: 15px;
  font-size: 40px;
  font-weight: 500;
  color: #313131;
`;
export const StatSubTitle = styled.p`
  position: absolute;
  left: 15px;
  bottom: 0;
  top: 80px;
  font-size: 20px;
  font-weight: 400;
  color: #6b6b6b;
  white-space: nowrap;
`;
