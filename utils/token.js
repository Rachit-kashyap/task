function generateToken() {
    return Math.random().toString(36).substr(2) + Date.now().toString(36);
  }
  
  module.exports = generateToken;
  