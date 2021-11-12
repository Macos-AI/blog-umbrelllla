module.exports = {
    "plugins": [
        'autoprefixer',
       'tailwindcss',
        'postcss-import',
      "postcss-flexbugs-fixes",
      [
        "postcss-preset-env",
        {
          "autoprefixer": {
            "flexbox": "no-2009",
            "grid": "autoplace"
          },
          "stage": 3,
          "features": {
            "custom-properties": false
          }
        }
      ]
      
    ]
  }