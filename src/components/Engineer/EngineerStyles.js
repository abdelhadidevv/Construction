import styled from "styled-components";

export const EngineerContainer = styled.div`
  width: 362px;
  height: 435px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 0px 50px rgba(198, 217, 225, 0.3);
  border: none;
  border-radius: 5px;
`;

export const IconButton = styled.img`
  height: 22px;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100px;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-top: 22px;
  color: #313131;
`;

export const Location = styled.p`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  margin-top: 7px;
  color: #6b6b6b;
`;

export const PhoneNum = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 47px;
  color: #6b6b6b;
`;

export const Email = styled.p`
  font-size: 17px;
  font-weight: 500;
  margin-top: 8px;
  color: #18a7b9;
`;
