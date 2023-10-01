import * as React from 'react';
import { FC, useState } from 'react';
import { Pressable, SafeAreaView, Text, View, TextInput } from 'react-native';
// import { MentionInput, MentionSuggestionsProps, Suggestion } from 'react-native-controlled-mentions';
import { Suggestion, SuggestionsProvidedProps, Triggers } from 'react-native-controlled-mentions';
import { useMentions } from 'react-native-controlled-mentions';
const users = [
  {id: '1', name: 'David Tabaka'},
  {id: '2', name: 'Mary'},
  {id: '3', name: 'Tony'},
  {id: '4', name: 'Mike'},
  {id: '5', name: 'Grey'},
];

const hashtags = [
  {id: 'todo', name: 'todo'},
  {id: 'help', name: 'help'},
  {id: 'loveyou', name: 'loveyou'},
];

// Custom component for rendering suggestions
const Suggestions: FC<SuggestionsProvidedProps & { suggestions: Suggestion[] }> = ({
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
        .filter((one) => one.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
        .map((one) => (
          <Pressable key={one.id} onPress={() => onSelect(one)} style={{ padding: 12 }}>
            <Text>{one.name}</Text>
          </Pressable>
        ))}
    </View>
  );
};

// Config of suggestible triggers
const triggersConfig = {
  mention: {
    trigger: '@',
  },
  hashtag: {
    trigger: '#',
    textStyle: {
      fontWeight: 'bold',
      color: 'grey',
    },
  },
};

// Config of highlightable patterns (like links, bold, italic text etc.)
const patternsConfig = {
  url: {
    pattern: /a/gi,
    textStyle: { color: 'blue' },
  },
};

const App = () => {
  const [textValue, setTextValue] = useState('Hello @[Mary](2)! How are you?');

  const { textInputProps, triggers } = useMentions({
    value: textValue,
    onChange: setTextValue,

    triggersConfig,
    patternsConfig,
  });

  return (
    <SafeAreaView>
      <Suggestions suggestions={users} {...triggers.mention} />
      <Suggestions suggestions={hashtags} {...triggers.hashtag} />

      <TextInput placeholder="Type here..."
          multiline={true}
          style={{ height: 'auto', backgroundColor: 'lightblue', padding:12 }}
  	    {...textInputProps} />
    </SafeAreaView>
  );
};

export default App;
