function lucky(propability = 50) {
    if (propability <= 0) {
        return false;
    }

    if (propability >= 100) {
        return true;
    }

    return Math.random() < (propability / 100)
}
  
  module.exports = lucky;