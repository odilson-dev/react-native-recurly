import { tabs } from "@/constants/data";
import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

const TabLayout = () => {
  const TabIcon = ({ focused, icon }: TabIconProps) => (
    <Image
      source={icon}
      style={{
        width: 24,
        height: 24,
        tintColor: focused ? "#000" : "#888",
      }}
    />
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
