function lucky(probability = 50) {
    if (probability <= 0) {
        return false;
    }

    if (probability >= 100) {
        return true;
    }

    return Math.random() < (probability / 100)
}
  
module.exports = lucky