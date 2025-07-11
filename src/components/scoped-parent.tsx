import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'scoped-parent',
  scoped: true,
  styles: `:host {
    display: block;
    border: 3px solid pink;
  }`,
})
export class MyApp {

  @Prop() anArray = [];

  render() {
    return (
      <Host>
        <div>
          Scoped parent.
          <shadow-child-1>
            <slot />
          </shadow-child-1>         
        </div>
      </Host>
    );
  }
}
