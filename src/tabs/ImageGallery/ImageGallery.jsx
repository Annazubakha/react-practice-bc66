import React, { Component } from 'react';
import { Form } from 'components/Form/Form';
import { getPhotos } from 'api/gallery';
import { ImageGalleryList } from 'components/ImageGallery/ImageGalleryList';
import { Container, Section } from 'components';

export class ImageGallery extends Component {
  state = {
    photos: [],
    query: '',
    page: 1,
    isLoadMore: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      getPhotos(query, page).then(({ results, total }) => {
        this.setState(prev => ({
          photos: [...prev.photos, ...results],
          isLoadMore: page < Math.ceil(total / 20),
        }));
        console.log(results);
      });
    }
  }

  handleSubmit = query => {
    this.setState({ query });
  };
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    const { photos, isLoadMore } = this.state;
    return (
      <>
        <Section>
          <Container>
            <Form addTodo={this.handleSubmit} text="Search photos" />
            <ImageGalleryList photos={photos} />
            {isLoadMore && (
              <button onClick={this.handleLoadMore} type="button">
                Load more
              </button>
            )}
          </Container>
        </Section>
      </>
    );
  }
}
