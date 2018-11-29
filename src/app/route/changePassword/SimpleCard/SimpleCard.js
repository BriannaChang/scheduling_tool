import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyTextField from './TextField/MyTextField.js';
import TextField from '@material-ui/core/TextField';

const styles = {
  card: {
    minWidth: 275,
    margin: '25px',
    align: 'center',
    textAlign:'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  margin: {
    margin:'25px',
  },
  centre: {
    align:'center',
  }
};


const SimpleCard=(props)=> {
  const { classes } = props;

  return (
    <Card className={classes.card}>
    <form
    onSubmit={props.valsubmit}
     >
    <div>
      <CardContent>

        <MyTextField label="Old Password"/>
        <MyTextField label="New Password"/>
        <MyTextField label="Retype Password"/>




        </CardContent>


        </div>
      </form>

      <CardActions style={{justifyContent:'center'}}>
        <Button size="large" className={classes.centre} variant="contained" color="primary">Submit</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
