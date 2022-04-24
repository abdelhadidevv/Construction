import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const RowContainer = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterTitle = styled.p`
  color: #18a7b9;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: -6%;
`;

export const Text = styled.p`
  color: #6b6b6b;
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
`;

export const LinksTitle = styled.p`
  color: #313131;
  font-size: 18px;
  font-weight: 600;
`;

export const Link = styled.p`
  color: #6b6b6b;
  font-size: 16px;
  font-weight: 300;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #f4f4f4;
`;

export const Copyright = styled.p`
  color: #c2c2c2;
  font-size: 14px;
  font-weight: 400;
`;

export const SocialIcon = styled.img`
  color: #c2c2c2;
  font-size: 14px;
  font-weight: 400;
  background: #18a7b9;
  padding: 8px 8px;
  width: 28.47px;
  height: 28.47px;
  border: none;
  border-radius: 5px;
`;

export const InputEmail = styled.input`
  color: #6b6b6b;
  font-weight: 300;
  background: inherit;
  border: none;
  outline: none;
  font-size: inherit;
`;

export const InputContainer = styled.div`
  width: 174px;
  height: 40px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background: #fafafa;
`;
