import { r as registerInstance, h, H as Host } from './index-Bb3T4rNo.js';

const MyApp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '1b7cba1b9d6e56ab522281ecb5e3b0ef64f7986c' }, h("div", { key: '709572cf0cf6992711e48ebd28349acb10521362' }, "I am a shadow component. Here is a `serializeShadowRoot` 'scoped'. It should be red:", h("example-scoped", { key: '6403de989e26626b1e600eaf289cc6fde425cda7' }))));
    }
};
MyApp.style = ":host {\n    display: block;\n    border: 3px solid blue;\n  }";

export { MyApp as example_shadow };
//# sourceMappingURL=example-shadow.entry.esm.js.map

//# sourceMappingURL=example-shadow.entry.js.map