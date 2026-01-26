type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
};

type Props = {
  employees: Employee[];
};

function Departments({ employees }: Props) {
  // Group by department
  const groups: { [key: string]: Employee[] } = {};
  
  employees.forEach(emp => {
    if (!groups[emp.department]) {
      groups[emp.department] = [];
    }
    groups[emp.department].push(emp);
  });

  return (
    <div>
      {Object.keys(groups).map(dept => (
        <section key={dept} style={{ marginBottom: "30px" }}>
          <h2 style={{ 
            color: "#333", 
            borderBottom: "2px solid #007bff",
            paddingBottom: "5px"
          }}>
            {dept}
          </h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {groups[dept].map(emp => (
              <li key={emp.id} style={{ 
                padding: "8px 0", 
                borderBottom: "1px solid #eee" 
              }}>
                {emp.firstName} {emp.lastName}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default Departments;