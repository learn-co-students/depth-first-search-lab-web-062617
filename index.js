function depthFirstSearch(rootNode, vertices, edges) {
  rootNode.discovered = true;
  let stack = [rootNode];
  let discoveredNodes = [rootNode];

  while (stack.length > 0) {
    let currentNode = stack.pop()
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
    markDiscovered(adjacentNodes)
    stack = stack.concat(adjacentNodes)
    discoveredNodes = discoveredNodes.concat(adjacentNodes)
  }
  return discoveredNodes;
}

function findAdjacent(nodeName, vertices, edges) {
  let startingNode = vertices.filter(node => node.name === nodeName)[0]
  let startingNodeIndex = vertices.indexOf(startingNode)
  let matchingEdges = edges.filter(edge => edge.includes(nodeName))
  let matches = [];
  matchingEdges.map(edge => {
    edge.map(edgeName => {
      vertices.map((vertex, index) => {
        if (vertex.name === edgeName && !matches.includes(vertex) && index > startingNodeIndex) {
          matches.push(vertex)
        }
      })
    })
  })
  return matches
}


function markDiscovered(nodes) {
  nodes.map(node => node.discovered = true)
}
