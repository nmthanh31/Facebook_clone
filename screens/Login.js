import WelcomeLogo from "../assets/WelcomeLogo.jpg"
import metaBlack from "../assets/metaBlack.png"
import React, { useState } from 'react';
import { Formik } from "formik";
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import SignupSchema from "../validate";

import MainScreen from "./MainScreen";
const FormLogin = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  if (user == "bi31072003@gmail.com" && pass == "12345678") {
    return (
      <MainScreen></MainScreen>
    )
  } else {
    return (
      <>
        <StatusBar style="dark" />
        <SafeAreaView style={styles.formLogin}>
          <Formik
            initialValues={{ username: '', password: "" }}
            validationSchema={SignupSchema}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <View style={styles.language}>
                  <Text>Tiếng Việt</Text>
                </View>
                <View style={styles.logo}>
                  <Image style={styles.img} source={WelcomeLogo}></Image>
                </View>
                <View style={styles.Form}>
                  <View style={styles.FormInput}>
                    <TextInput
                      style={styles.user}
                      placeholder="Số di động hoặc email"
                      onChangeText={
                        handleChange('username')
                      }
                      onBlur={handleBlur('username')}
                      value={values.username}
                    ></TextInput>
                    {errors.username && touched.username && <Text style={{ color: "red" }}>{errors.username}</Text>}
                  </View>
                  <View style={styles.FormInput}>
                    <TextInput
                      style={styles.pass}
                      placeholder="Mật khẩu"
                      secureTextEntry={true}
                      onChangeText={
                        handleChange('password')
                      }
                      onBlur={handleBlur('password')}
                      value={values.password}
                    ></TextInput>
                    {errors.password && touched.password && <Text style={{ color: "red" }}>{errors.password}</Text>}
                  </View>
                  <TouchableOpacity style={styles.btnLogin} onPress={() => {
                      handleSubmit();
                      setUser(values.username);
                      setPass(values.password);
                    }}>
                    <Text style={styles.btnLoginText}  >Đăng Nhập</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnForgetPass}>
                    <Text style={styles.btnForgetPassText}>Bạn quên mật khẩu ư?</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.SignUp}>
                  <TouchableOpacity style={styles.btnSignUp}>
                    <Text style={styles.btnSignUpText}>Tạo tài khoản mới</Text>
                  </TouchableOpacity>
                  <Image style={styles.meta} source={metaBlack}></Image>
                </View>
              </>
            )}

          </Formik>
        </SafeAreaView>
      </>
    );
  }
}
const INPUT = {
  borderColor: "grey",
  height: 60,
  borderWidth: 1,
  borderRadius: 13,
  padding: 10,

  fontSize: 15

}
const styles = StyleSheet.create({
  formLogin: {
    padding: 20,
    justifyContent: "space-between",
    flex: 1
  },
  language: {
    alignItems: "center",
    paddingTop: 25,
    flex: 1
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    flex: 4,
  },
  img: {
    width: 70,
    height: 70
  },
  user: {
    ...INPUT,
  },
  pass: {
    ...INPUT,

  },
  Form: {
    flex: 8
  },
  FormInput: {
    marginBottom: 10,
    height: 80
  },
  btnLogin: {
    height: 50,
    borderRadius: 30,
    width: "100%",
    backgroundColor: "#0064de",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  btnLoginText: {
    fontSize: 15,
    color: "white"
  },
  btnForgetPass: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnForgetPassText: {
    fontSize: 15
  },
  SignUp: {
    flex: 2, justifyContent: "center",
    alignItems: "center"
  },
  btnSignUp: {
    height: 50,
    borderRadius: 30,
    width: "100%",
    borderWidth: 3,
    borderColor: "#0064de",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  btnSignUpText: {
    color: "#0064de",
    fontSize: 15,
    fontWeight: "bold",
  },
  meta: {
    width: 60,
    height: 20
  }
})

export default FormLogin;