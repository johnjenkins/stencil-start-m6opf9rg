import { r as registerInstance, h, H as Host } from './index-Dk06zHIl.js';

const MyApp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'e1440b4e92606933923c365d86118ea98fc9766b' }, h("div", { key: '946c42b34b9d16b3a087f4cf3640e0d8ceb67309' }, h("cmp-child", { key: 'cb9e3ae31101f7e69c2dd7254cc88f13b828cdaf' }, h("slot", { key: '51991654071d25cca59181bd1f1a8b6fbab010d9', name: "things" }), h("div", { key: 'ba3ddfb30eec98bf1594b55d946f45b3f9983ded', class: "AFTER" }, "after")), h("div", { key: 'd37929003735bdd9798f7df463d74e88da8fd85f' }, h("slot", { key: '6ed4a9da2ee3250b1614b92b60d581d1b46ab6cf' })))));
    }
};
MyApp.style = ":host {\n    display: block;\n    border: 3px solid blue;\n  }\n  cmp-child::part(button) {\n    background-color: blue;\n  }";

export { MyApp as cmp_parent };
