import React, { Component } from 'react';
import { Form } from 'components/Form/Form';
import { getPhotos } from 'api/gallery';

export class ImageGallery extends Component {
  state = {
    query: '',
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      getPhotos(query, page).then(data => {
        console.log(data);
      });
    }
  }

  handleSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Form addTodo={this.handleSubmit} text="Search photos" />
      </>
    );
  }
}
