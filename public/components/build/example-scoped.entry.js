import { r as registerInstance, h, H as Host } from './index-Bb3T4rNo.js';

const MyApp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h(Host, { key: 'b58ff69eec59eeb5419f0382827d163dee57d556' }, "I should be red");
    }
};
MyApp.style = ":host {\n    display: block;\n    border: 3px solid red;\n  }";

export { MyApp as example_scoped };
//# sourceMappingURL=example-scoped.entry.esm.js.map

//# sourceMappingURL=example-scoped.entry.js.map