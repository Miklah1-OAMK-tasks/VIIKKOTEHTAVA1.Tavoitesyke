import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, {useState} from 'react';  

export default function App() {
const [age, setAge] = useState('');
const [lowerLimit, setLowerLimit] = useState('');
const [upperLimit, setUpperLimit] = useState('');


  const calculate = () => {
    upperResult = Math.round((220-age) *0.85);
    lowerResult = Math.round((220-age) *0.65);
    setUpperLimit(upperResult);
    setLowerLimit(lowerResult);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput 
        style={styles.field}
        keyboardType='decimal-pad'
        onChangeText={text => setAge(text)}
        value={age}
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{lowerLimit}{'-'}{upperLimit}</Text>
      <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172827',
    alignItems: 'left',
    justifyContent: 'center',
  },
  field: {
    color: 'white',
    fontSize: 40,
    marginBottom: 5,
  },
});