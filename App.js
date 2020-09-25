import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";

export default function App() {
  const [countc, setCountc] = useState(0);
  const [countf, setCountf] = useState(32);

  const countIncrementHandler = () => {
    console.log("before" + countc);
    setCountc(countc + 1);
    console.log("after" + countc);
    // recalculate fahrenheit's temp, "count" isn't updated til after, so we have to add 1 here lol
    setCountf(Math.round((countc + 1) * 1.8 + 32));
  };

  const countDecrementHandler = () => {
    console.log("before" + countc);
    setCountc(countc - 1);
    console.log("afteR" + countc);
    // recalculate fahrenheit's temp, "count" isn't updated til after, so we have to subtract 1 here lol
    setCountf(Math.round((countc - 1) * 1.8 + 32));
  };

  const countfIncrementHandler = () => {
    setCountf(countf + 1);
    // recalculate celsius's temp, "count" isn't updated til after, so we have to add 1 here lol
    setCountc(Math.round((countf - 31) * (5 / 9)));
  };

  const countfDecrementHandler = () => {
    setCountf(countf - 1);
    // recalculate celsius's temp, "count" isn't updated til after, so we have to subtract 1 here lol
    setCountc(Math.round((countf - 33) * (5 / 9)));
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.text}>Temperature</Text>
        <Text style={styles.text}>Converter</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={styles.left}>
          <TouchableOpacity style={styles.Btn} onPress={countIncrementHandler}>
            <Text>^</Text>
          </TouchableOpacity>
          <View style={styles.loremBox}>
            <Text style={styles.tempText}>{countc}° C</Text>
          </View>
          <TouchableOpacity style={styles.Btn} onPress={countDecrementHandler}>
            <Text>v</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.right}>
          <TouchableOpacity style={styles.Btn} onPress={countfIncrementHandler}>
            <Text>^</Text>
          </TouchableOpacity>
          <View style={styles.loremBox}>
            <Text style={styles.tempText}>{countf}° F</Text>
          </View>
          <TouchableOpacity style={styles.Btn} onPress={countfDecrementHandler}>
            <Text>v</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#153611",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: "42px",
    fontWeight: "bold",
    color: "#153611",
    backgroundColor: "#ffffff",
    paddingRight: "20px",
    paddingLeft: "20px",
    textAlign: "center",
  },
  Btn: {
    backgroundColor: "#ffffff",
    margin: "20px",
    padding: "15px",
    color: "#153611",
    fontSize: "30px",
    borderRadius: "25px",
  },
  tempText: {
    fontSize: "30px",
    color: "#ffffff",
  },
});
