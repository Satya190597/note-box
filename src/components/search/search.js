import styles from "./stylesheet/search.module.css";
function Search(props) {
  return (
    <div className={styles.searchbox}>
      <input
        placeholder="Search ..."
        value={props.searchText}
        onChange={(event) => props.setSearchText(event.target.value)}
      />
    </div>
  );
}

export default Search;
