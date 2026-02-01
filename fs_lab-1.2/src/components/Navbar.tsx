import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '10px', background: '#eee' }}>
    <Link to="/employees" style={{ marginRight: '15px' }}>Employees</Link>
    <Link to="/organization">Organization</Link>
  </nav>
);

export default Navbar;
