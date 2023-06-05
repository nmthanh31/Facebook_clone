import React from "react";
import avt from "../assets/avt.jpg"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
const FormStatus = () => {
  return (
    <View style={styles.StatusContent}>

      <View style={styles.Avt}>
        <Image style={styles.imgAvt} source={avt}></Image>
      </View>


      <View style={styles.IPStatus}>
        <TextInput style={styles.inputStatus} placeholder="Bạn đang nghĩ gì?">
        </TextInput>
      </View>


      <TouchableOpacity style={styles.icon}>
        <FontAwesome5  name="file-image" size={25} color="green" />
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
  StatusContent: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white"
  },
  Avt: {
    flex: 1
  },
  imgAvt: {
    width: 40,
    height: 40,
    borderRadius: 25,
  }, 
  IPStatus: {
    flex: 5
  },
  inputStatus: {
    borderWidth: 1,
    borderColor: "grey",
    height: 35,
    padding: 5,
    borderRadius: 15
  },
  icon:{
    flex: 1,
    alignItems: "center",
    marginTop: 5
  }
})
export default FormStatus