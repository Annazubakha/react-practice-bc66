import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGalleryList = ({ photos }) => {
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'center',
      }}
    >
      {photos.map(({ id, urls, alt_description }) => (
        <ImageGalleryItem key={id} small={urls.small} alt={alt_description} />
      ))}
    </ul>
  );
};
