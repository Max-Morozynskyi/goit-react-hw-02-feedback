import React from 'react';

class FeedbackCounter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = () => {
    this.setState((state, props) => ({
      value: state.props.value + 1,
    }));
  };
}

export const App = () => {
  return (
    <>
      <h1>Кафе Expresso собирает отзывы от своих клиентов</h1>
    </>
  );
};
