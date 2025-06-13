import { r as registerInstance, h, H as Host } from './index-CHh0OtH-.js';

const MyApp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '6f52390e65194925fd94992bd7af66b18ddb276d' }, h("div", { key: 'd6a0ba0b0cf7e679e7b8bafe44872716a1da82cc' }, "I am a parent component. Here's my child:", h("cmp-child", { key: '815a9c14e480601a47f43496628ec3baedb9daa1' }, h("slot", { key: '1491a1f1c16de3b5c3fe133d0fe47f94aa7375b4' })))));
    }
};
MyApp.style = ":host {\n    display: block;\n    border: 3px solid blue;\n  }\n  cmp-child::part(button) {\n    background-color: blue;\n  }";

export { MyApp as cmp_parent };
