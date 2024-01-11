export const ImageGalleryItem = ({ alt, small, full, openModal }) => {
  return (
    <li onClick={() => openModal(full)} style={{ flexBasis: '20%' }}>
      <img src={small} alt={alt} />
    </li>
  );
};
