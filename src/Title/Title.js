import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { getCurrentMonth, availableNumberOfDays } from '../utils';
import styles from './Title.styles';

const getFontSizeHeader = (numberOfDays) => {
  if (numberOfDays > 1) {
    return 12;
  }
  return 16;
};

const Title = ({
  style,
  showTitle,
  numberOfDays,
  selectedDate,
  textStyle,
  onMonthPress,
  width,
}) => {
  if (!showTitle) {
    return <View style={[styles.title, style]} />;
  }
  const formattedMonth = getCurrentMonth(selectedDate);

  const splitFormatedDate = formattedMonth.split(' ');
  return (
    <TouchableOpacity
      style={[styles.title, { width }, style]}
      onPress={() => onMonthPress && onMonthPress(selectedDate, formattedMonth)}
      disabled={!onMonthPress}
    >
      <Text
        style={[
          {
            fontSize: getFontSizeHeader(numberOfDays),
            textAlign: 'center',
          },
          textStyle,
        ]}
      >
        {splitFormatedDate[0]?.substring(0, 3)}
      </Text>
      <Text
        style={[
          {
            fontSize: getFontSizeHeader(numberOfDays),
            textAlign: 'center',
            marginTop:2,
          },
          textStyle,
        ]}
      >
        {splitFormatedDate[1]}
      </Text>
    </TouchableOpacity>
  );
};

Title.propTypes = {
  showTitle: PropTypes.bool,
  numberOfDays: PropTypes.oneOf(availableNumberOfDays).isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  onMonthPress: PropTypes.func,
  width: PropTypes.number.isRequired,
};

export default React.memo(Title);
