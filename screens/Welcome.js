import React, {useEffect, useState} from "react";

import WelcomeLogo from "../assets/WelcomeLogo.jpg"
import MetaLogo from "../assets/MetaLogo.png"
import { Image, StyleSheet, Text, View } from "react-native";
import FormLogin from "./Login";
const Welcome = () => {
  const [isScreens, setIsScreens] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setIsScreens(true);
    },2000)
  })

  if(isScreens == true){
    return (
      <FormLogin></FormLogin>
    )
  }else{
    return (
      <View style={styles.containerLogo}>
        <View style={styles.mainLogo}>
          <Image source={WelcomeLogo} style={styles.Logo}></Image>
        </View>
        <View style={styles.footer}>
          <Text style={{textAlign: "center"}}>From</Text>
          <Image source={MetaLogo} style={styles.Meta}></Image>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerLogo: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20
  },
  Logo: {
    width: 90,
    height: 90,
  },
  mainLogo:{
    flex: 4,
    justifyContent: "center"
  },
  Meta: {
    width: 100,
    height: 50
  },
  footer: {
    flex: 1,
  }
});


export default Welcome