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

  const fibTab = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
      table[i + 1] += table[i];
      table[i + 2] += table[i];
    }

    return table[n];
  };

  const [code, setCode] = useState(
    "const fib = (n, memo = {}) => { \n    if (n in memo) return memo[n]; \n    if (n <= 2) return 1; \n    memo[n] = fib(n - 1, memo) + fib(n - 2, memo); \n    return memo[n]; \n  };"
  );

  const [tabCode, setTabCode] = useState(
    "const fibTab = (n) =>{ \n    const table = Array(n + 1).fill(0); \n    table[1] = 1; \n    for(let i = 0; i <= n; i++) \n    { \n      table[i + 1] += table[i];  \n      table[i + 2] += table[i];  \n    } \n \n   return table[n]; \n  }"
  );

  return (
    <VStack
      align="start"
      width="full"
      bgColor="blackAlpha.200"
      padding="20px"
      borderRadius="md"
    >
      <Text fontWeight="bold">Fibonacci number</Text>
      <Text>Recursive (brute force -> memoized)</Text>
      <Text>Time complexity: O(2^n) -> O(n)</Text>
      <Text>Space complexity: O(n) -> O(n)</Text>
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
          width: "100%",
          fontSize: 15,
          borderRadius: "1%",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
      <Text>Tabular </Text>
      <CodeEditor
        language="typescript"
        padding={15}
        value={tabCode}
        onChange={(e) => setTabCode(e.target.value)}
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

export default Fibonaci;
