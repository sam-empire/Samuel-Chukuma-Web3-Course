function dominantDirection(text) {
  // Count the directions of characters with associated scripts
  let directionCounter = countBy(
    text,
    char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }
  ).filter(({ name }) => name !== "none"); // Filter out script-less characters

  // Find the direction with the most characters
  return directionCounter.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection("Hello!"));

console.log(dominantDirection("Hey, مساء الخير"));
