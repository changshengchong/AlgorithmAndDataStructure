import { Text, VStack } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

const BinarySearch = () => {
  const binarySearch = (arr, l, r, x) => {
    if (r >= l) {
      let mid = l + Math.floor((r - l) / 2);

      if (arr[mid] == x) return mid;

      if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);

      return binarySearch(arr, mid + 1, r, x);
    }

    return -1;
  };

  const [code, setCode] = useState(
    "const binarySearch = (arr, l, r, x) => { \n        if (r >= l) { \n            let mid = l + Math.floor((r - l) / 2); \n      \n            if (arr[mid] == x) \n                return mid; \n      \n            if (arr[mid] > x) \n                return binarySearch(arr, l, mid - 1, x); \n      \n            return binarySearch(arr, mid + 1, r, x); \n        } \n      \n        return -1; \n    }"
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

export default BinarySearch;
