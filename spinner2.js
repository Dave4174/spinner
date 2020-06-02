let spins = ['|','/','-','\\'];
let index = 0;

for (let delay = 100; delay <= 1700; delay += 200) {
  let index2 = index;
  let newLine = '';

  if (delay === 1700) {
    newLine = '\n';
  }

  setTimeout(() => {
    process.stdout.write('\r' + spins[index2] + '   ' + newLine);
  }, delay);

  index = (index + 1) % (spins.length);
}