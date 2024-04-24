import React from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';
import { Audio } from 'expo-av';

const sounds = [
  { id: '1', file: require('../../assets/sound1.mp3') },
  { id: '2', file: require('../../assets/sound2.mp3') },
  // 省略（他の音声ファイルも同様に追加）
];

export default function ReportScreen() {
  const playSound = async (audioFile: any) => {
    const { sound } = await Audio.Sound.createAsync(audioFile);
    await sound.playAsync();
  }

  return (
    <FlatList
      data={sounds}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.buttonContainer}>
          <Button title={`Sound ${item.id}`} onPress={() => playSound(item.file)} />
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
