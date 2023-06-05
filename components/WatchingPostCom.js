import React, {useState, useRef} from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Ionicons, FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import {Video} from "expo-av"
import videoDE from "../assets/video.mp4"
const widthScreen = Dimensions.get("screen").width;

const WatchingPostCom = (props) => {
  const [like, setLike] = useState(false);
  const [visible, setVisible] = useState(true);
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View style={{
      marginTop: 10,
      backgroundColor: "white",
      display: visible ?  "flex" : "none",
    }}>
      <View style={styles.title}>
        <View style={styles.avt}>
          <Image style={styles.postAvt} source={props.avt}></Image>
        </View>
        <View style={styles.name}>
          <Text style={styles.username}>{props.name}</Text>
          <Text style={styles.timePost}>{props.time} giờ</Text>
        </View>
        <View style={styles.act}>
          <TouchableOpacity>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
            setVisible(false);
          }}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.caption}>
        <Text style={styles.contentCaption}>{props.caption}</Text>
      </View>
      <View style={styles.ImgPost}>
        <Video 
          style={styles.PostImage} 
          source={videoDE}
          ref={video}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={setStatus}
        ></Video>
      </View>
      <View style={styles.feeling}>
        <View style={styles.like}>
          <AntDesign name="like1" size={18} color="#1b74e3" />
          <Text>118</Text>
        </View>
        <View style={styles.comment}>
          <Text>25 bình luận</Text>
        </View>
      </View>
      <View style={styles.ActFeeling}>
        <TouchableOpacity style={styles.ActLike} onPress={()=> {
          setLike(!like)
        }}>
          <AntDesign name="like2" size={24} color={like ? "#1b74e3" : "black"} />
          <Text style={{color: like ? '#1b74e3' : "black"}}>Thích</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ActComment}>
          <FontAwesome5 name="comment" size={24} color="black" />
          <Text>Bình luận</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ActShare}>
          <MaterialCommunityIcons name="share-outline" size={24} color="black" />
          <Text>Chia sẻ</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  post: {

    marginTop: 10,
    backgroundColor: "white"
  },
  title: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "white",
    padding: 10,
  },
  caption:{
    padding: 10,
  },
  contentCaption:{
    fontSize: 20
  },
  avt: {
    flex: 1,
    marginTop: 2
  },
  postAvt: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: "#1b74e3",
    borderWidth: 3
  },
  name: {
    flex: 5
  },
  act: {
    flexDirection: "row",
    flex: 1.5,
    justifyContent: "space-between"
  },
  username: {
    fontSize: 17,
    fontWeight: "bold"
  },
  timePost: {
    fontSize: 12
  }, ImgPost: {
    marginTop: 10
  },
  PostImage: {
    width: widthScreen,
    height: 470
  },
  feeling: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    borderBottomColor: "#cfd0d5",
    borderBottomWidth: 1,
    
  },
  like: {
    flexDirection: "row",
    marginLeftL: 10
  },
  ActFeeling: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  ActLike: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  ActComment: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  ActShare: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
})

export default WatchingPostCom