function Employee(props) {
  return (
    <>
      <p>
        {props.firstName} {props.lastName}
      </p>
      <p>
        {props.role !== "" ? props.role : <p className="norole"> No Role!</p>}
      </p>
      <p>
        {props.department !== "" ? (
          props.department
        ) : (
          <p className="nodepartment">General Staff, No Department</p>
        )}
      </p>
    </>
  );
}

export default Employee;
