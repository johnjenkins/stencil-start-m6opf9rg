import { r as registerInstance, h, H as Host } from './index-DR2oDYMw.js';

const MyApp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '7031b28e8d9b87718d1cbdcad4d690e66a17fd00' }, h("div", { key: '26ea9c59ebd1d72d1dee0be97cf2dfaa34213b8e', class: "PARENT" }, h("slot", { key: 'afc75ef7878ab404bac496d19deccf87a41da1e2' }))));
    }
};
MyApp.style = ".PARENT {\n    display: block;\n    border: 3px solid blue;\n  }\n  cmp-child::part(button) {\n    background-color: blue;\n  }";

export { MyApp as cmp_parent_simple };
