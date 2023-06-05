import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import facebook from "../assets/facebook.png"
import { FontAwesome5 } from '@expo/vector-icons';
const TopMS = () => {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.Top}>
        <View style={styles.logoMS}>
          <Image
            source={facebook}
            style={styles.imgLogoMS}
          ></Image>
        </View>
        <View style={styles.Action}>
          <TouchableOpacity style={styles.btnAction}><FontAwesome5 name="plus" size={20} color="black" /></TouchableOpacity>
          <TouchableOpacity style={styles.btnAction}><FontAwesome5 name="search" size={20} color="black" /></TouchableOpacity>
          <TouchableOpacity style={styles.btnAction}><FontAwesome5 name="facebook-messenger" size={20} color="black" /></TouchableOpacity>
        </View>
      </SafeAreaView>
    </>

  );
}
const styles = StyleSheet.create({
  Top: {
    flexDirection: "row",
    justifyContent:"space-between",
    padding: 25,
    height: 100,

  },
  logoMS:{
    flex: 2,
    marginTop: 20,
    transform: [{translateX: -18}]
  },
  imgLogoMS:{
    width:120,
    height: 50
  },
  Action:{
    flexDirection: "row",
    marginTop: 30,
    flex: 1,
  
  },
  btnAction:{
    height:30,
    width: 30,
    backgroundColor: "#f1f2f6",
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  }
})
export default TopMS