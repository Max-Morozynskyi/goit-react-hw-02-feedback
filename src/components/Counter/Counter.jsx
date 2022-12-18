import PropTypes from 'prop-types';
import { ResultList } from './Counter.styled';

export function Counter({ good, neutral, bad }) {
  return (
    <ResultList>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
    </ResultList>
  );
}

Counter.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
