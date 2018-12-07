import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import Block from '@material-ui/icons/Block';
import Refresh from '@material-ui/icons/Refresh';
import Add from '@material-ui/icons/Add';
import FileCopy from '@material-ui/icons/FileCopy';
import { buttonVariation } from '../themeconfig';

class ActionButtonsArray extends Component {

	buttonType(typename){
		switch(typename){
			case "refreshbutton":
				return(<Refresh/>)

			case "addbutton":
				return(<Add/>)

			case "exportbutton":
				return(<FileCopy/>)

			default:
				return(<Block/>)
		}
	}

	render(){
		const toRender = (this.props.buttonArray.length>0) ? (
				<div>
					{Object.entries(this.props.buttonArray).map(([key, value])=>{
						return(
							<span style={{paddingLeft: '10px'}}>
								<Button variant="fab" style={buttonVariation[value.type]}>{this.buttonType(value.type)}</Button>
							</span>
						)
					})}
				</div>
			) : (<div/>)

		return(
			<div style={{textAlign: 'right'}}>
				{toRender}
			</div>
		)
	}
}

ActionButtonsArray.propTypes = {
	buttonArray: PropTypes.array.isRequired,
}

export default withStyles()(ActionButtonsArray);