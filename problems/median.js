/**
 * The variable where the information to be processed is saved is initialized empty
 * @type {string}
 */
let input = '';

/**
 * The script starts listening to what is written through the console.
 */
process.stdin.on('data', (orders) => {
  input += orders;
});

/**
 *
 * Add a number to an ordered list in ascending order
 * @param list
 * @param num
 * @returns {*}
 */
const pushOrderedNumber = (list, num) => {
  const number = parseInt(num);
  if (!list.length || list[list.length - 1] < number) {
    list.push(number);
  } else {
    for (let i = 0; i < list.length; i += 1) {
      if (list[i] >= number) {
        list.splice(i, 0, number);
        break;
      }
    }
  }
  return list;
};

/**
 * Check if a certain number can be removed from a list, if so, the number is deleted.
 * returns an object with {error: true} if the number can't be deleted.
 * @param list
 * @param num
 * @returns {{list: *, error: boolean}}
 */
const deleteNumber = (list, num) => {
  const number = parseInt(num);
  const index = list.indexOf(number);
  if (index === -1) {
    return { list, error: true };
  }
  list.splice(index, 1);
  return { list, error: false };
};

/**
 * Find the median of an ordered list of numbers
 * @param list
 * @returns {string|*}
 */
const median = (list) => {
  if (!list.length) {
    return 'Wrong!';
  }
  const mid = Math.floor(list.length / 2);
  return list.length % 2 === 1 ? list[mid] : (list[mid] + list[mid - 1]) / 2;
};

/**
 * Review and execute the commands entered in the console
 * @param data
 */
const main = (data) => {
  const lines = (data.trim()).split('\n');
  const n = parseInt(lines[0]);
  let list = [];
  let state = { error: false };
  for (let i = 1; i <= n; i++) {
    const operation = lines[i].split(' ');
    if (operation[0] === 'a') {
      list = pushOrderedNumber(list, operation[1]);
    } else if (operation[0] === 'r') {
      state = deleteNumber(list, operation[1]);
      list = state.list;
    }
    if (state.error) {
      console.log('Wrong!');
      state.error = false;
    } else {
      console.log(median(list));
    }
  }
};

/**
 * Run the main process once the instructions have
 * been written through the console
 */
process.stdin.on('end', () => {
  main(input);
});
