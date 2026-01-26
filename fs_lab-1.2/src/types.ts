export interface Employee {
  firstName: string;
  lastName?: string;
}

export interface Department {
  department: string;
  employees: Employee[];
}
