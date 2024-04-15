import { FSComponent, DisplayComponent, VNode, ComponentProps } from "@microsoft/msfs-sdk"
import { InfoCard } from "./InfoCard";

export interface MainGridProps extends ComponentProps {
    callsign: string;
}

export class MainGrid extends DisplayComponent<MainGridProps> {
    public render(): VNode {

        return (
            <>
                <div class="container mt-3 mx-2">
                    <div class="row row-cols-2">
                        <div class="row row-cols-2">
                            <div class="col-md-6">
                                <div class="card mb-3 p-3">
                                    <label class="fs-6">FLIGHT NO</label>
                                    <label class="fw-bold">BA4455</label>
                                    <br />
                                    <label class="fs-6">CALL SIGN</label>
                                    <label class="fw-bold">{this.props.callsign}</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <InfoCard labelRow1="FROM" dataRow1="LCY" labelRow2="PAX" dataRow2="76" />
                            </div>
                        </div>
                        <div class="row row-cols-12">
                            <div class="cols-md-12">
                                <div class="card mb-3 p-3">
                                    <div class="row">
                                        <label class="fs-6">DATE</label>
                                        <label class="fw-bold">08 - 04 - 2024</label>

                                    </div>
                                    <br />
                                    <div class="row">
                                        <label class="fs-6">STD</label>
                                        <label class="fw-bold">12:40</label>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}