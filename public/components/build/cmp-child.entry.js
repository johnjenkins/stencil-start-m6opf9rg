import { r as registerInstance, h, H as Host } from './index-DR2oDYMw.js';

const MyApp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h(Host, { key: '8595afc7f12ed6463a25f797bc6091c77c8424f8' }, h("div", { key: '42e13fde4f25680213a97867f5c1d7af668e2af1', class: "CHILD" }, h("slot", { key: '92398c7d128f9b303cf29c17cc8c94722fa422dc' })));
    }
};
MyApp.style = ".sc-cmp-child-h {\n    display: block;\n    border: 3px solid red;\n  }";

export { MyApp as cmp_child };
