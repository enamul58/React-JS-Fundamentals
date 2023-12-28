function Random() {
  let randomNumber = Math.random() * 100;
  return (
    <h3 style={{ "background-color": "orange", padding: "10px" }}>
      genarate random number: {randomNumber}. rounded number:{" "}
      {Math.round(randomNumber)}
    </h3>
  );
}

export default Random;
