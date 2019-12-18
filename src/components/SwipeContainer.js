import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ActivityIndicator} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import ProfileCard from './ProfileCard';

class SwipeContainer extends Component {
  constructor(props) {
    super(props);
  }

  onSwiped = type => {
    console.log(`on swiped ${type}`);
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true,
    });
  };

  swipeLeft = () => {
    this.swiper.swipeLeft();
  };

  renderSwiper = () => {
    const {users} = this.props;
    if (users.length > 0) {
      return (
        <Swiper
          cards={
            users
              ? users
              : ['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']
          }
          renderCard={person => <ProfileCard person={person} />}
          onSwiped={cardIndex => {
            console.log(cardIndex);
          }}
          onSwipedAll={() => {
            console.log('onSwipedAll');
          }}
          cardIndex={0}
          stackSize={3}
          stackSeparation={15}
        />
      );
    } else {
      return <ActivityIndicator size={'large'} color={'black'} />;
    }
  };

  render() {
    const {users} = this.props;
    console.log(users)
    return this.renderSwiper();
  }
}

export default SwipeContainer;
