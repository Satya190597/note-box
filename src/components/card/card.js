import ContentCard from "../content-card.js/content-card";
import "./stylesheet/card-module.css";

function Card(props) {
  return (
    <div className="card-container">
      <div>
        <h2>{props.header.title}</h2>
      </div>
      <div className="card-container-body">
        {props.data.map((element, index) => {
          return <ContentCard data={element} key={index} />;
        })}
      </div>
      <div className="card-container-footer">
        {/* <label className="scroll-label">Scroll</label> */}
      </div>
    </div>
  );
}

export default Card;
