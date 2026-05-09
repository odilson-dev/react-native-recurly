import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>{id}</Text>

      <Link href="../" asChild>
        <Text>Back</Text>
      </Link>
    </View>
  );
};

export default SubscriptionDetails;
