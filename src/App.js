import React, {Component} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getAllUsers} from './store/actions/usersActions';
import SwipeContainer from './components/SwipeContainer';

class App extends Component {
  constructor(props) {
    super(props);
    props.getAllUsers();
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <SwipeContainer users={this.props.users} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 50,
    color: 'black',
  },
});

const mapStateToProps = state => ({
  users: state.users.allUsers,
});

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
