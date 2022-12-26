module.exports = (api) => {
  const plugins = []

  if (api.env('development')) {
    plugins.push('react-refresh/babel')
  }

  return {
    presets: [
      [
        '@babel/preset-env', 
        { 
          debug: false
        }
      ],
      [
        '@babel/preset-react', 
        { // Enable development transform of React with new automatic runtime
          development: api.env('development'), 
          runtime: 'automatic' 
        }
      ],
    ],
    plugins,
  };
};
