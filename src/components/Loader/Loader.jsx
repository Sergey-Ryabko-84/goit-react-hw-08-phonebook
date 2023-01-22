import { RotatingLines } from 'react-loader-spinner';
import { SpinnerWrapper } from './Loader.styled';

export const Loader = () => (
  <SpinnerWrapper>
    Loading
    <RotatingLines
      strokeColor="#2b4055d0"
      strokeWidth="5"
      animationDuration="0.75"
      width="36"
      visible={true}
    />
  </SpinnerWrapper>
);