module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@constants': './src/constants',
          '@type': './src/types',
          '@stores': './src/stores',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@api': './src/api',
          '@utils': './src/utils',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
