import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cmp-child',
  shadow: true,
  styles: `:host {
    display: block;
    border: 3px solid red;
  }`,
})
export class MyApp {
  render() {
    return <Host>
      <slot />
      <slot name="one" />
      <slot name="two" />
      <button part="button">Click me</button>
    </Host>;
  }
}
