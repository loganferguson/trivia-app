import { Stack, router } from 'expo-router';
import { auth } from '@/FirebaseConfig';
import { getAuth } from 'firebase/auth';
import { TouchableOpacity, Text, Touchable } from 'react-native';


const RootLayout = () => {

  
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#ff8c00'
      },
      headerTintColor: '#ffffff',
      headerTintStyle: {
        fontSize: 20,
        fontWeight: 'bold'
      },
      contentStyle: {
        backgroundColor: '#ffffff'
      }
    }}>
    </Stack>
  ) 
}

export default RootLayout;