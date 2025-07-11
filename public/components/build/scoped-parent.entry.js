import { r as registerInstance, h, H as Host } from './index-CWIGUySP.js';

const MyApp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.anArray = [];
    }
    render() {
        return (h(Host, { key: '2821c6410d32829345e677cc99aa61bd130aac1d' }, h("div", { key: 'ea1e3f08c8a58b348fae71e24f620b1d2c06e8fa' }, "Scoped parent.", h("shadow-child-1", { key: 'ed6232a23e64fb01b206908d221ccd9f50b36a88' }, h("slot", { key: '64e63dc4f1bc56cb2a5e5716d4833c767b78293c' })))));
    }
};
MyApp.style = ".sc-scoped-parent-h {\n    display: block;\n    border: 3px solid pink;\n  }";

export { MyApp as scoped_parent };
