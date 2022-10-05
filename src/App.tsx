import { ChakraProvider, Text, VStack } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import Fibonaci from "./Fibonaci";
import InvertBinaryTree from "./InvertBinaryTree";
import ReverseLinkedList from "./ReverseLinkedList";

function App() {
  return (
    <ChakraProvider>
      <VStack
        bgColor="#8ecdf5"
        padding="2rem"
        width="full"
        align="center"
        spacing={5}
      >
        <Text fontWeight="bold" fontSize="20px">
          Algorithm and Data Structure Practices
        </Text>
        <InvertBinaryTree />
        <ReverseLinkedList />
        <Fibonaci />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
