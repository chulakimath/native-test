import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,

} from 'react-native'
import FlatCard from './components/starter/FlatCard'
import EleavatedCards from './components/starter/EleavatedCards'
import FancyCards from './components/starter/FancyCards'
import ContactList from './components/starter/ContactList'
import PasswordMain from './components/password-manager/PasswordMain'

const App = () => {
  const theme = useColorScheme() == 'dark';
  return (
    <SafeAreaView style={[theme ? styles.backgroundblack : styles.backgroundWhite]}>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        {/* <FlatCard />
        <EleavatedCards />
        <FancyCards />
        <ContactList/> */}
        <PasswordMain />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
const styles = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: 'white',
    height: '100%',
  },
  backgroundblack: {
    backgroundColor: 'black',
    height: '100%',
  }
})