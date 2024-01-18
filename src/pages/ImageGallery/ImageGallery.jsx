import React, { useEffect, useState } from 'react';
import { Form } from 'components/Form/Form';
import { getPhotos } from 'api/gallery';
import { ImageGalleryList } from 'components/ImageGallery/ImageGalleryList';
import { Container, Section } from 'components';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

const ImageGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImgUrl, setLargeImgUrl] = useState('');

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);

    (async () => {
      try {
        const { results, total } = await getPhotos(query, page);

        if (!results.length) {
          setIsEmpty(true);
          return;
        }

        setPhotos(prev => [...prev, ...results]);
        setIsLoadMore(page < Math.ceil(total / 20));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
    setIsEmpty(false);
    setPhotos([]);
    setPage(1);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleClickImg = (url = '') => {
    setLargeImgUrl(url);
  };

  return (
    <>
      <Section>
        <Container>
          <Form addTodo={handleSubmit} text="Search photos" />
          <ImageGalleryList photos={photos} openModal={handleClickImg} />
          {isLoading && <Loader />}
          {isLoadMore && (
            <button onClick={handleLoadMore} type="button">
              Load more
            </button>
          )}
          {isEmpty && <p>No photos for your query!</p>}
          {error && <p>Sorry, something went wrong {error}</p>}
          {largeImgUrl && (
            <Modal closeModal={handleClickImg}>
              <img src={largeImgUrl} alt="" width="70%" />
            </Modal>
          )}
        </Container>
      </Section>
    </>
  );
};

export default ImageGallery;
