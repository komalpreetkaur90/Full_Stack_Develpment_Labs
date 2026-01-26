const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Author: Komalpreet Kaur</p>
      <span>Copyright Pixell River Financial {year}</span>
    </footer>
  );
};

export default Footer;