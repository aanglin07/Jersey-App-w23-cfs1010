import NavList from "./NavList";

const RespMenu = ({ menuRef, menuOpen }) => (
    <div className="resp_menu" ref={menuRef}>
      <div className="resp_nav">
        <NavList menuOpen={menuOpen} />
      </div>
    </div>
  );

  export default RespMenu