function Employee(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <h3>
        {props.role !== "" ? props.role : <p className="norole"> No Role!</p>}
      </h3>
    </>
  );
}

export default Employee;
