import { Component } from 'react';
import  ReactDOM  from 'react-dom';

export default class PortalExample extends Component {
  render() {

    return ReactDOM.createPortal(<div><h5>This text is out side of the parent component that is App which is inside root element. It is render from a different component called new-root
    . To see the difference please check DOM or <code>right click and then inspect</code></h5>
    <p><code>Portals are generally used for render the component outside of the root component.</code> </p>
    </div>,
    document.getElementById('new-root'))
  }
}
