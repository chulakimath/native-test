import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,

} from 'react-native'
import FlatCard from './components/FlatCard'
import EleavatedCards from './components/EleavatedCards'
import FancyCards from './components/FancyCards'

const App = () => {
  const theme=useColorScheme()=='dark';
  return (
    <SafeAreaView style={[theme?styles.backgroundblack:styles.backgroundWhite]}>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <FlatCard />
        <EleavatedCards />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
const styles= StyleSheet.create({
  backgroundWhite:{
    backgroundColor:'white',
    height:'100%',
  },
  backgroundblack:{
    backgroundColor:'black',
    height:'100%',
  }
})