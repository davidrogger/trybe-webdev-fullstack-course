import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchAPI, getTitles } from '../actions/'

class SelectSubReddit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seletectedOption: 'Selecione um SubReddit',
    }
  }

  selectedHandle = ({ target }) => {
    const { value } = target;
    const { getApiResponse, titles } = this.props;
    this.setState({ seletectedOption: value });
    getApiResponse(value);
    titles();
  }

  render() {
    const { seletectedOption } = this.state;

    return (
      <select value={ seletectedOption } onChange={this.selectedHandle}>
        <option disabled>Selecione um SubReddit</option>
        <option value="reactjs">ReactJS</option>
        <option value="lostarkgame">Lost Ark</option>
      </select>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getApiResponse: (value) => dispatch(fetchAPI(value)),
  titles: () => dispatch(getTitles()),
})

export default connect(null, mapDispatchToProps)(SelectSubReddit);