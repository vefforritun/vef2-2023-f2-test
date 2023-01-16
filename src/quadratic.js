
/**
 * Calculates the roots of a quadratic equation.
 * 
 * @param {number} a quadratic coefficient
 * @param {number} b linear coefficient
 * @param {number} c constant coefficient
 * @returns {number[]} roots of the quadratic equation
 */
export function quadratic (a, b, c) {
  const d = b ** 2 - 4 * a * c;

  // Ef d < 0, tvinntölurætur
  // Ef d = 0, ein tvöföld rauntölu rót
  // Ef d > 0, tvær rauntölurætur

  // x = (-b ± √d) / 2a

  const i = (-b + Math.sqrt(d)) / (2 * a);
  const j = (-b - Math.sqrt(d)) / (2 * a);

  const ii = i === -0 ? 0 : i;
  const jj = j === -0 ? 0 : j;

  if (ii == jj) {
    return [ii]
  }

  return [ii, jj]
}
