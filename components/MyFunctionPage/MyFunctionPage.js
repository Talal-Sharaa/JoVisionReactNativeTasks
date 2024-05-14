import React, { useState } from "react";
import { View, TextInput } from "react-native";
import Task22 from "../Task22";

const MyFunctionPage = () => {
  const [text, setText] = useState("");
  const handleTextChange = (text) => {
    setText(text);
  }
  return(
    <View>
      <TextInput onChangeText={handleTextChange}></TextInput>
      <Task22 text={text} />
    </View>
  );
};

export default MyFunctionPage;
