import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";

const FilterComponent = ({ icon, title, select, onPress, emoji }) => {
  return (
    <TouchableOpacity
      className="flex-row space-x-5 px-4 h-16 pt-4 bg-white"
      onPress={() => onPress()}
    >
      <View>
        {icon && (
          <Feather
            name={icon}
            color={select == title ? "#387df5" : "#19191a"}
            size={24}
          />
        )}
        {emoji && <Text className="text-xl">{emoji}</Text>}
      </View>
      <View className="flex-row flex-1 border-b border-gray-300 space-x-2">
        <Text
          className={`flex-1 text-lg ${
            select === title ? "text-[#387df5]" : "text-[#19191a]"
          } `}
        >
          {title}
        </Text>

        <View>
          {select === title ? (
            <Ionicons name="checkmark-outline" size={23} color="#387df5" />
          ) : (
            <></>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FilterComponent;
