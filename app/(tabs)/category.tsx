import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>he i'm hemn software in categroy</Text>
    </View>
  );
};

export default Page;
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
