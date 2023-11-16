import _ from 'lodash'
const log = console.log;

const getAsyncData = (): Promise<number[]> => new Promise((resolve) => {
  setTimeout(() => {
    resolve([1, 2, 3]);
  }, 1000);
});

const main = async () => {
  const data: number[] = await getAsyncData();

  return _.chain(data)
    .map((n) => n * 3)
    .filter((n) => n > 2)
    .sum()
    .value();
}

main().then(log)
