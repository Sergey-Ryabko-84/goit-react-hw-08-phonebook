import { RotatingLines } from 'react-loader-spinner';
import { SpinnerWrapper } from './Loader.styled';

export const Loader = () => (
  <SpinnerWrapper>
    Loading
    <RotatingLines
      // strokeColor="#212735d0"
      strokeColor="#c1c9d9"
      strokeWidth="5"
      animationDuration="0.75"
      width="36"
      visible={true}
    />
  </SpinnerWrapper>
);