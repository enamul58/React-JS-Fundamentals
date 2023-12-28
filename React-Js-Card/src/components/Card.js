const dateName = new Date().getDate();
const monthName = new Date().getMonth();
const yearName = new Date().getFullYear();

function Card(props) {
  const { toDoTitle, cardDesc } = props;
  return (
    <div className="card">
      <h3 className="cardTitle">{toDoTitle}</h3>
      <p className="cardDesc">{cardDesc}</p>
      <p className="cardFooter">
        {dateName + "-" + monthName + "-" + yearName}
      </p>
    </div>
  );
}

export default Card;
