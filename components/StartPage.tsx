import { FSComponent, DisplayComponent, VNode, ComponentProps } from "@microsoft/msfs-sdk";
import { InfoCard } from "./InfoCard";
import { NavSource } from "./NavSource";
import { MainGrid } from "./MainGrid";

export interface StartPageProps extends ComponentProps {

}

export class StartPage extends DisplayComponent<StartPageProps> {
    public render(): VNode {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div class="row mt-3 rounded-3 start-info" style="background-color: white; height: 100%;">
                            <div class="col-8">
                                <div class="container">
                                    <InfoCard labelRow1="FLIGHT NO" dataRow1="" placeHolderRow1="BA4455" 
                                        labelRow2="CALL SIGN" dataRow2="" placeHolderRow2="CFE7LM" />
                                    <InfoCard labelRow1="FROM" dataRow1="" placeHolderRow1="EGLC"
                                        labelRow2="TO" dataRow2="" placeHolderRow2="EDDF" />
                                    <InfoCard labelRow1="OFF BLOCK (UTC)" dataRow1="" placeHolderRow1="1125"
                                        labelRow2="ENROUTE" dataRow2="" placeHolderRow2="01:55" />
                                </div>
                            </div>
                            <div class="col-4 d-flex flex-column">
                                <div class="row" style="text-align: right;">
                                    <span class="p-2">AIRPLANE ICON</span>
                                </div>
                                <div class="row  flex-grow-1 d-flex flex-column justify-content-between align-items-end p-3">
                                    <span></span>
                                    <button id="start-flight" class="btn btn-outline-success rounded-4 fw-bold start-flight-button" 
                                        style="max-width: 150px; max-height: 50px;">START FLIGHT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <NavSource sourceName="Simbrief" sourceIcon="SIMBRIEF" />
                        <NavSource sourceName="Vatsim" sourceIcon="VATSIM" />
                        <NavSource sourceName="IVAO" sourceIcon="IVAO" />
                    </div>
                </div>
            </div>
        )
    }

    public startFlight() {
        if (document.getElementById('main-grid') != undefined) {
            document.getElementById('main-grid')!.innerHTML = "";
            FSComponent.render(<MainGrid callsign='nilso' />, document.getElementById('main-grid'));
        }
      }

    onAfterRender(node: VNode): void {
        document.getElementById('start-flight')?.addEventListener("click", this.startFlight.bind(this));
    }
}