export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
}

export interface Department {
  department: string;
  employees: Employee[];
}

// interface for Leadership/Management
export interface Role {
  firstName: string;
  lastName: string;
  role: string;
}