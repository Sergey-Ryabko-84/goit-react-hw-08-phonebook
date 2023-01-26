import { Helmet } from "react-helmet";
import useWindowDimensions from 'hooks/useWindowDimensions';
import { HomeWrapper, Title } from './Home.styled';
import phonebook from '../../images/phonebook-1.png'

export default function Home() {
  const { width } = useWindowDimensions();

  return (
    <HomeWrapper>
      <Helmet>
        <title>Phone Book</title>
      </Helmet>
      <Title>
        {width < 768 ? (
          <img src={phonebook} alt="phonebook" width="54" height="54" />
        ) : (
          <img src={phonebook} alt="phonebook" width="96" height="96" />
        )}
        Phone Book
      </Title>
    </HomeWrapper>
  );
};
