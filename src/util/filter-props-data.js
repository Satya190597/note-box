function filterByType(type, data) {
  return data.filter((element) => {
    return element.TYPE === type
  });
}

function filterByTopic(topicName, data) {
  return data.filter((element) => {
    return element.TOPIC === topicName
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
