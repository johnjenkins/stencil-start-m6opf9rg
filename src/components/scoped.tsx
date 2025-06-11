import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'example-scoped',
  shadow: true,
  styles: `:host {
    display: block;
    border: 3px solid red;
  }`,
})
export class MyApp {
  render() {
    return <Host>I should be red</Host>;
  }
}
