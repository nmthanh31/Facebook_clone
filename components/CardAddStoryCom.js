import React from "react";
import avt from "../assets/avt.jpg"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
const CardAddStoryCom = () => {
  return (
    <TouchableOpacity style={styles.cardAddStr}>
      <View style={styles.AvtStory}>
        <Image
          style={styles.imgAvtStory}
          source={avt}
          
        ></Image>
      </View>
      <View >
        <FontAwesome5  name="plus-circle" size={24} color="#1b74e3" 
        style={{
          position: 'absolute',
          top: -12,
          left: 35,
        }}
        />
      </View>
      <View style={styles.White}>
        <Text style={{fontWeight: "bold"}}>Tạo tin</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  cardAddStr: {
    width: 100,
    height: 150,
    borderRadius: 20,
    backgroundColor: "white",
    margin: 5
  },
  AvtStory: {
    flex: 1,
  },
  imgAvtStory: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    
  },
  White: {
    flex: 1,
    flexDirection: "column-reverse",
    alignItems: "center"
  },
  
})

export default CardAddStoryCom