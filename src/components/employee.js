function Employee(props) {
  return (
    <>
      <img className="img-fluid" src={props.img} />
      {props.firstName} {props.lastName}
      {props.role !== "" ? props.role : "No Role!"}
      {props.department !== ""
        ? props.department
        : "General Staff, No Department"}
    </>
  );
}

export default Employee;
