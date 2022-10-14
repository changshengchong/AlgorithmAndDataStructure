import { HStack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

const CanConstruct = () => {
  const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === "") return true;
    for (let word of wordBank) {
      if (target.indexOf(word) === 0) {
        const suffix = target.slice(word.length);
        if (canConstruct(suffix, wordBank, memo)) {
          memo[target] = true;
          return true;
        }
      }
    }

    memo[target] = false;
    return false;
  };

  const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === "") return 1;

    let totalCount = 0;

    for (let word of wordBank) {
      if (target.indexOf(word) === 0) {
        const numwaysForRest = countConstruct(
          target.slice(word.length),
          wordBank,
          memo
        );
        totalCount += numwaysForRest;
      }
    }

    memo[target] = totalCount;
    return totalCount;
  };

  const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === "") return [[]];

    const result = [];
    for (let word of wordBank) {
      if (target.indexOf(word) === 0) {
        const suffix = target.slice(word.length);
        const suffixWays = allConstruct(suffix, wordBank, memo);
        const targetWays = suffixWays.map((way) => [word, ...way]);
        result.push(...targetWays);
      }
    }

    memo[target] = result;
    return result;
  };

  const [code, setCode] = useState(
    'const canConstruct = (target, wordBank, memo = {}) => { \n    if (target in memo) return memo[target]; \n    if (target === "") return true; \n    for (let word of wordBank) { \n      if (target.indexOf(word) === 0) { \n        const suffix = target.slice(word.length); \n        if (canConstruct(suffix, wordBank, memo)) { \n          memo[target] = true; \n          return true; \n        } \n      } \n    } \n \n    memo[target] = false; \n    return false; \n  };'
  );

  const [countCode, setCountCode] = useState(
    'const countConstruct = (target, wordBank, memo = {}) => { \n    if (target in memo) return memo[target]; \n    if (target === "") return 1; \n \n    let totalCount = 0; \n \n    for (let word of wordBank) { \n      if (target.indexOf(word) === 0) { \n        const numwaysForRest = countConstruct( \n          target.slice(word.length), \n          wordBank, \n          memo \n        ); \n        totalCount += numwaysForRest; \n      } \n    } \n \n    memo[target] = totalCount; \n    return totalCount; \n  };'
  );

  const [allCode, setAllCode] = useState(
    'const allConstruct = (target, wordBank, memo) => { \n    if (target in memo) return memo[target]; \n    if (target === "") return [[]]; \n \n    const result = []; \n    for (let word of wordBank) { \n      if (target.indexOf(word) === 0) { \n        const suffix = target.slice(word.length); \n        const suffixWays = allConstruct(suffix, wordBank, memo); \n        const targetWays = suffixWays.map((way) => [word, ...way]); \n        result.push(...targetWays); \n      } \n    } \n \n    memo[target] = result; \n    return result; \n  }; \n'
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
      <Text fontWeight="bold">Can Construct</Text>
      <Text>Recursive (brute force -> memoized)</Text>
      <Text>Time complexity: O(n^m * m) -> O(n * m^2)</Text>
      <Text>Space complexity: O(m^2) -> O(m^2)</Text>
      <Text>
        canConstruct("abcdef", ["ab","abc", "cd", "def", "abcd"]) ={" "}
        {canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]).toString()}
      </Text>
      <Text>
        canConstruct("skateboard", ["bo","rd", "ate", "t", "ska", "boar"]) ={" "}
        {canConstruct("skateboard", [
          "bo",
          "rd",
          "ate",
          "t",
          "ska",
          "boar",
        ]).toString()}
      </Text>
      <Text>
        canConstruct("enterapotentpot", ["a","p", "ent", "enter", "ot", "o",
        "t"]) ={" "}
        {canConstruct("enterapotentpot", [
          "a",
          "p",
          "ent",
          "enter",
          "ot",
          "o",
          "t",
        ]).toString()}
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
      <Text fontWeight="bold">Count Construct</Text>
      <Text>Recursive (brute force -> memoized)</Text>
      <Text>Time complexity: O(n^m * m) -> O(n * m^2)</Text>
      <Text>Space complexity: O(m^2) -> O(m^2)</Text>
      <Text>
        countConstruct("abcdef", ["ab","abc", "cd", "def", "abcd"]) ={" "}
        {countConstruct("abcdef", [
          "ab",
          "abc",
          "cd",
          "def",
          "abcd",
        ]).toString()}
      </Text>
      <Text>
        countConstruct("skateboard", ["bo","rd", "ate", "t", "ska", "boar"]) ={" "}
        {countConstruct("skateboard", [
          "bo",
          "rd",
          "ate",
          "t",
          "ska",
          "boar",
        ]).toString()}
      </Text>
      <Text>
        countConstruct("enterapotentpot", ["a","p", "ent", "enter", "ot", "o",
        "t"]) ={" "}
        {countConstruct("enterapotentpot", [
          "a",
          "p",
          "ent",
          "enter",
          "ot",
          "o",
          "t",
        ]).toString()}
      </Text>
      <CodeEditor
        language="javascript"
        padding={15}
        value={countCode}
        onChange={(e) => setCountCode(e.target.value)}
        style={{
          width: "100%",
          fontSize: 15,
          borderRadius: "1%",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />

      <Text fontWeight="bold">All Construct</Text>
      <Text>
        allConstruct("abcdef", ["ab","abc", "cd", "def", "abcd"]) ={" "}
        {allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]).join(" / ")}
      </Text>
      <Text>
        allConstruct("skateboard", ["bo","rd", "ate", "t", "ska", "boar"]) ={" "}
        {allConstruct("skateboard", [
          "bo",
          "rd",
          "ate",
          "t",
          "ska",
          "boar",
        ]).join(" / ")}
      </Text>
      <Text>
        allConstruct("enterapotentpot", ["a","p", "ent", "enter", "ot", "o",
        "t"]) ={" "}
        {allConstruct("enterapotentpot", [
          "a",
          "p",
          "ent",
          "enter",
          "ot",
          "o",
          "t",
        ]).join(" / ")}
      </Text>
      <CodeEditor
        language="javascript"
        padding={15}
        value={allCode}
        onChange={(e) => setAllCode(e.target.value)}
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

export default CanConstruct;
