import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'shadow-child-1',
  shadow: true,
  styles: `:host {
    display: block;
    border: 3px solid red;
  }`,
})
export class MyApp {

  @Prop() anArray = [];

  render() {
    return (
      <Host>
         Shadow Child 1.
        <div>
          <shadow-child-2>
            <slot />
          </shadow-child-2>
        </div>
      </Host>
    );
  }
}
