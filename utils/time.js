const currentTime = () => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
};

module.exports = currentTime;
