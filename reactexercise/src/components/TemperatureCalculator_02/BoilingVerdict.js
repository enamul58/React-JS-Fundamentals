export default function BoilingVerdict({ celcius = 0 }) {
  if (celcius >= 100) {
    return "Water would be boli";
  }
  return "Water would not boli";
}
