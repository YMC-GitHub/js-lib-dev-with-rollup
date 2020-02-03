
/**
 * refer:[heichong.eslintrc文件配置.2017.03.24](https://www.jianshu.com/p/a4966ddf9b0c)
 */
module.exports = {
  // 环境定义了预定义的全局变量。
  "env": {
      //运行环境
      "browser": true,
      "node": true,
      "commonjs": true,
      "amd": true,
      "es6": true,
      "mocha": true
  },
  // JavaScript 语言选项
  "parserOptions": {
      // ECMAScript 版本
      "ecmaVersion": 6,
      "sourceType": "module", //设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
      // ECMAScript 特性: 想用或不用的特性
      "ecmaFeatures": {
          // 允许在全局作用域下使用 return 语句
          "globalReturn": true,
          // impliedStric
          "impliedStrict": true,
          // 启用 JSX
          "jsx": true,
          "modules": true
      }
  },
  "extends": [
      "eslint:recommended",
      'yemiancheng',
      'plugin:prettier/recommended'
  ]
  /*
  "rules": {
       "prettier/prettier": "error"
  }
  */
}
