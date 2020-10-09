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
  View, Button,
  Image, TouchableOpacity, TextInput, Text, ScrollView, TouchableHighlight
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

class App extends React.Component {
  state = {
    valeur: "",
    liste: [],
    delete: "",
    home: false,
  }
  // async componentDidMount() {
  //   const liste = Boolean(AsyncStorage.getItem('@liste') || "false");
  //   this.setState({ liste });
  // }
  // enregistrer = () => {
  //   AsyncStorage.setItem('@liste', String(true));
  //   this.setState({ liste: true })
  // }

  home = () => {
    this.setState({ home: true })
  }

  ChangeValue = (val: string) => {
    this.setState({ valeur: val })
  }

  remplirListe = () => {
    const liste = this.state.liste;
    if (this.state.valeur === "") {
      return;
    }
    liste.push(this.state.valeur);
    this.setState({ liste });

  }
  delete = (valeur: string) => {
    const liste = this.state.liste;
    const i = liste.indexOf(valeur);
    delete liste[i];
    this.setState({ liste });
  }
  deleteAll = () => {
    this.setState({ liste: [] })
  }
  render() {

    const { valeur, home } = this.state;

    return (
      <>
        <View style={styles.topbar}>
          <TouchableOpacity onPress={this.home}><Image
            style={styles.logo}
            source={require('./logo.png')} /></TouchableOpacity>
          <TextInput style={styles.texte} value={valeur} onChangeText={this.ChangeValue}
            placeholderTextColor="black" placeholder="Saisissez l'article au choix"></TextInput>
        </View>

        <View>
          <Button title="Ajouter" color='#2BB526' style={styles.ajouter} onPress={this.remplirListe} />
        </View>

        <View style={styles.container}>
          <View style={styles.titre}>
            {/* <TouchableHighlight style={styles.enregistrer} onPress={this.enregistrer}><Text> Enregistrer </Text></TouchableHighlight> */}
            <TouchableHighlight style={styles.supprimer} onPress={this.deleteAll}><Text> Supprimer </Text></TouchableHighlight>
          </View>

          <View style={styles.liste}>
            <ScrollView persistentScrollbar={true}>
              {this.state.liste.map(element => <Text style={styles.achats}>{element}
                <TouchableHighlight style={styles.option} onPress={() => { this.delete(element) }}><Text> 🗑️  </Text></TouchableHighlight>
              </Text>)}
            </ScrollView>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footer_texte}>Partage ta liste à tes amis LOGO Facebook Insta ...</Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({

  topbar: {
    margin: 10,
    flexDirection: 'row',

  },
  enregistrer: { marginLeft: 40, borderWidth: 1, borderRadius: 100 },
  supprimer: { borderWidth: 1, borderRadius: 100, marginRight: 40 },
  ajouter: { color: 'black' },
  titre: {
    backgroundColor: 'white',
    width: '100 %',
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  option: {
    margin: 10,
    padding: 10,

  },
  container: {
    width: '100 %',
    height: '100 %',
    backgroundColor: '#F3EEE0',
    borderWidth: 1,
    borderColor: 'black',
  },
  liste: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    padding: 15,
    height: '70 %',
    borderRadius: 30,
  },

  logo: {
    height: 50,
    width: 50,
  },
  texte: {
    flexDirection: 'row',
    height: 50,
    width: 250,
    padding: 10,
    marginLeft: 70,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
  },
  achats: {
    padding: 20,
    fontSize: 20,
    fontStyle: "italic",
    borderBottomWidth: 1,
  },
  footer: {
    marginTop: 10,
    height: 50,
    backgroundColor: '#6C928E',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer_texte: {
    fontSize: 15,

  }
});

export default App;
