import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCount } from 'Actions';
import style from './index.scss';

class TestComponent extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  state = {
    count: 0
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return props.count || state.count;
  }

  handleClick = ({ target }) => {
    console.log('Handle Click');
    let count = Math.max(~~this.props.count, this.state.count);
    this.props.getCount(count);
  }

  render() {
    return (
      <div className={style.container} data-qa="testComponent">
        <div className={style.title} onClick={(e) => this.handleClick(e)}>
          Hi { this.props.name }
        </div>
        <div className={style.result}>
          Clicks count { this.props.count }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count
})

const mapDispatchToProps = (dispatch) => ({
  getCount: (count) => dispatch(getCount(count))
})

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);