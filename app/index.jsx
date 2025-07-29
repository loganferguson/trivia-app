import { Text, TextInput, View, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState} from 'react';
import { auth } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';

const LoginScreen = () => {

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const SignIn = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, email, password);
            if(user) router.replace('/home'); 
        } catch(error){
            console.log(error)
            alert('Sign in failed: ' + error.message);
        }
    }

    const SignUp = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth, email, password); 
            if(user) router.replace('/home');   
        } catch(error){
            console.log(error)
            alert('Sign in failed: ' + error.message);
        }
    }

    return(
            <View>
                <Text>Email</Text>
                <TextInput style={styles.textInput} placeholder="jondoe@email.com" onChangeText={setEmail}></TextInput>
                <Text>Password</Text>
                <TextInput style={styles.textInput} placeholder="password" onChangeText={setPassword}></TextInput>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.signInButton} onPress={SignIn}>
                        <Text style={{color:'#ffffff', fontSize: 18}}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signUpButton} onPress={SignUp}>
                        <Text style={{color:'#ffffff', fontSize: 18}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )


}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  signInButton: {
    backgroundColor: '#42a147',
    color: '#ffffff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 100,
    margin: 5
  },
  signUpButton: {
    backgroundColor: '#3268bf',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 100,
    margin: 5
  },
  signInText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight:'bold'
  },
  textInput: {
    borderWidth: 1,
    borderColor:'#000000',
    borderRadius: 3,
    padding: 5,
    fontSize: 20,
    marginBottom: 5
  }
})
export default LoginScreen;
