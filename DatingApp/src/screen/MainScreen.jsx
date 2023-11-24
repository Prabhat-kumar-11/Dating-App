import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import DatingCard from '../components/DatingCard';
import {users} from '../usersData';
import TinderCard from 'react-tinder-card';

const MainScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [match, setMatch] = useState(false);
  const matchAnimation = new Animated.Value(0);
  const [lastDirection, setLastDirection] = useState();

 

  const handleSwipeLeft = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleSwipeRight = () => {
    setCurrentIndex(currentIndex + 1);
    setMatch(Math.random() < 0.2); // Simulating a match with 20% probability
  };

 

  const matchOpacity = matchAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = name => {
    console.log(name + ' left the screen!');
  };

  return (
    <View style={styles.container}>
      {match ? (
        <Animated.View style={[styles.matchContainer, {opacity: matchOpacity}]}>
          <Text>It's a Match!</Text>
          <Text>🎉</Text>
        </Animated.View>
      ) : null}
      <View style={styles.cardContainer}>
        {users.map(user => (
          <TinderCard
            key={user.id}
            onSwipe={dir => swiped(dir, user.name)}
            onCardLeftScreen={() => outOfFrame(user.name)}>
            <DatingCard user={user} />
          </TinderCard>
        ))}
      </View>

      {lastDirection ? (
        <Text style={styles.infoText}>You swiped {lastDirection}</Text>
      ) : (
        <Text style={styles.infoText} />
      )}
      {/* {currentIndex < users.length ? (
        <DatingCard
          user={users[currentIndex]}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        />
      ) : (
        <Text>No more users</Text>
      )} */}
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  matchContainer: {
    position: 'absolute',
    top: 50,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cardContainer: {
    width: '90%',
    maxWidth: 260,
    height: 300,
  },
  infoText: {
    height: 28,
    justifyContent: 'center',
    display: 'flex',
    zIndex: -100,
  },
});

export default MainScreen;
