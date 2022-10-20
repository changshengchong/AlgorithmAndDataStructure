import { HStack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

const GridTraveler = () => {
  const gridTraveler = (m, n, memo = {}) => {
    const key = m + "," + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
  };

  const gridTravelerTab = (m, n) => {
    const table = Array(m + 1)
      .fill()
      .map(() => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) {
      for (let j = 0; i <= n; i++) {
        const current = table[i][j];
        if (j + 1 <= n) table[i][j + 1] += current;
        if (i + 1 <= m) table[i + 1][j] += current;
      }
    }

    return table[m][n];
  };

  const a = gridTraveler(1, 1);
  const b = gridTraveler(2, 3);
  const c = gridTraveler(3, 2);
  const d = gridTraveler(3, 3);
  const e = gridTraveler(18, 18);

  const [code, setCode] = useState(
    "const gridTraveler = (m, n, memo = {}) => { \n    const key = m + ',' + n; \n    if (key in memo) return memo[key]; \n    if (m === 1 && n === 1) return 1; \n    if (m === 0 || n === 0) return 0; \n    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo); \n    return memo[key]; \n  };"
  );

  const [tabCode, setTabCode] = useState(
    " const gridTravelerTab = (m, n) => { \n    const table = Array(m + 1) \n      .fill() \n      .map(() => Array(n + 1).fill(0)); \n    for (let i = 0; i <= m; i++) { \n      for (let j = 0; i <= n; i++) { \n        const current = table[i][j]; \n        if (j + 1 <= n) table[i][j + 1] += current; \n        if (i + 1 <= m) table[i + 1][j] += current; \n      } \n    } \n \n    return table[m][n]; \n  };"
  );

  return (
    <VStack
      spacing={1}
      align="start"
      width="full"
      bgColor="blackAlpha.200"
      padding="20px"
      borderRadius="md"
    >
      <Text fontWeight="bold">Grid Traveler</Text>
      <Text>Recursive (brute force -> memoized)</Text>
      <Text>Time complexity: O(2^(n+m)) -> O(m * n)</Text>
      <Text>Space complexity: O(n + m) -> O(n + m)</Text>

      <Text>gridTraveler(1,1) = {a}</Text>
      <Text>gridTraveler(2,3) = {b}</Text>
      <Text>gridTraveler(3,2) = {c}</Text>
      <Text>gridTraveler(3,3) = {d}</Text>
      <Text>gridTraveler(18,18) = {e}</Text>

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
      <Text>Tabular</Text>
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

export default GridTraveler;
