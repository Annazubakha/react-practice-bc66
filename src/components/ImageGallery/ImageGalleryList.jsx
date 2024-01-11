import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGalleryList = ({ photos, openModal }) => {
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
        <ImageGalleryItem
          openModal={openModal}
          key={id}
          small={urls.small}
          alt={alt_description}
          full={urls.full}
        />
      ))}
    </ul>
  );
};
