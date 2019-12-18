import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProfileCard = ({person}) => {
  return (
    <View style={styles.card}>
      <Image
        style={{width: '100%', height: '50%'}}
        source={{uri: person.pictures[0]}}
        resizeMode={'contain'}
      />
      <Text style={styles.text}>{person.name.first}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
});

export default ProfileCard;
