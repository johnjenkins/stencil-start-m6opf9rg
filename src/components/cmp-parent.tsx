import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'cmp-array-cmp',
  shadow: true,
  styles: `:host {
    display: block;
    border: 3px solid blue;
  }`,
})
export class MyApp {

  @Prop() anArray = [];

  render() {
    return (
      <Host>
        <div>
          An array component: 
         <ol>
          {this.anArray.map((item) => (
            <li>{item}</li>
          ))}
         </ol>
        </div>
      </Host>
    );
  }
}
