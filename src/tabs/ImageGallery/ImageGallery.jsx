import React, { Component } from 'react';
import { Form } from 'components/Form/Form';
import { getPhotos } from 'api/gallery';
import { ImageGalleryList } from 'components/ImageGallery/ImageGalleryList';
import { Container, Section } from 'components';
import { Loader } from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = {
    photos: [],
    query: '',
    page: 1,
    isLoadMore: false,
    isEmpty: false,
    error: null,
    isLoading: false,
    largeImgUrl: '',
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      getPhotos(query, page)
        .then(({ results, total }) => {
          if (!results.length) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prev => ({
            photos: [...prev.photos, ...results],
            isLoadMore: page < Math.ceil(total / 20),
          }));
          console.log(results);
        })
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleSubmit = query => {
    this.setState({ query, isEmpty: false, photos: [], page: 1, error: null });
  };
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleClickImg = (url = '') => {
    this.setState({ largeImgUrl: url });
  };

  render() {
    const { photos, isLoadMore, isEmpty, error, isLoading, largeImgUrl } =
      this.state;
    return (
      <>
        <Section>
          <Container>
            <Form addTodo={this.handleSubmit} text="Search photos" />
            <ImageGalleryList photos={photos} openModal={this.handleClickImg} />
            {isLoading && <Loader />}
            {isLoadMore && (
              <button onClick={this.handleLoadMore} type="button">
                Load more
              </button>
            )}
            {isEmpty && <p>No photos for your query!</p>}
            {error && <p>Sorry, something went wrong {error}</p>}
            {largeImgUrl && (
              <Modal closeModal={this.handleClickImg}>
                <img src={largeImgUrl} alt="" width="70%" />
              </Modal>
            )}
          </Container>
        </Section>
      </>
    );
  }
}
