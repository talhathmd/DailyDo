import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
    return (
        <View style={styles.taskContainer}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.taskText}>{props.text}</Text>
            </View>
            <View style={styles.circular}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#F9C23C',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    taskText: {
        maxWidth: '80%'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#F9C23C',
        borderWidth: 2,
        borderRadius: 5,
        
    },

})

export default Task;