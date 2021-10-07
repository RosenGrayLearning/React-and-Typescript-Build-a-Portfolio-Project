import * as esbuild from 'esbuild-wasm';
import axios from 'axios';
import localforage from 'localforage';

//creates our database name
const fileCache = localforage.createInstance({
  name: 'fileCache',
});

export const fetchPlugin = (inputCode: string) => {
  return {
    name: 'fetch-plugin',
    setup(build: esbuild.PluginBuild) {
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        if (args.path === 'index.js') {
          return {
            loader: 'jsx',
            contents: inputCode,
          };
        }
        //check to see if we have already fetched this file
        //and if it is in the cashe
        const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(
          args.path
        );
        //if it is, return it immediately
        if (cachedResult) {
          return cachedResult;
        }
        const { data, request } = await axios.get(args.path);
        const fileType = args.path.match(/.css$/) ? 'css' : 'jsx';
        // const contents = fileType === 'css'
        const result: esbuild.OnLoadResult = {
          loader: 'jsx',
          contents: data,
          resolveDir: new URL('./', request.responseURL).pathname,
        };
        //store response in cache
        await fileCache.setItem(args.path, result);
        return result;
      });
    },
  };
};
