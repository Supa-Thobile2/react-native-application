import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.card} >
      
            <View style={styles.inside}>
              <Text style={styles.txt}>Wishing you!<br></br> a very happy birthday filled with love and laughter</Text>
              <Text>&#127873;</Text>
            </View>

            <View>
              <Image source={require('./assets/image2.jpg')} style={styles.image}/>
            </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
  padding: '0',
  margin: '0',
  boxsizing: 'border-box',
  fontFamily:  'sans-serif',
  overflow: 'hidden'
 
},
card: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#E83F6F',
    
  },




inside: {
  height: '100%',
  width: '0%',
  position: 'absolute',
  // left: '50.1%'
 
},


inside: {
 
  // lineHeight: 3,
  // padding: '0 20px',
  textAlign: 'center',
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'space-around',
  // alignItems: 'center',
  // left: '50%',
  backgroundColor: '#FFBF00',
 
},

txt:{
  fontFamily: 'Nimbus Sans Ultra light',
  fontSize: '25px',
  height: '11vh',
  letterSpacing: '3px',
  fontWeight: 'bold 300',
  
  textTransform: 'capitalize ',
  color: '#2274A5',
  padding: '5px',
  color: 'rgba(0,0,0, 0.5)',
  
 
},

image:{
  height: '87vh',
  width: '100%',
  
  
  margin: '0 auto'
}



});
