import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#E45700',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={{}}><Pressable onPress={() => {
          navigation.navigate("productListing");
        }}><ImageBackground style={styles.YtGPYkEL} source={require("./Recipeful(2).png")} resizeMode="cover"></ImageBackground></Pressable></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  YtGPYkEL: {
    width: 336,
    height: 351,
    position: "absolute",
    top: 27,
    left: 0
  }
});
export default Untitled1;