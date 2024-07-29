import { Image, StyleSheet, Platform, View, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import Task from '@/components/Task';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.takesWrapper}>
        <Text style={styles.sectionTitlte}>Today's Tasks</Text>
        <View style={styles.items}>
          <Task text={'task1'}/>
        </View>
      </View>  
      <View>

        <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
        style={styles.writeTask}>
          <TextInput style={styles.input} placeholder='Write a task' />
          <TouchableOpacity>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8ED'
    
  },
  takesWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
sectionTitlte: {
    fontSize: 24,
    fontWeight: 'bold',
},
items: {
  marginTop: 30,
},
writeTask: {
  position: 'absolute',
  bottom: 60,
  width: '100%',
},
input: {

},
addWrapper: {

},
addText: {

},
});
