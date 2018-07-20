import React from 'react';
import {connect} from 'react-redux';

import {
    listsPoint,
    listsLoad,
} from '../actions/spot-it.js'

class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.checkMatch = this.checkMatch.bind(this);
    }

    checkMatch(event) {
        event.preventDefault();
        let targetValue = event.target.innerText;

        let commonWord = this.props.lists.commonWord;

        if (targetValue === commonWord) {
            this.props.listsPoint();
            this.props.listsLoad();
        }
    }

    render() {
        return <li>
            <button onClick={this.checkMatch}>{this.props.info}</button>
        </li>
    }
}

const mapStateToProps = state => {
    return {
        lists: state.lists
    }
};

const mapDispatchToProps = (dispatch, getState) => {
    return {
        listsPoint: () => dispatch(listsPoint()),
        listsLoad: () => dispatch(listsLoad())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);