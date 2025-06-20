import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cmp-child',
  scoped: true,
  styles: `:host {
    display: block;
    border: 3px solid red;
  }`,
})
export class MyApp {

  render() {
    return <Host>
    <div class="CHILD">
      <slot />
    </div>
  </Host>
  }
}
