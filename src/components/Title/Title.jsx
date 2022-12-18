import PropTypes from 'prop-types';
import { Heading } from './Title.styled';

export function Title({ titleText }) {
  return <Heading>{titleText}</Heading>;
}

Title.propTypes = {
  titleText: PropTypes.string.isRequired,
};
