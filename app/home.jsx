import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import { useRouter } from 'expo-router';
import { auth } from '@/FirebaseConfig';
import { getAuth } from 'firebase/auth';

const HomeScreen = () => {
  const router = useRouter();
  const space_image = require('@/assets/images/space.jpg');
  const pee_wee = require('@/assets/images/pee_wee.png')
  getAuth().onAuthStateChanged((user) => {
    if (!user) router.replace('/');
  });

  return (
    <View style={styles.container}>
      <View style={styles.signOutBanner}>
        <TouchableOpacity style={styles.signOutButton} onPress={() => auth.signOut()}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
        

      <View style={styles.dailyCardView}>
        <ImageBackground source={space_image} style={styles.cardBackgroundImage}/>
        <Text style={{position: 'absolute', top: 10, color:'#36daff', fontSize: 40, fontWeight:'bold', alignSelf:'center'}}>NEW DAILY TRIVIA!</Text>
        <Image source={pee_wee} resizeMode='contain' style={{position:'absolute', maxHeight:140, top:40}}/>
        <TouchableOpacity style={styles.playButton} onPress={() => router.push('/quiz')}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  signOutBanner:{
    backgroundColor:'#ededed',
    flex: 1,
    alignItems: 'center',
    top:0,
    maxHeight: 40
  },
  signOutButton: {
    position: 'absolute',
    right: 15,
    top: 10
  },
  dailyCardView:{
    alignSelf: 'center',
    width: 400,
    height: 250,
    marginTop: 20,
    backgroundColor: '#e8e7b5',
    borderWidth: 1,
    borderColor: '#e8e7b5',
    borderRadius: 10
  },
  cardBackgroundImage:{
    position: 'relative',
    flex: 1,
    width: 'auto',
    height: 'auto',
    borderWidth: 1,
    borderRadius: 10
  },
  playButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#bd4bd6',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight:'bold'
  }
})



export default HomeScreen;