import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const DatingCard = ({user, onDislike, onLike}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{uri: user.image}} />
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>{user.name}</Text>
        <Text
          style={styles.userInfo}>{`${user.gender} | ${user.location}`}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.dislikeButton} onPress={onDislike}>
          <Text style={styles.buttonText}>Dislike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.likeButton} onPress={onLike}>
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 260,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
  },
  cardContainer: {
    height: 500,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: 16,
    marginBottom: 16,
  },
  cardImage: {
    flex: 1,
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 10,
    marginBottom: 12,
  },
  userInfoContainer: {
    alignItems: 'center',
    padding: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  userInfo: {
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dislikeButton: {
    backgroundColor: '#E94E77',
    padding: 12,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  likeButton: {
    backgroundColor: '#66BB6A',
    padding: 12,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DatingCard;
