import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.card} >
      
            <View style={styles.inside}>
              <Text>Wishing you a very happy birthday filled with love and laughter</Text>
              <Text>&#127873;</Text>
            </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
//   body: {
//   padding: '0',
//   margin: '0',
//   boxSizing: 'border-box',
//   fontFamily:  'sans-serif'
 
// },
card: {
    width: '640px',
    height: '400px',
    position: 'absolute',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#FFEEDB'
  },




inside: {
  height: '100%',
  width: '50%',
  position: 'absolute',
  // left: '50.1%'
},


inside: {
 
  lineHeight: 3,
  padding: '0 20px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  // left: '50%',
  backgroundColor: 'blue',
  fontFamily: 'Cursive',
  fontSize: '50px'
},


});
