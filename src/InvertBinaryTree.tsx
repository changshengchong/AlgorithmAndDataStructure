import { Text, VStack } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

class Tree {
  root?: Node | null;

  invert = () => {
    this.invertNode(this.root);
  };

  invertNode = (node?: Node | null) => {
    if (node) {
      const temp = this.invertNode(node?.left);
      node.left = node.right;
      node.right = temp;

      return node;
    }
    return null;
  };
}

class Node {
  value: number;
  left?: Node | null;
  right?: Node | null;

  constructor(value: number) {
    this.value = value;
  }
}

const tree = new Tree();

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);

const original = JSON.parse(JSON.stringify(tree));
tree.invert();
const inverted = JSON.parse(JSON.stringify(tree));

function InvertBinaryTree() {
  const Tree = ({ tree }: { tree: Tree }) => {
    return (
      <Text>
        {`[${tree.root?.value}, ${tree.root?.left?.value}, 
        ${tree.root?.right?.value}, ${tree.root?.left?.left?.value}, 
        ${tree.root?.left?.right?.value}, ${tree.root?.right?.left?.value}, 
        ${tree.root?.right?.right?.value}]`}
      </Text>
    );
  };

  const [code, setCode] = useState(
    " invertNode = (node?: Node | null) => { \n    if (node) { \n      const temp = this.invertNode(node?.left); \n      node.left = node.right; \n      node.right = temp; \n \n      return node; \n    } \n    return null; \n  };"
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
      <Text fontWeight="bold">Invert binary tree</Text>
      <Text>Original</Text> <Tree tree={original}></Tree>
      <Text>Inverted</Text> <Tree tree={inverted}></Tree>
      <Text>Code</Text>
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
}

export default InvertBinaryTree;
