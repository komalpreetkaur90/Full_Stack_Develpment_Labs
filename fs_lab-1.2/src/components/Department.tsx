import { departments } from "../data/departments";

const Departments = () => {
  return (
    <>
      {departments.map((dept, index) => (
        <section key={index}>
          <h2>{dept.department}</h2>
          <ul>
            {dept.employees.map((emp, i) => (
              <li key={i}>
                {emp.firstName} {emp.lastName}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
};

export default Departments;
