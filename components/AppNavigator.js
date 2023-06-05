import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from '@react-navigation/native';

import { FontAwesome5 } from '@expo/vector-icons';

import HomeCom from "./HomeCom";
import Watching from "./Watching";
import Thongbao from "./Thongbao";
import Setting from "./Setting";
const Tab = createMaterialTopTabNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeCom}
          options={{
            tabBarLabel: "",
            tabBarIcon: (tabInfo) => {
              return (<FontAwesome5 name="home" size={20} color={tabInfo.focused ? "#287ff0" : "black"} />)
            },

            tabBarStyle: { height: 50 },
            tabBarShowLabel: "false"
          }}
        ></Tab.Screen>
        <Tab.Screen name="tv" component={Watching}

          options={{
            tabBarLabel: "",
            tabBarIcon: (tabInfo) => {
              return (<FontAwesome5 name="tv" size={20} color={tabInfo.focused ? "#287ff0" : "black"} />)
            },
            tabBarShowLabel: "false",
            tabBarStyle: { height: 50 }
          }}></Tab.Screen>
        <Tab.Screen name="tb" component={Thongbao}
          options={{
            tabBarLabel: "",
            tabBarIcon: (tabInfo) => {
              return (<FontAwesome5 name="bell" size={20} color={tabInfo.focused ? "#287ff0" : "black"} />)
            },
            tabBarShowLabel: "false",
            tabBarStyle: { height: 50 }
          }}
        ></Tab.Screen>
        <Tab.Screen name="cd" component={Setting}
          options={{
            tabBarLabel: "",
            tabBarIcon: (tabInfo) => {
              return (<FontAwesome5 name="bars" size={20} color={tabInfo.focused ? "#287ff0" : "black"} />)
            },
            tabBarShowLabel: "false",
            tabBarStyle: { height: 50 }
          }}
        ></Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigator