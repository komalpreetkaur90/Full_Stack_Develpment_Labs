import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <>
    <Navbar />
    <main style={{ padding: '20px' }}>
      <Outlet />
    </main>
    <footer style={{ textAlign: 'center', marginTop: '40px' }}>
      © Company
    </footer>
  </>
);

export default Layout;
