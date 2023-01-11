import React, { Component } from 'react';
// import FeedbackOptions from 'components/FeedbackOptions';
// import Statistics from 'components/Statistics';
// import Section from 'components/Section';
// import Notification from 'components/Notification';
import css from '../App/App.module.css';

export class App extends Component {
  state = {};

  onLeaveFeedback = options => {
    this.setState(prevState => ({ [options]: prevState[options] + 1 }));
  };

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    return <div className={css.card}></div>;
  }
}
