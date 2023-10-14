import "./stylesheet/header.css";
function Header(props) {
  return (
    <>
      <nav>
        <div>
          <h1>{props.config.HEADER_TITLE}</h1>{" "}
        </div>
        <div>
          {props.config.HEADER_NAV.map((element, index) => (
            <a href={element.HREF} key={index}>
              {element.TITLE}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
export default Header;
