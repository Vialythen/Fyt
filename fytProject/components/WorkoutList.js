import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem} from 'native-base';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import  ExercisePanel  from './ExercisePanel';

class WorkoutList extends React.Component {

  render() {
 let sampleData = [
      {x: '2018-01-01', y: 30},
      {x: '2018-01-02', y: 200},
      {x: '2018-01-03', y: 170},
      {x: '2018-01-04', y: 250},
      {x: '2018-01-05', y: 10}
  ];
    return (
<PureChart data={sampleData} type='line' />    );
  }
}


