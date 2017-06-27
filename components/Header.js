import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles.js';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image source={require('./img/github.png')} style={styles.logo}/>
        <TextInput
          style={styles.searchInput}
          onSubmitEditing={(e) => this.changeQuery(e)}
          placeholder="Search for issues in given repository."
          underlineColorAndroid={"transparent"}
          />
      </View>
    );
  }

  changeQuery(e){
    const q = e.nativeEvent.text;
    const helper = this.props.helper;
    helper.search(q);
  }
}
