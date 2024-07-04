import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Carts from "../Screens/Carts.js";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Carts"
        component={Carts}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: {},
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
