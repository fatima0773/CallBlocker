/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function Settings({ navigation }) {
    const back = function(){
        navigation.replace('HomeScreen');
    };
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <TouchableOpacity><MaterialIcons name="arrow-back" size={24}  color="white" onPress={back}/></TouchableOpacity>,
        });
      }, [navigation, back]);
  return (
      <SafeAreaView style = {styles.container}>
          <View >
              <Text style = {styles.Textformat}>Settings</Text>
          </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    Textformat: {
        color: '#ffffff',
        paddingLeft : 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
});
