
export function runController(searchText, callback, callbackOnError) {
  console.log(searchText);
  callback(searchText=='you are a hero' ? 'you did it' : 'you are a hero');
};