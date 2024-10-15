const isObjValueChanged = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

export default isObjValueChanged;
