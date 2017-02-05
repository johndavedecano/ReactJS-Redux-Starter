import React, { Component } from 'react';
import styles from './Home.scss';
import Todos from 'components/Todos/Todos';

export default class Home extends Component {
  render() {
    return (<div className={styles.home}>
      <Todos />
    </div>);
  }
}
