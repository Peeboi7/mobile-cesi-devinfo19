/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


class App extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.texte}>
            Edit <Text style={styles.texte}>App.tsx</Text> to change this
                        screen and then come back to see your edits.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.texte}>Hey </Text>
        </View>
      </>
    );

  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texte: {
    fontSize: 30,
    color: 'red'
  }

});

export default App;
