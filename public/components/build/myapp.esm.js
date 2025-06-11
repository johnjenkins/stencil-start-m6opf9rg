import { p as promiseResolve, a as H, g as globalScripts, b as bootstrapLazy } from './index-Bb3T4rNo.js';
export { s as setNonce } from './index-Bb3T4rNo.js';

/*
 Stencil Client Patch Browser v4.33.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  {
    patchCloneNodeFix(H.prototype);
  }
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["example-scoped",[[1,"example-scoped"]]],["example-shadow",[[1,"example-shadow"]]]], options);
});
//# sourceMappingURL=myapp.esm.js.map

//# sourceMappingURL=myapp.esm.js.map