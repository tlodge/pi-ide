import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as paletteActions, viewConstants, selector } from '../';
import "./Palette.scss";
import FontIcon from 'react-md/lib/FontIcons';
import Paper from 'react-md/lib/Papers';
import Button from 'react-md/lib/Buttons/Button';
import PaletteLayout from './PaletteLayout';


@connect(selector, (dispatch) => {
	return {
  		actions: bindActionCreators(paletteActions, dispatch)
	}
})
export default class Palette extends Component {

  render() {
    const {h} = this.props;
    return (
      <Paper zDepth={2} style={{position:'absolute', zIndex:1, overflowY:'visible', height:h, color:"white", background:"#4A4B4D", width:viewConstants.PALETTE_WIDTH}}>
        <PaletteLayout {...this.props} />
      </Paper>
    );
  }
}