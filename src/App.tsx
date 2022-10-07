import { ChakraProvider, Text, VStack } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import BestSum from "./BestSum";
import CanSum from "./CanSum";
import Fibonaci from "./Fibonaci";
import GridTraveler from "./GridTraveler";
import HowSum from "./HowSum";
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
          Algorithm, Data Structure and Dynamic Programming Practices
        </Text>
        <InvertBinaryTree />
        <ReverseLinkedList />
        <Fibonaci />
        <GridTraveler />
        <CanSum />
        <HowSum />
        <BestSum />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
