import { Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

const CanSum = () => {
  const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for (let num of numbers) {
      const remainder = targetSum - num;

      if (canSum(remainder, numbers, memo) === true) {
        memo[targetSum] = true;
        return true;
      }
    }

    memo[targetSum] = false;
    return false;
  };

  const [code, setCode] = useState(
    "const canSum = (targetSum, numbers, memo = {}) => { \n    if (targetSum in memo) return memo[targetSum]; \n    if (targetSum === 0) return true; \n    if (targetSum < 0) return false; \n    for (let num of numbers) { \n      const remainder = targetSum - num; \n \n      if (canSum(remainder, numbers, memo) === true) { \n        memo[targetSum] = true; \n        return true; \n      } \n    } \n \n    return false; \n  };"
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
      <Text fontWeight="bold">Can Sum</Text>
      <Text>Time complexity: O(n^m) -> O(m * n)</Text>
      <Text>Space complexity: O(m) -> O(m)</Text>
      <Text>canSum(7,[2,3]) = {canSum(7, [2, 3]).toString()}</Text>
      <Text>canSum(7,[5,3,4,7]) = {canSum(7, [5, 3, 4, 7]).toString()}</Text>
      <Text>canSum(7,[2,4]) = {canSum(7, [2, 4]).toString()}</Text>
      <Text>canSum(7,[2,3,5]) = {canSum(7, [2, 3, 5]).toString()}</Text>
      <Text>canSum(300,[7,14]) = {canSum(300, [7, 14]).toString()}</Text>
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

export default CanSum;
