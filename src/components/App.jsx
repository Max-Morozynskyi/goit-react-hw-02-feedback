import React from 'react';

import { Buttons } from './Buttons/Buttons';
// import { Counter } from './Counter/Counter';
import { Heading, Wrapper } from './Wrapper.styled';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = task => {
    this.setState(prevState => ({
      [task]: prevState[task] + 1,
    }));
  };

  render() {
    // const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <Wrapper>
        <h1>Кафе Expresso собирает отзывы от своих клиентов</h1>
        <Heading>Поделитесь своим впечатлением</Heading>
        <Buttons options={options} onAddFdbck={this.handleIncrement} />
        <Heading>Результат опроса</Heading>
        {/* <Counter /> */}
      </Wrapper>
    );
  }
}
