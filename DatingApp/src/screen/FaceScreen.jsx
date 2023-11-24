import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  Animated,
  View,
} from 'react-native';
import TinderCard from 'react-tinder-card';
import {users} from '../usersData';
import DatingCard from '../components/DatingCard';

function FaceScreen() {
  const characters = users;
  const [lastDirection, setLastDirection] = useState();
  const [match, setMatch] = useState(false);
  const matchAnimation = new Animated.Value(0);

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };
  useEffect(() => {
    if (match) {
      Animated.timing(matchAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [match]);

  const resetMatch = () => {
    setMatch(false);
    matchAnimation.setValue(0);
  };
  const outOfFrame = name => {
    console.log(name + ' left the screen!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{padding:10}} onPress={resetMatch}>
        <Text
          style={{
            backgroundColor: '#6ed326',
            padding: 12,
            borderRadius: 8,
            width: '48%',
            alignItems: 'center',
          }}>
          Reset Match
        </Text>
      </TouchableOpacity>
      <View style={styles.cardContainer}>
        {characters.map(character => (
          <TinderCard
            key={character.name}
            onSwipe={dir => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}>
            <DatingCard user={character} />
          </TinderCard>
        ))}
      </View>
    </View>
  );
}
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
  },
  header: {
    color: '#000',
    fontSize: 30,
    marginBottom: 30,
  },
  cardContainer: {
    width: '90%',
    maxWidth: 260,
  },

  cardTitle: {
    position: 'absolute',
    bottom: 0,
    margin: 10,
    color: '#fff',
  },
  infoText: {
    height: 28,
    justifyContent: 'center',
    display: 'flex',
    zIndex: -100,
  },
};

export default FaceScreen;
