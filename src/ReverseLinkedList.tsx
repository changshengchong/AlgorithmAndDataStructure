import { HStack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { LinkedList, Node } from "./LinkedList";
import CodeEditor from "@uiw/react-textarea-code-editor";

const ReverseLinkedList = () => {
  const list = new LinkedList();
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
  list.addLast(4);

  const original = JSON.parse(JSON.stringify(list.first));
  list.reverse();
  const reversed = JSON.parse(JSON.stringify(list.first));
  list.reverse();
  const reverseAgain = JSON.parse(JSON.stringify(list.first));

  interface NodeProps {
    node?: Node | null;
  }

  const PrintList = ({ node }: NodeProps) => {
    const list = [];
    while (node != null) {
      list.push(node.value);
      node = node.next;
    }

    return (
      <>
        {list.map((value, i) => (
          <Text key={i}>{value}</Text>
        ))}
      </>
    );
  };

  const [code, setCode] = useState(
    "reverse = () => { \n    this.last = this.first; \n    let prev = null; \n    let current = this.first; \n    while (current != null) { \n      let next = current.next; \n      current.next = prev; \n      prev = current; \n      current = next; \n    } \n \n    this.first = prev; \n  };"
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
      <Text fontWeight="bold"> Reversed Linked list</Text>
      <HStack>
        <Text>Original</Text> <PrintList node={original}></PrintList>
      </HStack>

      <HStack>
        <Text>Reversed</Text>
        <PrintList node={reversed}></PrintList>
      </HStack>
      <HStack>
        <Text>Reversed again</Text>
        <PrintList node={reverseAgain}></PrintList>
      </HStack>
      <Text>Code</Text>
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

export default ReverseLinkedList;
