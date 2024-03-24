export default function BoilingVerdict({ celsius = 0 }) {
  if (celsius >= 100) {
    return <p>water would be boil</p>;
  }
  return <p>water would not be boil</p>;
}
