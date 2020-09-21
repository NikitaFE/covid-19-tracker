import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Dictionary from '../../constants/Dictionary';

import useStyles from './InfoBox.styled.js';

function InfoBox({ title, cases, isRed, active, total, onClick }) {
  const classes = useStyles();

  return (
    <Card
      onClick={onClick}
      className={
        classNames(classes.infoBox, { 
          [classes.infoBoxSelected]: active, 
          [classes.infoBoxRed]: isRed,
        })
      }
    >
      <CardContent>
        <Typography color="textSecondary">
          {title}
        </Typography>

        <h2
          className={classNames(classes.infoBoxCases, { [classes.infoBoxCasesGreen]: !isRed })}
        >
          {cases}
        </h2>
        
        <Typography className={classes.infoBoxTotal} color="textSecondary">
          {`${total} ${Dictionary.TOTAL}`}
        </Typography>
      </CardContent>
    </Card>
  )
};

InfoBox.propTypes = {
  title: PropTypes.string.isRequired,
  cases: PropTypes.string.isRequired,
  isRed: PropTypes.bool,
  active: PropTypes.bool.isRequired,
  total: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

InfoBox.defaultProps = {
  title: Dictionary.CASES,
  cases: '1234',
  active: false,
  total: '4321',
  onClick: () => {},
}

export default InfoBox;
