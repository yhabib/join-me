export default function joinMe({list, keyword, separator}) {
  keyword = keyword || ' and ';
  separator = separator || ', ';
  if (!Array.isArray(list)) throw new Error('First argument has to be an array');
  var str = list.join(separator);
  
  return list.length === 1
    ? str
    : `${str.slice(0, str.lastIndexOf(separator))}${keyword}${list[list.length - 1]}`;
};