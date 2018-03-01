import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class MyWeb extends Component {

    componentDidUpdate(){
        console.log(this.source);
    }

    _onNavigationStateChange(webViewState){
        console.log(webViewState.url)
      }

  render() {
    return (
      <WebView
        source={{uri: 'https://bionositybrain.com'}}
        onNavigationStateChange={this._onNavigationStateChange.bind(this)}
        style={{marginTop: 20}}
      />
    );
  }
}

