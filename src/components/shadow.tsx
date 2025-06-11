import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'example-shadow',
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
          I am a shadow component. Here is a `serializeShadowRoot` 'scoped'. It
          should be red:
          <example-scoped />
        </div>
      </Host>
    );
  }
}
