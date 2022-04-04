import {
  StatsContainer,
  Stat,
  StatIcon,
  StatTitle,
  StatSubTitle,
} from "./StatsStyle";

export default function Stats() {
  return (
    <StatsContainer>
      <Stat>
        <StatIcon color="#FE8432" />
        <StatTitle>25,356</StatTitle>
        <StatSubTitle>Projects Done</StatSubTitle>
      </Stat>
      <Stat>
        <StatIcon color="#18A7B9" />
        <StatTitle>15,200</StatTitle>
        <StatSubTitle>Buildings Done</StatSubTitle>
      </Stat>
      <Stat>
        <StatIcon color="#42B918" />
        <StatTitle>350+</StatTitle>
        <StatSubTitle>Total Employees</StatSubTitle>
      </Stat>
    </StatsContainer>
  );
}
