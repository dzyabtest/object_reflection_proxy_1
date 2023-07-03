import showStats from '../basic';

const obj = {
  defence: 40,
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
};

test('Stat sorting', () => {
  const result = showStats(obj, ['name', 'level']);
  const testRes = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(result).toEqual(testRes);
});

test('One stat key', () => {
  const result = showStats(obj, ['name']);
  const testRes = [
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
  ];

  expect(result).toEqual(testRes);
});

test('No stat key', () => {
  const result = showStats(obj, []);
  const testRes = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];

  expect(result).toEqual(testRes);
});

test('Wrong stat key', () => {
  const result = showStats(obj, ['test']);
  const testRes = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];

  expect(result).toEqual(testRes);
});
