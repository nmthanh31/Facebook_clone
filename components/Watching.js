import React from "react";
import { Text, View } from "react-native";
import WatchingPostCom from "./WatchingPostCom";
import avt2 from "../assets/avt2.jpg"
const Watching
 =() => {
  return (
    <View>

      <WatchingPostCom 
        avt={avt2} 
        name={"Nguyễn Thảo"}
        time={"5"}
        caption={""}
      />
    </View>
  )
}
export default Watching
