module.exports = {
   cacheDirectory: true,
   cacheIdentifier: "v1",
   presets: [
      //"typescript",
      [
         "cx-env", {
         targets: {
            chrome: 50,
            ie: 11,
            ff: 30,
            edge: 12,
            safari: 9
         },
         modules: false,
         loose: true,
         useBuiltIns: "usage",
         cx: {
            imports: {
               useSrc: true
            }
         }
      }]
   ],
   "plugins": [
      // 'external-helpers',
      // 'transform-export-extensions',
      // 'transform-es2015-parameters',
   ]
};

