import { Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

const HowSum = () => {
  const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    for (let num of numbers) {
      const remainder = targetSum - num;

      const remainderResult = howSum(remainder, numbers, memo);
      if (remainderResult !== null) {
        memo[targetSum] = [...remainderResult, num];
        return memo[targetSum];
      }
    }

    memo[targetSum] = null;
    return null;
  };

  const [code, setCode] = useState(
    "const howSum = (targetSum, numbers, memo = {}) => { \n    if (targetSum in memo) return memo[targetSum]; \n    if (targetSum === 0) return []; \n    if (targetSum < 0) return null; \n    for (let num of numbers) { \n      const remainder = targetSum - num; \n \n      const remainderResult = howSum(remainder, numbers, memo); \n      if (remainderResult !== null) { \n        memo[targetSum] = [...remainderResult, num]; \n        return memo[targetSum]; \n      } \n    }"
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
      <Text fontWeight="bold">How Sum</Text>
      <Text>Time complexity: O(n^m * m) -> O(n * m^2)</Text>
      <Text>Space complexity: O(m) -> O(m^2)</Text>
      <Text>howSum(7,[2,3]) = {howSum(7, [2, 3])?.toString() || "null"}</Text>
      <Text>
        howSum(7,[5,3,4,7]) = {howSum(7, [5, 3, 4, 7])?.toString() || "null"}
      </Text>
      <Text>howSum(7,[2,4]) = {howSum(7, [2, 4])?.toString() || "null"}</Text>
      <Text>
        howSum(7,[2,3,5]) = {howSum(7, [2, 3, 5])?.toString() || "null"}
      </Text>
      <Text>
        howSum(300, [30, 14]) = {howSum(300, [30, 14])?.toString() || "null"}
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

export default HowSum;
