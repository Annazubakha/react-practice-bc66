export const ImageGalleryItem = ({ alt, small }) => {
  return (
    <li style={{ flexBasis: '20%' }}>
      <img src={small} alt={alt} />
    </li>
  );
};
