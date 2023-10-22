import { useEffect, useState } from "react";
import Header from "./components/header/header";
import { getAllData } from "./service/fetch-service";
import HeaderConfig from "./configs/header-config";
import Card from "./components/card/card";
import {
  filterByType,
  filterCategories,
  getTypeName,
  filterBySearch
} from "./util/filter-props-data";
import PageTitle from "./components/page-title/page-title";
import Loading from "./components/loading/loading";
import Search from "./components/search/search";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getAllData().then((response) => {
      setData(response);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className="App">
          <Header
            config={HeaderConfig}
            elements={[{ href: "www.google.com", text: "Home" }]}
            title="This is Great"
          />
          <PageTitle />
          <Search searchText={searchText} setSearchText={setSearchText} />
          <div>
            {filterCategories(data).map((type, index) => {
              return (
                <Card
                  header={{ title: getTypeName(type, data) }}
                  data={filterBySearch(searchText, filterByType(type, data))}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
