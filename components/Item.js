import React, { Component } from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import HighlightedText from './HighlightedText';
import styles from './styles.js';

export default class Item extends Component {
  render() {
    const { hit } = this.props;
    const imgURI = `${hit.user.avatar_url}`;
    return (
      <TouchableOpacity onPress={() => this.openLink(hit.html_url)}>
        <View style={styles.hit}>
          <Image source={{uri: imgURI}} style={styles.illustration}/>
          <View style={styles.hitContent}>
            <HighlightedText
              tag="**"
              style={styles.title}
              styles={{highlighted: styles.highlighted}}
              numberOfLines={2}>
              {hit.title}
            </HighlightedText>
            <Text style={styles.url} numberOfLines={1}>{this.keepDomainName(hit.html_url)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  keepDomainName(url) {
    if(!url) return url;
    return url.split('/')[2];
  }
  openLink(url) {
    Linking.openURL(url);
  }
}
