import { useState } from "react";

interface AddEmployeeFormProps {
  departments: string[];
  onAddEmployee: (emp: {
    firstName: string;
    lastName: string;
    department: string;
  }) => void;
}

const AddEmployeeForm = ({ departments, onAddEmployee }: AddEmployeeFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState(departments[0]);
  const [error, setError] = useState(""); // string only

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setError("");

    if (firstName.trim().length < 3) {
      setError("First Name must be at least 3 characters.");
      return;
    }

    if (!departments.includes(department)) {
      setError("Please select a valid department.");
      return;
    }

    onAddEmployee({ firstName, lastName, department });

    // Clear form
    setFirstName("");
    setLastName("");
    setDepartment(departments[0]);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>

      <div>
        <label>Last Name:</label>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>

      <div>
        <label>Department:</label>
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          {departments.map((dep) => (
            <option key={dep} value={dep}>
              {dep}
            </option>
          ))}
        </select>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployeeForm;
