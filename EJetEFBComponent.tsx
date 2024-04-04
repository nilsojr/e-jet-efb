import './EJetEFB.css';
import { FSComponent, DisplayComponent, VNode, Subject } from '@microsoft/msfs-sdk';



export class EJetEFBComponent extends DisplayComponent<any> {
  textValue = Subject.create<string>('default');

  handleClick = () => {
    this.textValue.set('new value');
    console.log('clicked!');
  }

  public render(): VNode {
    return (
      <div class='bg-zinc-100'>
        <div>
          <button id='btn-test' class='e-jet-efb-button' onClick={this.handleClick}>Default Button</button>
        </div>
        <div class='text-xl'>
          {this.textValue}
        </div>
      </div>
    );
  }
}

