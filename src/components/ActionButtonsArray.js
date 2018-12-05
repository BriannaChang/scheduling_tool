import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';
import {connect} from 'react-redux';

class ActionButtonsArray extends Component {
	
	static propTypes = {
		buttonArray: PropTypes.element.isRequired
	}

	render(){


		return(
			<div>
				{console.log(this.props.buttonArray)}
			</div>
		)
	}
}

export default withStyles()(ActionButtonsArray);