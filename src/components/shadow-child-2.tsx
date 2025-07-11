import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'shadow-child-2',
  shadow: true,
  styles: `:host {
    display: block;
    border: 3px solid green;
  }`,
})
export class MyApp {

  @Prop() anArray = [];

  render() {
    return (
      <Host>
        Shadow Child 2.
        <slot />
      </Host>
    );
  }
}
