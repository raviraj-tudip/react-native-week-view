import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './Times.styles';
import { getTimeLabelHeight } from '../utils';

const Times = ({ times, hoursInDisplay, timeStep, textStyle, width }) => {
  const height = getTimeLabelHeight(hoursInDisplay, timeStep);
  return (
    <View style={[styles.columnContainer, { width }]}>
      {times.map((time) => (
      // <View key={time} style={[styles.label, { height }]}>
      // <Text style={[styles.text, textStyle]}>{time}</Text>
      // </View>

      /**
         * Mapped Lables name with time index
         * So, Lable name can be visible to user
         */
        <View key={time} style={[styles.label, { height, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EFEFEF', margin: 2, borderRadius: 4}]}>
        <Text style={[styles.text, textStyle, {transform: [{ rotate: '270deg' }]}, ]}>{
        time === '0:00' 
        ?
        'Weed Control'
        :
        time === '1:00'
        ?
        'Disease Control'
        :
        time === '2:00'
        ?
        'Insection Control'
        :
        time === '3:00'
        &&
        'Bio Solution'
      }</Text>
      </View>
      ))}
    </View>
  );
};

Times.propTypes = {
  times: PropTypes.arrayOf(PropTypes.string).isRequired,
  hoursInDisplay: PropTypes.number.isRequired,
  timeStep: PropTypes.number.isRequired,
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  width: PropTypes.number.isRequired,
};

export default React.memo(Times);
