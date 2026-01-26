import { useState } from 'react';
import AddEmployeeForm from './components/AddEmployeeForm';
import './App.css';

interface Employee {
  firstName: string;
  lastName: string;
  department: string;
}

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const departments = ['HR', 'IT', 'Marketing', 'Finance'];

  function handleAddEmployee(emp: Employee) {
    setEmployees([...employees, emp]);
  }

  return (
    <div className="app-container">
      <h1>Company Employees</h1>

      <div className="departments">
        {departments.map((dep) => (
          <div key={dep} className="department-card">
            <h2>{dep}</h2>
            <ul>
              {employees
                .filter((emp) => emp.department === dep)
                .map((emp, index) => (
                  <li key={index}>
                    {emp.firstName} {emp.lastName}
                  </li>
                ))}
              {employees.filter((emp) => emp.department === dep).length === 0 && (
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
}

export default App;
