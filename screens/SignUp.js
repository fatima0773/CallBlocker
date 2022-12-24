/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, ScrollView, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton/CustomButton';


const SignUp = function ({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const validate = (text) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    console.log(text, reg.test(text));
  };
  const onRegisterPressed = function () {
    console.warn('User registered successfully');
  };

  const onSignInPressed = function () {
    navigation.replace('/');
  };
  const onPrivacyPressed = function () {
    console.warn('On Privacy Pressed');
  };
  const onTermOfUsePressed = function () {
    console.warn('On Term of Use Pressed');
  };

  return (
    <SafeAreaView style={styles.root1}>
      <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <View style={styles.container}>
       <TextInput
          value={username}
          onChangeText={setUsername}
              placeholder="Username"
              placeholderTextColor={'black'}
          style={styles.input}
          secureTextEntry={false}
      />
    </View>
    <View style={styles.container}>
       <TextInput
          value={email}
          onChangeText={validate}
              placeholder="Email"
              placeholderTextColor={'black'}
          style={styles.input}
        />
          </View>
          <View style={styles.container}>
       <TextInput
          value={password}
          onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor={'black'}
          style={styles.input}
          secureTextEntry={true}
        />
          </View>
          <View style={styles.container}>
       <TextInput
          value={passwordRepeat}
          onChangeText={setPasswordRepeat}
              placeholder="Retype Password"
              placeholderTextColor={'black'}
          style={styles.input}
          secureTextEntry={true}
        />
    </View>

        <CustomButton text="Register" onPress={onRegisterPressed} />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.Link} onPress={onTermOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.Link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>


        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPressed}
          bgColor="Transparent"
          fgColor="#ffffff"
        />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 100,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    margin: 20,
    paddingTop: 40,
  },
  text: {
    color: 'gray',
    marginVertical: 30,
  },
  Link: {
    color: '#ffffff',
  },
  root1: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 10,
    paddingEnd: 10,
  },
  container:{
    backgroundColor:'#ffffff',
    width: '100%',
    borderColor:'#404040',
    borderWidth: 3,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    color:'black',
  },
});

export default SignUp;
