import { Backdrop } from 'components/Backdrop/Backdrop.styled';
import React, { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscPress);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscPress);
  }
  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal('');
    }
  };

  handleEscPress = event => {
    if (event.code === 'Escape') this.props.closeModal('');
  };
  render() {
    return (
      <Backdrop onClick={this.handleBackdropClick}>
        <img src={this.props.url} alt="" width="70%" />
      </Backdrop>
    );
  }
}
