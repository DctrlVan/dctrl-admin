module.exports = {
  apps: [
    {
      name: 'dctrl-admin',
      script: 'server/app.js',
      exec_interpreter: './node_modules/.bin/babel-node',
      exec_mode: 'fork',
      watch: ['*.js'],
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },
  ]
}
