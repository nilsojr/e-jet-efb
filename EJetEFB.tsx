/// <reference types="@microsoft/msfs-types/Pages/VCockpit/Core/VCockpit" />

import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import './node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import './EJetEFB.css';
import { FSComponent } from "@microsoft/msfs-sdk";
import { EJetEFBComponent } from "./EJetEFBComponent";


class EJetEFB extends BaseInstrument {

    get templateID(): string {
      return 'EJetEFB';
    }

    get isInteractive(): boolean {
      return true;
     }

    public connectedCallback(): void {
      super.connectedCallback();
      
      FSComponent.render(<EJetEFBComponent navBarAdded={false}/>, document.getElementById('InstrumentContent'));
    }
  }
  
  registerInstrument('e-jet-efb', EJetEFB);