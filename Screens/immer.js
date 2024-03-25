import {enableMapSet, produce} from 'immer';
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const ImmerScreen = () => {
  const obj = {
    anotherprops: 'String',
    anotherObj: {
      anotherAnotherObj: {
        a: 5,
      },
    },
  };
  const baseState = [
    {
      title: 'Learn TypeScript',
      done: true,
    },
    {
      title: 'Try Immer',
      done: false,
    },
  ];

  //   const nextState = produce(baseState, draftState => {
  //     draftState.push({title: 'Tweet about it'});
  //     draftState[1].done = true;
  //   });

  const nextstateone = produce(baseState, draft => {
    draft.push({title: 'Nikita Singgh'});
  });

  //    draft mean you can thing that object as the obj. Instend of modifying it.
  //   draft is Safe copy you  can Immutability of any  sort of change that doesnt affects your original object.

  const tempOb = produce(obj, draft => {
    draft.anotherObj.anotherAnotherObj.a = 6;
    draft.anotherObj.ModuleName = 'Figma ui';
  });

  console.log(tempOb);
  return (
    <View>
      <Text>ImmerScreen</Text>
    </View>
  );
};

export default ImmerScreen;
