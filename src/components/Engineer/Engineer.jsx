import {
  EngineerContainer,
  IconButton,
  Avatar,
  UserName,
  Location,
  PhoneNum,
  Email,
} from "./EngineerStyles";
import { Container } from "../../globalStyles";
import { star, more} from "../../assets/index";

export default function Engineer({ avatar ,username,location,phone,email}) {
  return (
    <EngineerContainer>
      <Container
        display="flex"
        flexDr="row"
        width="100%"
        pt="29px"
        pr="30px"
        pl="30px"
      >
        <IconButton src={star} />
        <IconButton src={more} />
      </Container>
      <Avatar src={avatar} />
      <UserName>{username}</UserName>
      <Location>{location}</Location>
      <PhoneNum>{phone}</PhoneNum>
      <Email>{email}</Email>
    </EngineerContainer>
  );
}
