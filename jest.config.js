module.exports = {
    testEnvironment: 'node',
  
    moduleDirectories: ["node_modules"],
    
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"
    },

    paths: {
      "@modules/*": ["modules/*"],
      "@config/*": ["config/*"],
      "@shared/*": ["shared/*"]
  }
  };