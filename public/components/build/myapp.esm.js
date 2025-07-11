import { p as promiseResolve, a as H, b as bootstrapLazy } from './index-CdTe7xfB.js';
export { s as setNonce } from './index-CdTe7xfB.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.35.3 | MIT Licensed | https://stenciljs.com
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
  return bootstrapLazy([["shadow-child-1_2",[[1,"shadow-child-1",{"anArray":[16,"an-array"]}],[1,"shadow-child-2",{"anArray":[16,"an-array"]}]]],["scoped-parent",[[6,"scoped-parent",{"anArray":[16,"an-array"]}]]],["scoped-parent-named-slot",[[6,"scoped-parent-named-slot",{"anArray":[16,"an-array"]}]]]], options);
});
