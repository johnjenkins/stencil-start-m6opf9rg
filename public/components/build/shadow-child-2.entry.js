import { r as registerInstance, h, H as Host } from './index-CWIGUySP.js';

const MyApp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.anArray = [];
    }
    render() {
        return (h(Host, { key: '28adfcc5a80b4a5f92a0daa04d74dc8e27d045dd' }, "Shadow Child 2.", h("slot", { key: '87d22878c5de6f57cc00ad669d167293f7ff5925' })));
    }
};
MyApp.style = ":host {\n    display: block;\n    border: 3px solid green;\n  }";

export { MyApp as shadow_child_2 };
