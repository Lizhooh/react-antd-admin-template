const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const path = require('path');

/* global __dirname */

module.exports = function override(config, env) {
    // 修改一些配置
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);

    // 加个别名路径
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.join(__dirname, './src'),
        '#': path.join(__dirname, './src/lib'),
    };

    config = rewireLess.withLoaderOptions({
        // 覆盖的变量
        modifyVars: { "@primary-color": "#f44" },
    })(config, env);

    return config;
};


