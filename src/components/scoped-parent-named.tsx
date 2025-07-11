import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'scoped-parent-named-slot',
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
          Scoped parent with named slot.
          <shadow-child-1>
            <slot name="things" />
          </shadow-child-1>         
        </div>
      </Host>
    );
  }
}
