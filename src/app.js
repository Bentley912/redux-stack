import React from 'react';
import { View, WebView }from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from './reducers'
import { Header } from './components/common/index'
import  MyWeb  from './components/WebView'
import LibraryList from './components/LibraryList';

const App = () => {
    return (
        
        <Provider store={createStore(reducers)}>
            <View style={{flex:1}}>
            <Header style={{flex:1}} headerText="Bionosity Brain"/>
            <MyWeb style={{flex:1}} />
            <LibraryList style={{flex:1}} />
            </View>
         </Provider>
    
    )
}

export default App;

styles = {
    wb: {
        position: 'relative',
        top: 0,
        left: 0,
        height: 300,
        width: 380
      }
}