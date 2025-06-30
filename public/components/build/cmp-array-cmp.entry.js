import { r as registerInstance, h, H as Host } from './index-Boaou4Jc.js';

const MyApp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.anArray = [];
    }
    render() {
        return (h(Host, { key: '2821c6410d32829345e677cc99aa61bd130aac1d' }, h("div", { key: 'ea1e3f08c8a58b348fae71e24f620b1d2c06e8fa' }, "An array component:", h("ol", { key: 'ac48bb6abc22b89f79f151eb05fb76e1542b088c' }, this.anArray.map((item) => (h("li", null, item)))))));
    }
};
MyApp.style = ":host {\n    display: block;\n    border: 3px solid blue;\n  }";

export { MyApp as cmp_array_cmp };
