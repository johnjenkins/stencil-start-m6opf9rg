import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cmp-parent-simple',
  shadow: true,
  styles: `.PARENT {
    display: block;
    border: 3px solid blue;
  }
  cmp-child::part(button) {
    background-color: blue;
  }`,
})
export class MyApp {
  render() {
    return (
      <Host>
        <div class="PARENT">
          <slot />
        </div>
      </Host>
    );
  }
}
