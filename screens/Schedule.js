/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, SafeAreaView,TouchableOpacity, Text, Modal} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';



const Schedule = function () {
    return (
        <SafeAreaView style={styles.container1}>
            <View style={styles.container}>
             <MaterialIcons name="access-time" size={150} color="#171717"/>
            </View>
        <View style={styles.addposition}>
        <TouchableOpacity >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
        </View>
        </TouchableOpacity>
          </View>
        </SafeAreaView>

    );
};
const styles = StyleSheet.create({
    Textformat: {
      color: Colors.white,
    },
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#000000',
        alignContent: 'center',
        alignItems: 'center',
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#3B71F3',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#3B71F3',
        borderWidth: 1,
      },
      addText: {
        color: 'white',
        fontSize: 24,
    },
    container1: {
        flex: 1,
        backgroundColor: '#000000',
    },
    addposition: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 3,
        paddingRight: 3,
        flexDirection: 'row',
    },
});

export default Schedule;