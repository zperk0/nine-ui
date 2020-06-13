import Vue from 'vue'
import Component from 'vue-class-component'
import './index.scss';

const nTagProps = Vue.extend({
  props: {
    type: {
      type: String,
      default: 'normal'
    },
  }
})

@Component
export default class nTag extends nTagProps {
  render() {
    return (
     <div class="n-tag">
       <div class={this.type}>
        <span>tag</span>
      </div>
     </div>
    )
  }
}
