import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Links from './components/Links';
import LevelCounter from './components/LevelCounter';
import Logo from './components/Logo';
import Footer from './components/Footer';

const App = () => {
  return (
    <ScrollView style={styles.body}>
      <Header profile={'Moazan,'} />
      <Body label={'Are You Ready For Work?'} />
      <Links label={'Ready To Learn New Skills?'} />
      <LevelCounter />
      <Logo />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
  }
})

export default App;