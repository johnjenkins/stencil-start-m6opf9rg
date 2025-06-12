import { r as registerInstance, h, H as Host } from './index-g4k2lc5z.js';

const MyApp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'c2fc95d2756f35c7f41f62bed1f760b0fedef04d' }, h("div", { key: 'ee95589c6e8f73cb8068bde314ccb00d2a5c0bb6' }, "I am a parent component. Here's my child:", h("cmp-child", { key: '2fac43ab579af35ef6177ee6f172cf1b0ce151b2' }, h("slot", { key: 'c904163fa2631069f485eac64bf92af91e7eb7bb' })))));
    }
};
MyApp.style = ":host {\n    display: block;\n    border: 3px solid blue;\n  }";

export { MyApp as cmp_parent };
