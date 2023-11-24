import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, Animated, View} from 'react-native';
import TinderCard from 'react-tinder-card';
import {users} from '../usersData';
import DatingCard from '../components/DatingCard';

function FaceScreen() {
  const characters = users;
  const [lastDirection, setLastDirection] = useState();
  const [match, setMatch] = useState(false);
  const matchAnimation = new Animated.Value(0);

  const swiped = (direction, nameToDelete, bio) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);

    // Find the index of the current character in the array
    const currentIndex = characters.findIndex(
      character => character.name === nameToDelete,
    );

    // Check if the bio matches the previous card's bio
    if (currentIndex > 0 && bio === characters[currentIndex - 1].bio) {
      console.log(bio);
      setMatch(true);
    } else {
      setMatch(false);
    }
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
      {match && (
        <Animated.Text
          style={{
            fontSize: 30,
            marginBottom: 30,
            transform: [{scale: matchAnimation}],
          }}>
          🎉 It's a Match! 🎉
        </Animated.Text>
      )}
      <TouchableOpacity style={{padding: 10}} onPress={resetMatch}>
        <Text
          style={{
            backgroundColor: '#6ed326',
            padding: 12,
            borderRadius: 8,
            width: '48%',
            alignItems: 'center',
          }}>
          Rematch
        </Text>
      </TouchableOpacity>
      <View style={styles.cardContainer}>
        {characters.map(character => (
          <TinderCard
            key={character.name}
            onSwipe={dir =>
              swiped(dir, character.name, 'Fashionista and aspiring model.')
            }
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
