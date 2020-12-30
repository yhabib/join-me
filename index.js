function joinMe({list, keyword = ' and ', separator = ', '}) {
  if (!Array.isArray(list)) throw new Error('First argument has to be an array');
  const str = list.join(separator);
  
  return list.length === 1
    ? str
    : `${str.slice(0, str.lastIndexOf(separator))}${keyword}${list[list.length - 1]}`;
};

module.exports = joinMe;