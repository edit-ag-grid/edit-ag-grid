const postcss = require('rollup-plugin-postcss');
module.exports = {
  rollup(config, options) {
    const _external = config.external;
    config.external = (id) => {
      /** 配置需要打包的依赖 */
      if (['lodash-es'].includes(id)) {
        return false;
      }
      else {
        return _external(id);
      }
      
    }
    config.plugins.push(
      postcss({
        plugins: [],
        inject: true,
        extract: !!options.writeMeta,
        // modules: true, // 使用css modules
        // namedExport: true, // 类名导出
        camelCase: true, // 支持驼峰
        // sass: true, // 是否使用sass
        less: true,
        // autoModules:true,
        // namedExports(name) {
        //   // Maybe you simply want to convert dash to underscore
        //   return name.replace(/-/g, '_')
        // }
      })
    );
    return config;
  },
};
