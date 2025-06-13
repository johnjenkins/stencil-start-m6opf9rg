import { r as registerInstance, h, H as Host } from './index-CHh0OtH-.js';

const MyApp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h(Host, { key: 'af55acc173c0a5625cb1e3eed79f760e791b5865' }, h("slot", { key: '61ab29fb85e74ff93b823299be58ddf128b98c6a' }), h("slot", { key: '7aed4b1b6830222713367ff8a578a93baaeec1c3', name: "one" }), h("slot", { key: '6bc213a94331472009648d7f943fce4ff7837b11', name: "two" }), h("button", { key: '6c2d5261caf3856d23975b360dbb5e7d2655aff4', part: "button" }, "Click me"));
    }
};
MyApp.style = ":host {\n    display: block;\n    border: 3px solid red;\n  }";

export { MyApp as cmp_child };
