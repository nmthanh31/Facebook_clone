import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import FormStatus from "./FormStatus";
import avt2 from "../assets/avt2.jpg"
import str from "../assets/str.jpg"
import avt from "../assets/avt.jpg"
import post from "../assets/post.jpg"
import ane from "../assets/ane.jpg"
import CardAddStoryCom from "./CardAddStoryCom";
import CardStoryCom from "./CardStory";
import PostCom from "./PostCom";
const HomeCom = () => {
  return (
    < >
      <ScrollView>
        <FormStatus></FormStatus>
        <View style={styles.strCom}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}

          >
            <CardAddStoryCom></CardAddStoryCom>
            <CardStoryCom str={str} avt2={avt2}></CardStoryCom>
            <CardStoryCom str={str} avt2={avt2}></CardStoryCom>
            <CardStoryCom str={str} avt2={avt2}></CardStoryCom>
            <CardStoryCom str={str} avt2={avt2}></CardStoryCom>
            <CardStoryCom str={str} avt2={avt2}></CardStoryCom>
            <CardStoryCom str={str} avt2={avt2}></CardStoryCom>
            <CardStoryCom str={str} avt2={avt2}></CardStoryCom>
            <CardStoryCom str={str} avt2={avt2}></CardStoryCom>
            <CardStoryCom str={str} avt2={avt2}></CardStoryCom>
            <CardStoryCom str={str} avt2={avt2}></CardStoryCom>
            <CardStoryCom str={str} avt2={avt2}></CardStoryCom>
            <CardStoryCom str={str} avt2={avt2}></CardStoryCom>
          </ScrollView>
        </View>
        <PostCom 
          avt={avt} 
          name={"Nguyễn Mạnh Thành"}
          time = {"4"}
          caption = {"..."}
          post={ane}
        ></PostCom>
        <PostCom 
          avt={avt2} 
          name={"Nguyễn Thảo"}
          time = {"4"}
          caption = {""}
          post={post}
        ></PostCom>
        <PostCom 
          avt={avt} 
          name={"Nguyễn Mạnh Thành"}
          time = {"4"}
          caption = {""}
          post={str}
        ></PostCom>
      </ScrollView>
    </>
  )
}
const styles = StyleSheet.create({
  strCom: {
    height: 160,
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 8
  }
})
export default HomeCom