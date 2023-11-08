import React from 'react'

import { StyleSheet, SafeAreaView, Text, StatusBar, TouchableOpacity } from 'react-native'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text>Gustavo Zeni</Text>

        <TouchableOpacity>
          <AccountCircleIcon/>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#8000ff',
    paddingTop: statusBarHeight,
  }
})