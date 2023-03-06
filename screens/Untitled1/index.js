import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#E45700',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.YtGPYkEL} source={require("./Recipeful(2).png")} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  YtGPYkEL: {
    width: 336,
    height: 195,
    position: "absolute",
    top: 110,
    left: 10.5
  }
});
export default Untitled1;