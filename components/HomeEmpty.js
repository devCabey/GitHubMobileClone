import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeEmpty = (props) => {
  const navigator = useNavigation();
  return (
    <View className="bg-gray-100 shadow-sm p-3 rounded-md">
      <View className="my-2">{props.children}</View>
      <TouchableOpacity
        onPress={() => navigator.navigate(props.route)}
        className="border border-gray-100 bg-white p-3 flex justify-center items-center shadow-sm "
      >
        <Text className="text-blue-500  font-normal ">{props.buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeEmpty;
