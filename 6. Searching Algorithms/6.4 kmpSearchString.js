// The Knutt-Morris-Pratt algorithm offers an improvement over the naive approach

function matchTable(word) {
  let arr = Array.from({ length: word.length }).fill(0);
  let suffixEnd = 1;
  let prefixEnd = 0;

  while (suffixEnd < word.length) {
    if (word[suffixEnd] === word[prefixEnd]) {
      prefixEnd += 1;
      arr[suffixEnd] = prefixEnd;
      suffixEnd += 1;
    } else if (word[suffixEnd] !== word[prefixEnd] && prefixEnd != 0) {
      prefixEnd = arr[prefixEnd - 1];
    } else {
      arr[suffixEnd] = 0;
      suffixEnd += 1;
    }
  }
  return arr;
}

// console.log(matchTable("abacababda"));

function kmpSearch(long, short) {
  let table = matchTable(short);
  let shortIdx = 0;
  let longIdx = 0;
  let count = 0;
  while (longIdx < long.length - short.length + shortIdx + 1) {
    if (short[shortIdx] !== long[longIdx]) {
      if (shortIdx === 0) longIdx += 1;
      else shortIdx = table[shortIdx - 1];
    } else {
      shortIdx += 1;
      longIdx += 1;
      if (shortIdx === short.length) {
        count++;
        shortIdx = table[shortIdx - 1];
      }
    }
  }
  return count;
}
