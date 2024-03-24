export function toCelcius(fahrenhit) {
  return ((fahrenhit - 32) * 5) / 9;
}

export function toFahrenhit(celcius) {
  return (celcius * 9) / 5 + 32;
}

export function convert(temperature, convertTo) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convertTo(input);
  const rounded = (output * 1000) / 1000;
  return rounded;
}
