import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text, SectionList} from 'react-native';
import Alto_icon from '../../Buoi3/RenderList/images/Alto_icon.png';
import Alto_0 from '../../Buoi3/RenderList/images/Alto_0.png';
import GameInfo from '../DemoFlatList/GameInfo';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default class DemoSectionList extends Component {
  listGameInfo = [
    {
      title: '#824671CC',
      data: [
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
          backgroundColor: '#824671CC',
        },
        {
          title: "Alto's Odyssey",
          icon: Alto_icon,
          subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
          preview: Alto_0,
          backgroundColor: '#824671CC',
        },
      ],
    },
    {
      title: '#96CC96',
      data: [
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
          backgroundColor: '#96CC96',
        },
        {
          title: "Alto's Odyssey",
          icon: Alto_icon,
          subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
          preview: Alto_0,
          backgroundColor: '#96CC96',
        },
      ],
    },
    {
      title: '#F4B940',
      data: [
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
          backgroundColor: '#F4B940',
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
          backgroundColor: '#F4B940',
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
          backgroundColor: '#F4B940',
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
          backgroundColor: '#F4B940',
        },
        {
          title: "Alto's Odyssey",
          icon: Alto_icon,
          subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
          preview: Alto_0,
          backgroundColor: '#F4B940',
        },
      ],
    },
  ];

  renderItem = ({item}) => <GameInfo game={item} />;

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.scrollContainer}>
          {/* <FlatList
            contentContainerStyle={styles.scrollContent}
            data={this.listGameInfo}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `${item.title}_${index}`}
          /> */}
          <SectionList
            contentContainerStyle={styles.scrollContent}
            sections={this.listGameInfo}
            renderItem={this.renderItem}
            stickySectionHeadersEnabled={true}
            renderSectionHeader={({section: {title}}) => (
              <View style={[styles.headerSections, {backgroundColor: title}]}>
                <Text>Background: {title}</Text>
                <EntypoIcon name="back-in-time" />
              </View>
            )}
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
    alignItems: 'center',
    paddingBottom: 50,
  },
  headerSections: {
    backgroundColor: '#bbb',
    paddingVertical: 10,
    marginBottom: 5,
  },
});
