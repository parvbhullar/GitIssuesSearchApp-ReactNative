/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import SearchPage from './components/SearchPage';
import { AppRegistry } from 'react-native';

class ReactNativeGithub extends React.Component {
  render() {
    return <SearchPage openLink={this.openLink}/>;
  }
}

AppRegistry.registerComponent('AwesomeProject', () => ReactNativeGithub);
