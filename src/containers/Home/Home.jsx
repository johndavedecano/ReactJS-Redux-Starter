import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { loadUsers } from 'application/modules/users/UserActions';

import styles from './Home.scss';

const state = createSelector(
  (root) => root.users,
  (users) => {
    return {
      users
    };
  }
);

const actions = dispatch => ({
  loadUsers: (params) => dispatch(loadUsers(params))
});

@connect(state, actions)
export default class Home extends Component {
  componentWillMount() {
    this.props.loadUsers();
  }
  render() {
    return (<div className={styles.home} />);
  }
}
