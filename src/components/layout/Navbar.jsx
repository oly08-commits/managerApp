function Navbar({ Link }) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contato</Link>
      <Link to="/newProject">Novo Projeto</Link>
      <Link to="/about">Sobre</Link>
    </div>
  );
}

export default Navbar;
