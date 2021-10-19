import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Alto_icon from '../../Buoi3/RenderList/images/Alto_icon.png';
import Alto_0 from '../../Buoi3/RenderList/images/Alto_0.png';
import GameInfo from './GameInfo';

export default class DemoFlatList extends Component {
  listGameInfo = [
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      preview: Alto_0,
      backgroundColor: '#824671CC',
    },

    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      preview: Alto_0,
      backgroundColor: '#F4B940',
    },
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      preview: Alto_0,
      backgroundColor: '#96CC96',
    },
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      preview: Alto_0,
      backgroundColor: '#824671CC',
    },

    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      preview: Alto_0,
      backgroundColor: '#F4B940',
    },
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      preview: Alto_0,
      backgroundColor: '#96CC96',
    },
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      preview: Alto_0,
      backgroundColor: '#824671CC',
    },

    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      preview: Alto_0,
      backgroundColor: '#F4B940',
    },
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      preview: Alto_0,
      backgroundColor: '#96CC96',
    },
  ];

  renderItem = ({item}) => <GameInfo game={item} />;

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.scrollContainer}>
          <FlatList
            contentContainerStyle={styles.scrollContent}
            data={this.listGameInfo}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `${item.title}_${index}`}
          />
        </View>
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#343434',
    flex: 1,
  },
  scrollContainer: {
    marginVertical: 50,
    // backgroundColor: 'gray',
  },
  scrollContent: {
    justifyContent: 'center',
    // alignItems: 'center',
    paddingBottom: 50,
  },
  info: {
    width: '90%',
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'gray',
  },
});
