/// <reference types="@microsoft/msfs-types/Pages/VCockpit/Core/VCockpit" />

import { FSComponent } from "@microsoft/msfs-sdk";
import { EJetEFBComponent } from "./EJetEFBComponent";

class EJetEFB extends BaseInstrument {
    get templateID(): string {
      return 'EJetEFB';
    }

    public connectedCallback(): void {
      super.connectedCallback();
      
      FSComponent.render(<EJetEFBComponent />, document.getElementById('InstrumentContent'));

      // let btnTest = document.getElementById('btn-test');
      
      // btnTest!.addEventListener("click", function () { console.log('clicked')});
    }
  }
  
  registerInstrument('e-jet-efb', EJetEFB);