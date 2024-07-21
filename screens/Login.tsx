import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../utils/constant";
import Input from "../components/Input/Input";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (name: string) => (text: string) => {
    setData((prevData) => ({
      ...prevData,
      [name]: text,
    }));
  };

  return (
    <View style={styles.conatiner}>
      <Image source={require("../assets/app_icon.png")} style={styles.logo} />
      <Text style={styles.header}>
        Login{"\n"}to{"\n"}Culturefex
      </Text>
      <Input
        label="Email"
        value={data.email}
        onChangeText={handleChange("email")}
      />
      <Input
        label="Password"
        isPassword
        value={data.password}
        onChangeText={handleChange("password")}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    color: colors.secondary,
  },
  logo: {
    marginTop: 70,
  },
  header: {
    fontFamily: "Inter_900Black",
    fontSize: 40,
    color: colors.secondary,
    marginVertical: 20,
  },
});
