const wrapper = {
  offscreen: {
    opacity: 0,
    y: 25,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      type: 'spring',
    },
  },
};

export default wrapper;
