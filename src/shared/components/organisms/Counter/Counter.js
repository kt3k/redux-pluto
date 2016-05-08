import React, { Component, PropTypes } from 'react';
import { compose, onlyUpdateForPropTypes } from 'recompose';
import { createLocal } from '../../utils/localnames';
import styles from './styles.scss';

const { localNames: local } = createLocal(styles);

export default compose(
  onlyUpdateForPropTypes,
)(class Counter extends Component {

  static propTypes = {
    counterValue: PropTypes.number.isRequired,
  };

  render() {
    const { counterValue } = this.props;

    return (
      <div className={local('root')}>
        access counter: {counterValue || ''}
      </div>
    );
  }
});
