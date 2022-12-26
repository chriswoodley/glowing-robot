module.exports = (api) => {
  const plugins = []

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
