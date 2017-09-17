let _data = [3, 4, 1, 1, 2, 3, 4, 5, 6];

function sumFor(data) {
  let sum = 0;
  for (const num of data) {
    sum += num;
  }

  return sum;
}
function sumWhile(data) {
  let sum = 0, i = 0;
  while (data.length > i) {
    sum += data[i++];
  }

  return sum;
}
function sumRecursion(data, sum) {
  const temp = data.slice();
  if (!temp[0]) {
    return sum;
  }

  sum += temp[0];
  temp.shift();

  return sumRecursion(temp, sum);
}

function sumTheSimpleWay(data) {
  return _.reduce(data, (memo, num) => {return memo + num}, 0);
}

console.log(sumFor(_data), sumWhile(_data), sumRecursion(_data, 0), sumTheSimpleWay(_data));
