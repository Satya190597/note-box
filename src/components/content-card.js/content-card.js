import Tags from "../tags/tags";
import "./stylesheet/content-card-module.css";
function ContentCard(props) {
  function renderTags(tagsString) {
    const tags = tagsString.split(",");
    return tags.map((tag,index) => {
      return <Tags text={tag} key={index} />;
    });
  }
  return (
    <div className="content-card-container">
      <div className="content-card-header">
        <div>
          <span>
            <label>Title :</label> {props.data.TITLE}
          </span>
        </div>
        <div>
          <span>
            <label>Type :</label> {props.data.TYPE}
          </span>
        </div>
      </div>
      <div className="content-card-body">
        <span>
          <label>Resource :</label>{" "}
          <a href={props.data.REFERENCE}>{props.data.REFERENCE}</a>
        </span>
      </div>
      <div className="content-card-footer">
        <span>
          <label>Tags :</label> {renderTags(props.data.TAG)}
        </span>
      </div>
    </div>
  );
}

export default ContentCard;
