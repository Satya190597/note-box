function filterByType(type, data) {
  return data.filter((element) => {
    return element.TYPE === type;
  });
}
function filterBySearch(searchText, data) {
  if (searchText === undefined || searchText === "" || searchText === null)
    return data;
  const regex = new RegExp(`\\b${searchText}\\b`,"i");
  return data.filter((element) => {
    debugger
    return (
      regex.test(element.TITLE) ||
      regex.test(element.TAG) ||
      regex.test(element.TOPIC) ||
      regex.test(element.DESCRIPTION)
    );
  });
}

function filterByTopic(topicName, data) {
  return data.filter((element) => {
    return element.TOPIC === topicName;
  });
}

function getTypeName(type, data) {
  for (var row of data) {
    if (row.TYPE === type) return row.TYPENAME;
  }
  return "Notes";
}

function filterCategories(data) {
  const result = data.map((element) => {
    return element.TYPE;
  });
  return [...new Set(result)];
}

// function getAllTags(data) {
//   const result = data.map((element) => {
//     return element.TAGS;
//   });
//   return [...new Set(result)];
// }

export {
  filterByType,
  filterByTopic,
  filterCategories,
  getTypeName,
  filterBySearch,
};
