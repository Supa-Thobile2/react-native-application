import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.card} >
      
      <View style={styles.outside}>
        <View style={styles.front}>
          <Text>Happy Birthday</Text>
          <View style={styles.cake}>
            <View style={styles.top}></View>
            <View style={styles.middle}></View>
            <View style={styles.bottom}></View>
            <View style={styles.candle}></View>
          </View>
        </View>
        <View style={styles.back}></View>
      </View>
      <View style={styles.inside}>
        <Text>Wishing you a very happy birthday filled with love and laughter</Text>
        <Text>&#127873;</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
  padding: '0',
  margin: '0',
  boxSizing: 'border-box',
  fontFamily:  'sans-serif'
 
},
  card: {
    width: '640px',
    height: '400px',
    position: 'absolute',
    margin: 'auto',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0'
    
  },

//   card:hover: {
//   transform: rotate(-5deg)
// }
// .card:hover .outside {
//   transform: rotateY(-130deg);
// }
outside,
inside: {
  height: '100%',
  width: '50%',
  position: 'absolute',
  left: '50.1%'
},
inside: {
  background: 'linear-gradient(to right, #e7e7e7, #ffffff 30%)',
  lineHeight: '3',
  padding: '0 20px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  left: '50%'
},
outside: {
  // -webkit-transform-style: preserve-3d;
  // transform-style: preserve-3d;
  // z-index: 1;
  transformOrigin: 'left',
  transition: '2s',
  cursor: 'pointer'
},
front,
back: {
  height: '100%',
  width: '100%',
  position: 'absolute',
  // -webkit-backface-visibility: hidden;
  // backface-visibility: hidden;
  transform: 'rotateX(0deg)'
},

front: {
  backgroundcolor: '#ffffff',
},
back: {
  transform: 'rotateY(180deg)',
  background: 'linear-gradient(to left, #e7e7e7, #ffffff 30%)'
},
cake :{
  width: '100%',
  position: 'absolute',
  bottom: '30px'
},

top,
middle,
bottom: {
  height: '80px',
  width: '240px',
  backgroundrepeat: 'repeat',
  backgroundsize: '60px 100px',
  backgroundposition: '28px 0',
  // background-image: linear-gradient(
  //     transparent 50px,
  // //     #fedbab 50px,
  // //     #fedbab 60px,
  // //     transparent 60px
  // //   ),
  //   radial-gradient(circle at 30px 5px, #994c10 30px, #fcbf29 31px);
  borderradius: '10px 10px 0 0',
  position: 'relative',
  margin: 'auto'
},

middle: {
  transform: 'scale(0.85)',
  top: '6px',
},
top: {
  transform: 'scale(0.7)',
  top: '26px',
}

});
