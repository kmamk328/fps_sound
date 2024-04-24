import React from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';
import { Audio } from 'expo-av';

const sounds = [
  { id: '1',  file: require('../../assets/sound1.mp3'), label: 'よろしくおねがいします'  },
  { id: '2',  file: require('../../assets/sound2.mp3'), label: 'おはようございます'  },
  { id: '3',  file: require('../../assets/sound2.mp3'), label: 'こんにちは'  },
  { id: '4',  file: require('../../assets/sound2.mp3'), label: 'こんばんは'  },
  { id: '5',  file: require('../../assets/sound2.mp3'), label: 'がんばります'  },
  { id: '6',  file: require('../../assets/sound2.mp3'), label: 'ありがとうございました'  },
  { id: '7',  file: require('../../assets/sound2.mp3'), label: 'またよろしくおねがいします'  },


  // 省略（他の音声ファイルも同様に追加）
];

export default function GreetingScreen() {
  const playSound = async (audioFile: any) => {
    const { sound } = await Audio.Sound.createAsync(audioFile);
    await sound.playAsync();
  };

  return (
    <FlatList
      data={sounds}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.buttonContainer}>
          <Button title={item.label} onPress={() => playSound(item.file)} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    margin: 5,
  },
});
