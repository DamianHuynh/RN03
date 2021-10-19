import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from './Icon';
import {angry, care, haha, like, love, sad} from './images';

export default class ExRender extends Component {
  array = [angry, care, haha, like, love, sad];
  state = {
    selectedEmoji: care,
  };

  onPressIcon = selectedEmoji => this.setState({selectedEmoji});

  renderEmoji = () => {
    return this.array.map((icon, index) => (
      <Icon
        selectedEmoji={icon === this.state.selectedEmoji}
        key={index}
        iconSource={icon}
        onPress={() => this.onPressIcon(icon)}
      />
    ));
  };

  render() {
    const {selectedEmoji} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Bạn thấy thế nào ?</Text>
        <Image style={styles.selectedEmoji} source={selectedEmoji} />
        <View style={styles.emojiContainer}>{this.renderEmoji()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '700',
    fontSize: 18,
  },
  selectedEmoji: {
    height: 150,
    width: 150,
    marginVertical: 20,
  },
  emojiContainer: {
    flexDirection: 'row',
  },
});
