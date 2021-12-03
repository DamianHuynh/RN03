import React, {memo} from 'react';
import {View, Text} from 'react-native';

function ChildComponent({showNumber}) {
  console.log('ChildComponent render', showNumber());
  return <Text>ChildComponent</Text>;
}

export default memo(ChildComponent);
