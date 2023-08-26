const HamburgerMenu = ({ menuOpen, setMenuOpen }) => (
    <div className="navMenu" onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );

  export default HamburgerMenu