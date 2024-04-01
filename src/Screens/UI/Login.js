import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={require('../../assets/bgimage.png')}
          style={[style.contiainer]}>
          <View style={[style.formBox]}>
            <Text style={[style.title]}>Login form</Text>

            <View style={{marginTop: 20}}>
              <TextInput
                placeholder="Email address"
                placeholderTextColor={'#fff'}
                style={[style.inputText]}>
                <Image
                  source={require('../../assets/email.png')}
                  style={[style.icons]}
                />
              </TextInput>
            </View>
            <View style={{marginTop: 20}}>
              <TextInput
                placeholder="Password"
                placeholderTextColor={'#fff'}
                style={[style.inputText]}>
                <Image
                  source={require('../../assets/password.png')}
                  style={[style.icons]}
                />
              </TextInput>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{color: '#3cb043', textDecorationLine: 'underline'}}>
                Forgot password
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#3cb043',
                height: 40,
                width: 250,
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  // alignContent: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
            <View style={{marginTop: 10}}>
              <Text style={{color: '#fff'}}>Not a member?</Text>
              <Text style={{color: '#3cb043', textDecorationLine: 'underline'}}>
                Sing up
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;

const style = StyleSheet.create({
  contiainer: {
    height: '100%',
    width: '100%',
  },
  formBox: {
    alignItems: 'center',
    height: 600,
    width: 350,
    backgroundColor: '#000',
    margin: 37,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginTop: 20,
  },
  icons: {
    height: 30,
    width: 30,
    marginBottom: 20,
  },
  inputText: {
    height: 50,
    width: 300,
    borderColor: '#fff',
    borderWidth: 1,
  },
});
