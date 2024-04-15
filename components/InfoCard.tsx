import { FSComponent, DisplayComponent, VNode, ComponentProps } from "@microsoft/msfs-sdk";

export interface InfoCardProps extends ComponentProps {
    labelRow1: string;
    dataRow1: string;
    labelRow2: string;
    dataRow2: string;
}

export class InfoCard extends DisplayComponent<InfoCardProps> {
    public render(): VNode {
        return (
            <div class="row p-2">
                <div class="col">
                    <div class="row">
                        <label class="text-sm" for="FlightNO">FLIGHT NO</label>
                    </div>
                    <div class="row">
                        <input id="FlightNO" type="text" placeholder="BA4455"
                            class="form-control start-info-input"/>
                    </div>
                </div>
                <div class="col mx-2">
                    <div class="row">
                        <label for="CallSign">CALL SIGN</label>
                    </div>
                    <div class="row">
                        <input id="CallSign" type="text" placeholder="CFE7LM"
                            class="form-control start-info-input"/>
                    </div>
                </div>
            </div>
        )
    }
}