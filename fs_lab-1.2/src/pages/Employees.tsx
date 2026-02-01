import { useState } from 'react';
import AddEmployeeForm from '../components/AddEmployeeForm';

interface Employee {
  firstName: string;
  lastName: string;
  department: string;
}

const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const departments = ['HR', 'IT', 'Marketing', 'Finance'];

  const handleAddEmployee = (emp: Employee) => {
    setEmployees([...employees, emp]);
  };

  return (
    <div>
      <h2>Employees Page</h2>

      <div className="departments">
        {departments.map((dep) => (
          <div key={dep} className="department-card">
            <h3>{dep}</h3>
            <ul>
              {employees.filter(emp => emp.department === dep).map((emp, i) => (
                <li key={i}>{emp.firstName} {emp.lastName}</li>
              ))}
              {employees.filter(emp => emp.department === dep).length === 0 && (
                <li style={{ color: '#aaa', fontStyle: 'italic' }}>No employees yet</li>
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="form-card">
        <AddEmployeeForm
          departments={departments}
          onAddEmployee={handleAddEmployee}
        />
      </div>
    </div>
  );
};

export default Employees;
