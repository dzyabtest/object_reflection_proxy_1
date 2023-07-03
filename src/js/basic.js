export default function getHealthStatus(char) {
  const { health } = char;
  let status = null;

  if (health > 50) {
    status = 'healthy';
  } else
  if (health > 15) {
    status = 'wounded';
  } else {
    status = 'critical';
  }

  return status;
}
