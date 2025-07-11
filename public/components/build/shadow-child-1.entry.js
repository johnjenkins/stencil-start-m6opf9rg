import { r as registerInstance, h, H as Host } from './index-CWIGUySP.js';

const MyApp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.anArray = [];
    }
    render() {
        return (h(Host, { key: '3f76c5202600e02de1ac9c9da99ddc1727d885b2' }, "Shadow Child 1.", h("div", { key: '96959d6645179a5fa53ef4fa4199014bee602763' }, h("shadow-child-2", { key: 'db977da5f5a374eb9201842ab5a4d29d6be5aaad' }, h("slot", { key: '9abaa880585f54a6b930d165d0fd3771c7bdc779' })))));
    }
};
MyApp.style = ":host {\n    display: block;\n    border: 3px solid red;\n  }";

export { MyApp as shadow_child_1 };
