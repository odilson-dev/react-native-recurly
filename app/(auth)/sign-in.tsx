import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const signIn = () => {
  return (
    <View>
      <Text>signIn</Text>

      <Link href="/sign-up">
        <Text className="text-2xl font-bold text-success">
          Create a new account
        </Text>
      </Link>
    </View>
  );
};

export default signIn;
