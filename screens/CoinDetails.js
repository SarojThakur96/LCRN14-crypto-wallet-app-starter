import { SafeAreaView, Text } from "react-native";
import React from "react";
import { useFocusEffect, useRoute } from "@react-navigation/native";
const CoinDetails = () => {
  const route = useRoute();

  useFocusEffect(() => {
    React.useCallback(() => {
      console.log("route?.params==>", route?.params);
    }, []);
  });

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    ></SafeAreaView>
  );
};

export default CoinDetails;
