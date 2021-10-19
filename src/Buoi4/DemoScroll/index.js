import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import Alto_icon from '../../Buoi3/RenderList/images/Alto_icon.png';
import Alto_0 from '../../Buoi3/RenderList/images/Alto_0.png';

export default class DemoScroll extends Component {
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

  renderListGameInfo = () => {
    return this.listGameInfo.map((game, index) => (
      <View
        key={index}
        style={[styles.info, {backgroundColor: game.backgroundColor}]}>
        <Image source={game.icon} style={styles.icon} />
        <View style={styles.infoContent}>
          <Text>{game.title}</Text>
          <Text>{game.subTitle}</Text>
        </View>
      </View>
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}>
          {this.renderListGameInfo()}
        </ScrollView>
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
    alignItems: 'center',
    paddingBottom: 50,
  },
  info: {
    width: '90%',
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  infoContent: {
    width: '80%',
  },
});
