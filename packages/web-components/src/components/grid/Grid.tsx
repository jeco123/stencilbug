import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-grid',
})
export class Grid {
  render() {
    return (
      <div class="grid">
        <slot />
      </div>
    );
  }
}
