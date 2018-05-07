import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Button, Vibration } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 50, color: "white", fontWeight: 'bold',
        fontSize: 30, textAlign: 'center'}}>Aplicacion mas o menos</Text>
        <TextInput
          style={{height: 40, width: 240, borderColor: 'white', borderWidth: 1,
          marginBottom: 20, paddingLeft:5, paddingRight:5}}
          placeholder="Escribe algo aqui"
          editable = {true}
          maxLength = {40}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          ref={input => {this.textInput = input}}
        />
        <Button title="Presioname" color="blue" onPress={() => this.alerta()}></Button>
      </View>
    );
  }

  vibrar(){
    Vibration.vibrate(600, false)
  }

  alerta(){
    this.vibrar();
    Alert.alert(
      'Hola, bienvenido!',
      '¿Quiere borrar el texto escrito?',
      [
        {text: 'No', onPress: () => console.log('Borrado cancelado'), style: 'cancel'},
        {text: 'Si', onPress: () => this.textInput.setNativeProps({ text: '' })},
      ],
      { cancelable: false }
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
