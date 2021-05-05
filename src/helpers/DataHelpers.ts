export const deleteUnfillObject = (data: { [key: string]: any }) => {
  let _data: { [key: string]: any } = {};
  Object.keys(data).forEach(key => {
    if (data[key]) {
      _data[key] = data[key];
    }
  });
  return _data;
};
