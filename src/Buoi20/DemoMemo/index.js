import React, {useState, useCallback, useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ChildComponent from './ChildComponent';

export default function DemoMemo() {
  const [state, setState] = useState(10);
  const [number, setNumber] = useState(0);

  // const showNumber = () => state;

  const showNumber = useCallback(() => state, []);

  const numberUp = () => {
    let i = 0;
    while (i < state) {
      console.log(i);
      i++;
    }
    return i + 10;
  };

  const memoNumber = useMemo(() => numberUp, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>
        {state} - {number}
      </Text>
      <TouchableOpacity onPress={() => setState(state + 1)}>
        <Text>Change State</Text>
      </TouchableOpacity>

      <ChildComponent showNumber={showNumber} />
      <Text>{memoNumber()}</Text>
    </View>
  );
}
