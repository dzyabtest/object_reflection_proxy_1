import getHealthStatus from '../basic';

test('Status: healthy', () => {
  const result = getHealthStatus({ name: 'Char', health: 95 });

  expect(result).toBe('healthy');
});

test('Status: wounded', () => {
  const result = getHealthStatus({ name: 'Char', health: 45 });

  expect(result).toBe('wounded');
});

test('Status: critical', () => {
  const result = getHealthStatus({ name: 'Char', health: 5 });

  expect(result).toBe('critical');
});
