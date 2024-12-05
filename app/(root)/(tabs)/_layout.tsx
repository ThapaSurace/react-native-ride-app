import { Tabs } from "expo-router";
import { View, Text, Image } from "react-native";

const TabIcon = () => (
  <View>
    <View>
      <Image />
    </View>
  </View>
);

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => <TabIcon />,
        }}
      />
    </Tabs>
  );
};
export default TabLayout;
