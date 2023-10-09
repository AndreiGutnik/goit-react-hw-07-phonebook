import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <ThreeDots
        height="50"
        width="50"
        radius="9"
        color="#3F51B5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: 'center' }}
        wrapperClassName=""
        visible={true}
      />
    </>
  );
};
