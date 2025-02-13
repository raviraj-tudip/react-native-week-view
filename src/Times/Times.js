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
         * (Forked)
         */
        // <View key={time} style={[styles.label, { height},   time !== '4:00' && {justifyContent: 'center', alignItems: 'center', backgroundColor: '#EFEFEF', margin: 2, borderRadius: 4}]}>
        // FORKED
        <View key={time} style={[styles.label, { height}, {justifyContent: 'center', alignItems: 'center', backgroundColor: time === '0:00' ? '#7CBE3F' : time === '1:00' ? '#008DE6' : time === '2:00'  ? '#FF8033' : time === '3:00' ? '#F86284' : '#EFEFEF', margin: 2, borderRadius: 4}]}>
         <Text style={[styles.text, textStyle, {transform: [{ rotate: '270deg' }], color: 'white'}, ]}>{
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
        'Insect Control'
        :
        time === '3:00'
        &&
        'Bio Solutions'
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
