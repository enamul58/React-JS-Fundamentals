const users = [
  {
    fullName: "Anisul Islam",
    age: 32,
    phones: [{ home: "0101010" }, { office: "01020202" }],
  },
  {
    fullName: "Md.Enamul Haque Sarker",
    age: 30,
    phones: [{ home: "01971093618" }, { office: "01627355057" }],
  },
];

function App() {
  return (
    <>
      <h1>Nested Lists</h1>
      {users.map((user, index) => (
        <article key={index}>
          <h3>FullName: {user.fullName}</h3>
          <p>Age: {user.age}</p>
          {user.phones.map((phone, index) => (
            <div key={index}>
              <p>{phone.home}</p>
              <p>{phone.office}</p>
            </div>
          ))}
        </article>
      ))}
    </>
  );
}

export default App;
