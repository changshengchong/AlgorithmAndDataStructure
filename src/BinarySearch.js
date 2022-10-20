import { Input, Text, VStack } from "@chakra-ui/react";
import React, { useMemo, useRef, useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

const BinarySearch = () => {
  const binarySearchRecursive = (arr, start, end, x) => {
    if (end >= start) {
      let mid = start + Math.floor((end - start) / 2);

      if (arr[mid] === x) return mid;

      if (arr[mid] > x) return binarySearchRecursive(arr, start, mid - 1, x);

      return binarySearchRecursive(arr, mid + 1, end, x);
    }

    return -1;
  };

  const binarySearchIterative = (arr, x) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let mid = Math.floor((end + start) / 2);

      if (arr[mid] === x) {
        return mid;
      } else if (arr[mid] > x) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return -1;
  };

  const [recursiveCode, setRecursiveCode] = useState(
    "const binarySearchRecursive = (arr, start, end, x) => { \n    if (end >= start) { \n      let mid = start + Math.floor((end - start) / 2); \n \n      if (arr[mid] === x) return mid; \n \n      if (arr[mid] > x) return binarySearchRecursive(arr, start, mid - 1, x); \n \n      return binarySearchRecursive(arr, mid + 1, end, x); \n    } \n \n    return -1; \n  };"
  );

  const [iterativeCode, setIterativeCode] = useState(
    "const binarySearchIterative = (arr, x) => { \n    let start = 0; \n    let end = arr.length - 1; \n    while (start <= end) { \n      let mid = Math.floor((end + start) / 2); \n \n      if (arr[mid] === x) return mid; \n      else if (arr[mid] > x) { \n        end = mid - 1; \n      } else { \n        start = mid + 1; \n      } \n    } \n \n    return -1; \n  };"
  );

  const [arr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [target, setTarget] = useState(8);
  const index = useMemo(
    () => binarySearchIterative(arr, +target),
    [arr, target]
  );

  return (
    <VStack
      spacing={1}
      align="start"
      bgColor="blackAlpha.200"
      width="full"
      padding="20px"
      borderRadius="md"
    >
      <Text fontWeight="bold">Binary search</Text>
      <Text>Array: [{arr.toString()}]</Text>
      <Text>Target: {target}</Text>
      <Input
        type="number"
        bgColor="white"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      ></Input>

      <Text>Index: {index}</Text>
      <CodeEditor
        language="typescript"
        padding={15}
        value={recursiveCode}
        onChange={(e) => setRecursiveCode(e.target.value)}
        style={{
          width: "100%",
          fontSize: 15,
          borderRadius: "1%",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
      <CodeEditor
        language="typescript"
        padding={15}
        value={iterativeCode}
        onChange={(e) => setIterativeCode(e.target.value)}
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

export default BinarySearch;
