process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
let grandPath = [];

/**
 * Listen
 * written instructions through the console
 */
process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', () => {
  inputString = inputString.trim().split('\n').map((str) => str.trim());

  main();
});

const readLine = () => inputString[currentLine++];

/**
 * Get the adjacent nodes
 * @param node
 * @param tree
 * @returns {*}
 */
const adjacents = (node, tree) => {
  const adjacents = tree.filter((item) => (item[0] === node || item[1] === node));
  return adjacents.map((item) => (item[0] !== node ? item[0] : item[1]));
};

/**
 * Add nodes to stack
 * @param stack
 * @param list
 * @returns {*[]}
 */
const addToStack = (stack, list) => {
  const newStack = list.filter((item) => !stack.includes(item));
  return [...stack, ...newStack];
};

/**
 * Check if a node have neighbors available
 * @param stack
 * @param list
 * @returns {boolean}
 */
const itsAll = (stack, list) => {
  for (let i = 0; i < list.length; i++) {
    if (!stack.includes(list[i])) {
      return false;
    }
  }
  return true;
};

/**
 * Find path between two given nodes
 * @param start
 * @param end
 * @param tree
 * @param stack
 * @param path
 * @returns {boolean}
 */
const findPath = (start, end, tree, stack, path) => {
  if (start === end) {
    grandPath.push(start);
    return true;
  }
  const neightboors = adjacents(start, tree);
  if (neightboors.includes(end)) {
    grandPath.push(end);
    return true;
  }
  if (itsAll(stack, neightboors)) {
    return false;
  }
  stack = addToStack(stack, neightboors);
  let i = 0;
  while (stack.length > 0 && i < stack.length) {
    grandPath.push(stack[i]);
    if (!findPath(stack[i], end, tree, stack, path)) {
      grandPath.pop();
      i++;
    } else {
      return true;
    }
  }
};

/**
 * find the solution
 * @param c
 * @param tree
 * @returns {string}
 */
const solve = (c, tree) => {
  let str = '';
  for (let i = 0; i < c.length; i++) {
    let sum = 0;
    for (let k = 0; k < c.length; k++) {
      grandPath.push(i + 1);
      findPath(i + 1, k + 1, tree, [], [i + 1]);
      const path = grandPath;
      const colors = [];
      for (let j = 0; j < path.length; j++) {
        if (!colors.includes(c[path[j] - 1])) {
          colors.push(c[path[j] - 1]);
        }
      }
      sum += colors.length;
      grandPath = [];
    }
    str += `${sum}\n`;
  }
  return str;
};

/**
 * Main
 */
const main = () => {
  const cCount = parseInt(readLine(), 10);
  const c = readLine().split(' ').map((cTemp) => parseInt(cTemp, 10));
  const tree = Array(cCount - 1);
  for (let treeRowItr = 0; treeRowItr < cCount - 1; treeRowItr++) {
    tree[treeRowItr] = readLine().split(' ').map((treeTemp) => parseInt(treeTemp, 10));
  }
  const result = solve(c, tree);
  console.log(result);
};
