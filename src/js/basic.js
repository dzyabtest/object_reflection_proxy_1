export default function showStats(char, order) {
  const arr = [];

  // eslint-disable-next-line guard-for-in
  for (const key in char) {
    const charStat = {};

    charStat.key = key;
    charStat.value = char[key];

    arr.push(charStat);
  }

  // eslint-disable-next-line array-callback-return, consistent-return
  arr.sort((prev, next) => {
    if (prev.key >= next.key) {
      return 1;
    }
    /* istanbul ignore next */
    if (prev.key < next.key) {
      return -1;
    }
  });

  if (order.length) {
    // eslint-disable-next-line no-plusplus
    for (let orderKey = order.length - 1; orderKey >= 0; orderKey--) {
      let arrIndex = -1;

      arrIndex = arr.findIndex((stat) => stat.key === order[orderKey]);

      if (arrIndex > 0) {
        const stat = arr[arrIndex];

        arr.splice(arrIndex, 1);
        arr.unshift(stat);
      }
    }
  }

  return arr;
}
