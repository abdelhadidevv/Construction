import React from "react";
import { CompanyContainer, Icon } from "./CompaniesStyles";
import { icon1, icon2, icon3, icon4, icon5 } from "../../assets/index";

const Companies = () => {
  return (
    <CompanyContainer>
      <Icon src={icon5} />
      <Icon src={icon4} />
      <Icon src={icon3} />
      <Icon src={icon2} />
      <Icon src={icon1} />
    </CompanyContainer>
  );
};

export default Companies;
