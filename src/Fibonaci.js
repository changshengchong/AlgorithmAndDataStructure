import { Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

const Fibonaci = () => {
  const [result, setResult] = useState(null);
  const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
  };

  const [code, setCode] = useState(
    "const fib = (n, memo = {}) => { \n    if (n in memo) return memo[n]; \n    if (n <= 2) return 1; \n    memo[n] = fib(n - 1, memo) + fib(n - 2, memo); \n    return memo[n]; \n  };"
  );

  return (
    <VStack
      align="start"
      width="500px"
      bgColor="blackAlpha.200"
      padding="20px"
      borderRadius="md"
    >
      <Text>Fibonacci number</Text>
      <Input
        placeholder="number"
        type="number"
        bgColor="white"
        onChange={(e) => setResult(fib(e.target.value))}
      />
      <Text>{result}</Text>
      <CodeEditor
        language="typescript"
        padding={15}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          fontSize: 15,
          borderRadius: "1%",
          backgroundColor: "#161b22",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
    </VStack>
  );
};

export default Fibonaci;
