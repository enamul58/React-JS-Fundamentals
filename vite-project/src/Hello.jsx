function Hello() {
  let x = "limon";
  let fullName = () => {
    return "Enamul Limon";
  };

  return (
    <h3>
      Try to learn react js fundamentals {x} {fullName()}.
    </h3>
  );
}

export default Hello;
