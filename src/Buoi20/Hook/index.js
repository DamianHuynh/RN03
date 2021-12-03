import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function DemoHook(props) {
  const [state, setState] = useState(0);
  const [number, setNumber] = useState(2);

  console.log('render');

  useEffect(() => {
    console.log('componentDidUpdate');
  });

  useEffect(() => {
    console.log(
      'componentDidUpdate call lại chỉ mỗi khi state bên trong array change',
    );
  }, [number]);

  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  useEffect(() => {
    return () => {
      console.log('componentWillUnmount');
    };
  }, []);

  return (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <Text>{state}</Text>
      <TouchableOpacity onPress={() => setState(state + 1)}>
        <Text>Change State</Text>
      </TouchableOpacity>
      {state < 3 ? <ChildComponent /> : null}
      {/* <Text>{number}</Text>
      <TouchableOpacity onPress={() => setNumber(number + 2)}>
        <Text>Change Number</Text>
      </TouchableOpacity> */}
      {/* <Text>{state.address}</Text>
      <TouchableOpacity
        onPress={() => setObjectState({address: 'Sư Vạn Hạnh - TPHCM'})}>
        <Text>Change Address</Text>
      </TouchableOpacity>
      <Text>{state.ages}</Text>
      <TouchableOpacity onPress={() => setObjectState({ages: 20})}>
        <Text>Change Ages</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const ChildComponent = () => {
  const [number, setNumber] = useState(2);
  useEffect(() => {
    return () => {
      console.log('child componentWillUnmount');
    };
  }, []);
  // useEffect(() => {
  //   const logInterval = setInterval(() => {
  //     console.log('interval');
  //   }, 1000);
  //   return () => {
  //     clearInterval(logInterval);
  //   };
  // }, []);

  return (
    <View>
      <Text>{number}</Text>
      <TouchableOpacity onPress={() => setNumber(number + 2)}>
        <Text>Change Number</Text>
      </TouchableOpacity>
    </View>
  );
};

const useObjectState = objState => {
  const [state, setState] = useState(objState);

  const setObjectState = params => {
    const listKey = Object.keys(params);
    for (let i = 0; i < listKey.length; i++) {
      const key = listKey[i];
      const values = params[listKey[i]];
      setState({...state, [key]: values});
    }
  };

  return [state, setObjectState];
};
