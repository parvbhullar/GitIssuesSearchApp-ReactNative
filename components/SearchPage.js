import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Linking,
} from 'react-native';

import Results from './Results';
import Header from './Header';
import styles from './styles.js';

import SearchHelper from './SearchHelper';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { lastSearchResults: null };
  }

  componentWillMount(){
    const helper = this.helper = new SearchHelper('https://api.github.com/', {});

    helper.on('result', (res) => {
      this.setState({lastSearchResults: res});
    });
    helper.on('error', (error) => {
      //Show/Log error 
    });

    helper.search('sympy/sympy'); //Test query
  }

  render() {
    const content = this.state.lastSearchResults &&
      <Results hits={this.state.lastSearchResults.items} openLink={this.openLink}/>;

    return (
      <View style={styles.container}>
        <Header helper={this.helper} />
        {content}
      </View>
    );
  }

  openLink(url) {
    Linking.openURL(url);
  }
}

