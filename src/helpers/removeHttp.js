const removeHttp = url => {
  return url.replace(/(^\w+:|^)\/\//, '');
};

export default removeHttp;
