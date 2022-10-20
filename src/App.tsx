import { ChakraProvider, Text, VStack } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import BestSum from "./BestSum";
import BinarySearch from "./BinarySearch";
import CanConstruct from "./CanConstruct";
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
        align="start"
        spacing={5}
      >
        <Text fontWeight="bold" fontSize="20px">
          Algorithm, Data Structure and Dynamic Programming Practices
        </Text>
        <BinarySearch />
        <InvertBinaryTree />
        <ReverseLinkedList />
        <Fibonaci />
        <GridTraveler />
        <CanSum />
        <HowSum />
        <BestSum />
        <CanConstruct />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
