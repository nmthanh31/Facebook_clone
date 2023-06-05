import React from "react";

import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const CardStoryCom = (props) => {
  return (
    <TouchableOpacity style={styles.cardAddStr}>

      <View style={styles.Str}>
        <Image style={styles.imgStr} source={props.str}></Image>
      </View>
      <View style={styles.AvtStory}>
        <Image
          style={styles.imgAvtStory}
          source={props.avt2}
        ></Image>
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
    position: 'absolute',
    top: 10,
    left: 10,
    opacity: 99
  },
  imgAvtStory: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderColor: "#1b74e3",
    borderWidth: 3
  },
  Str: {
    flex: 1,

  },
  imgStr: {
    width: 100,
    height: 150,
    borderRadius: 20,
  }

})

export default CardStoryCom