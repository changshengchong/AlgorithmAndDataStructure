import { Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

const BestSum = () => {
  const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;
    for (let num of numbers) {
      const remainder = targetSum - num;
      const remainderCombination = bestSum(remainder, numbers, memo);
      if (remainderCombination !== null) {
        const combination = [...remainderCombination, num];
        if (
          shortestCombination === null ||
          shortestCombination.length > combination.length
        ) {
          shortestCombination = combination;
        }
      }
    }

    memo[targetSum] = shortestCombination;

    return shortestCombination;
  };

  const [code, setCode] = useState(
    "const bestSum = (targetSum, numbers, memo = {}) => { \n    if (targetSum in memo) return memo[targetSum]; \n    if (targetSum === 0) return []; \n    if (targetSum < 0) return null; \n \n    let shortestCombination = null; \n    for (let num of numbers) { \n      const remainder = targetSum - num; \n      const remainderCombination = bestSum(remainder, numbers, memo); \n      if (remainderCombination !== null) { \n        const combination = [...remainderCombination, num]; \n        if ( \n          shortestCombination === null || \n          shortestCombination.length > combination.length \n        ) { \n          shortestCombination = combination; \n        } \n      } \n    } \n \n    memo[targetSum] = shortestCombination; \n \n    return shortestCombination; \n  };"
  );

  return (
    <VStack
      spacing={1}
      align="start"
      width="500px"
      bgColor="blackAlpha.200"
      padding="20px"
      borderRadius="md"
    >
      <Text fontWeight="bold">Best Sum</Text>
      <Text>canSum(7,[2,3]) = {bestSum(7, [2, 3])?.toString() || "null"}</Text>
      <Text>
        canSum(7,[5,3,4,7]) = {bestSum(7, [5, 3, 4, 7])?.toString() || "null"}
      </Text>
      <Text>canSum(7,[2,4]) = {bestSum(7, [2, 4])?.toString() || "null"}</Text>
      <Text>
        canSum(7,[2,3,5]) = {bestSum(8, [2, 3, 5])?.toString() || "null"}
      </Text>
      <Text>
        howSum(300, [30, 14]) = {bestSum(300, [30, 14])?.toString() || "null"}
      </Text>
      <CodeEditor
        language="typescript"
        padding={15}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          width: "100%",
          fontSize: 15,
          borderRadius: "1%",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
    </VStack>
  );
};

export default BestSum;
