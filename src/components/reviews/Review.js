import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';


class Review extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    });
  }

  render() {

    return (
      <div>
        <li>
          {this.props.review.text}
          <button onClick={() => this.handleOnClick()}> X </button>
        </li>
      </div>
    );
  }
};

export default Review;
