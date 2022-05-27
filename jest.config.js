module.exports = {
    testEnvironment: 'node',
  
    moduleDirectories: ["node_modules"],
    
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"
    },

    paths: {
      "@modules/*": ["controller/*","middlleware/*","models/*","node_modules/*","router/*","utils/*","db/*"],
  }
  };