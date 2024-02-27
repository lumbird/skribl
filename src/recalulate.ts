/**
 * Generates a unique id from the node name
 * @param node
 */
export function generateNodeHash(node: HTMLElement) {
  return JSON.stringify(node.attributes) + JSON.stringify(node.textContent);
}

/**
 * Compares two nodes and returns true if they are the same for virtual dom nodes
 * @param source
 * @param destination
 */
export function compareNode(source: HTMLElement, destination: HTMLElement): Node {

  // Shallow comparison to check if the values are just identical
  if (source != destination) {
    return destination;
  }

  // Generate hashes for deeper comparison
  const sourceHash = generateNodeHash(source);
  const destinationHash = generateNodeHash(destination);

  // If the hashes are the same, return the source node
  if (sourceHash !== destinationHash) {
    return destination;
  }
  else {
    source.childNodes.forEach((sourceChild, i) => {
      const betterChild = compareNode(
        sourceChild as HTMLElement, 
        destination.childNodes[i] as HTMLElement
      );
      source.replaceChild(sourceChild, betterChild);
    });


    return source;
  }
};