import "./stylesheet/content-card-extra-module.css";
function ContentCardExtra(props) {
  return (
    <div className="card-container-extra">
      <div>
        <span>
          <span>{props.content}</span>
        </span>
      </div>
    </div>
  );
}

export default ContentCardExtra;
