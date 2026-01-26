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