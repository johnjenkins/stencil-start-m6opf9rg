import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cmp-parent',
  shadow: true,
  styles: `:host {
    display: block;
    border: 3px solid blue;
  }`,
})
export class MyApp {
  render() {
    return (
      <Host>
        <div>
          I am a parent component. Here's my child:
          <cmp-child>
            <slot />
          </cmp-child>
        </div>
      </Host>
    );
  }
}
