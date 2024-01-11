import { InfinitySpin } from 'react-loader-spinner';
import { Backdrop } from '../Backdrop/Backdrop.styled';

export const Loader = () => {
  return (
    <Backdrop>
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </Backdrop>
  );
};
