function filterByType(type, data) {
  return data.filter((element) => {
    if (element.TYPE === type) return element;
  });
}

function filterByTopic(topicName, data) {
  return data.filter((element) => {
    if (element.TOPIC === topicName) return element;
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

export { filterByType, filterByTopic, filterCategories, getTypeName };
