function createLib (execlib) {
  return {
    storagedescriptor: require('./storagedescriptor'),
    visiblefields: {
      user: require('./visiblefields/user')
    }
  };
}
module.exports = createLib;
