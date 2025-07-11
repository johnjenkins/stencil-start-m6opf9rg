import { r as registerInstance, h, H as Host } from './index-VDwYsFSf.js';

const MyApp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.anArray = [];
    }
    render() {
        return (h(Host, { key: '3f76c5202600e02de1ac9c9da99ddc1727d885b2' }, h("div", { key: '52bef3e99b46d7179bd881406439a7ead7b7bf5e' }, "Scoped parent.", h("shadow-child-1", { key: 'db977da5f5a374eb9201842ab5a4d29d6be5aaad' }, h("slot", { key: '9abaa880585f54a6b930d165d0fd3771c7bdc779' })))));
    }
};
MyApp.style = ".sc-scoped-parent-h {\n    display: block;\n    border: 3px solid pink;\n  }";

export { MyApp as scoped_parent };
