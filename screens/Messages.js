/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Messages = function () {
    return (
        <View style={styles.container}>
            <Text style={styles.Textformat}>Messages</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    Textformat: {
      color: Colors.white,
    },
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
});

export default Messages;