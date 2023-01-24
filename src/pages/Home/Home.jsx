import { Helmet } from "react-helmet";
import { HomeWrapper, Title } from './Home.styled';
import phonebook from '../../images/phonebook-1.png'

export default function  Home () {
  return (
    <HomeWrapper>
      <Helmet>
        <title>Phone Book</title>
      </Helmet>
      <Title>
        <img src={phonebook} alt="phonebook" width="96" height="96" />
        Phone Book
      </Title>
    </HomeWrapper>
  );
};
