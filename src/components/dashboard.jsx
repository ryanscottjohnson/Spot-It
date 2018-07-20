import React from 'react';
import {connect} from 'react-redux';

import List from './list.jsx';

import {
  listsLoad,
} from '../actions/spot-it.js';

class Dashboard extends React.Component {

  componentDidMount() {
    this.props.listsLoad();
  }

  render() {
    return <React.Fragment>
        <h1>Spot the same word!</h1>
        <h2>Your Score: {this.props.lists.score}</h2>
        <List info={this.props.lists.list1} />
        <List info={this.props.lists.list2} />
      </React.Fragment>
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists
  }
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    listsLoad: () => dispatch(listsLoad())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);