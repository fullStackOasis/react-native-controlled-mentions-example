import * as React from 'react';
import { FC, useState } from 'react';
import { useMentions, SuggestionsProvidedProps, PatternsConfig } from 'react-native-controlled-mentions';
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const users = [
  { id: '1', name: 'David Tabaka' },
  { id: '2', name: 'Mary' },
  { id: '3', name: 'Tony' },
  { id: '4', name: 'Mike' },
  { id: '5', name: 'Grey' },
];

const hashtags = [
  { id: 'todo', name: 'todo' },
  { id: 'help', name: 'help' },
  { id: 'loveyou', name: 'loveyou' },
];

const Suggestions: FC<SuggestionsProvidedProps> = ({
  keyword,
  onSelect,
  suggestions,
}) => {
  if (keyword == null) {
    return null;
  }

  return (
    <View>
      {suggestions
        .filter((one) =>
          one.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
        )
        .map((one) => (
          <Pressable
            key={one.id}
            onPress={() => onSelect(one)}
            style={{ padding: 12 }}>
            <Text>{one.name}</Text>
          </Pressable>
        ))}
    </View>
  );
};

const triggersConfig: TriggersConfig<'mention' | 'hashtag'> = {
  mention: {
    trigger: '@',
    textStyle: { fontWeight: 'bold', color: 'green' },
  },
  hashtag: {
    trigger: '#',
    textStyle: {fontWeight: 'bold', color: 'grey'},
  },
};

const patternsConfig: PatternsConfig = {
  url: {
    pattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
    textStyle: { color: 'yellow' },
  },
};

const App = () => {
  const [value, setValue] = useState('Hello {@}[Mary](2)! How are you?');

  const { textInputProps, triggers } = useMentions({
    value,
    onChange: setValue,
    triggersConfig,
    patternsConfig,
  });

  return (
    <KeyboardAvoidingView
      enabled={Platform.OS === 'ios'}
      behavior="padding"
      style={{ flex: 1, justifyContent: 'flex-end' }}>
      <SafeAreaView>
        <Suggestions {...triggers.mention} suggestions={users} />
        
        <Suggestions {...triggers.hashtag} suggestions={hashtags} />
        
        <TextInput
          {...textInputProps}
          autoFocus
          
          style={{
            padding: 12,
            fontSize: 18,
            borderTopWidth: 1,
            borderTopColor: 'lightgrey',
          }}
          placeholder="Type here..."
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default App;