import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchAPI } from '../actions/index';

class TitlesSubReddit extends Component {

  refreshTitles = () => {
    const { current, refreshTitles } = this.props;
    refreshTitles(current);
  }
  
  renderTitles = () => {
    const { subRedTitles, lastRefresh, resquestFailure, messageFailture } = this.props;
    if (subRedTitles.length !== 0) return (
      <ol>
        <em>Ultima atualização {lastRefresh}</em>
        <button
          onClick={this.refreshTitles}
          >
            Refresh
        </button>

        { subRedTitles.map((title, index) => (
          <li key={index}>{title}</li>
        )) }
      </ol>
  )
  if (resquestFailure) return (
    <p> {messageFailture} </p>
  )
  return null;
  }


  render() {
    const { isLoading } = this.props;
    return isLoading
    ? <p>Loading...</p>
    : this.renderTitles();
  }
}

const mapStateToProps = (state) => ({
  subRedTitles: state.redditTitles.titles,
  isLoading: state.redditTitles.isLoading,
  lastRefresh: state.redditTitles.lastRefresh,
  current: state.redditTitles.current,
  resquestFailure: state.redditTitles.resquestFailure,
  messageFailture: state.redditTitles.messageFailture,
});

const mapDispatchToProps = (dispatch) => ({
  refreshTitles: (value) => dispatch(fetchAPI(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TitlesSubReddit);
