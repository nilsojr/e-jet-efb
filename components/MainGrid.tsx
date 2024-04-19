import { FSComponent, DisplayComponent, VNode, ComponentProps } from "@microsoft/msfs-sdk"
import { InfoCard } from "./InfoCard";

export interface MainGridProps extends ComponentProps {
    callsign: string;
}

export class MainGrid extends DisplayComponent<MainGridProps> {
    public render(): VNode {

        return (
            <div class="container">
                <div class="row mt-3">
                    <div class="col-3 data-col">
                        <div class="row rounded-3" style="background-color: white; height: 100%;">
                            <div class="col-6">
                                <div class="row p-2">
                                    <div class="row">
                                        <label class="fs-6">FLIGHT NO</label>
                                    </div>
                                    <div class="row">
                                        <label class="fw-bold fs-5">BA4466</label>
                                    </div>
                                </div>
                                <div class="row p-2">
                                    <div class="row">
                                        <label class="fs-6">CALL SIGN</label>
                                    </div>
                                    <div class="row">
                                        <label class="fw-bold fs-5">CFE7LM</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 data-col">
                        <div class="row rounded-3" style="background-color: white; height: 100%;">
                            <div class="col-6">
                                <div class="container">
                                    <div class="row p-2">
                                        <div class="row">
                                            <label class="fs-6">FROM</label>
                                        </div>
                                        <div class="row">
                                            <label class="fw-bold fs-5">LCY</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row p-2">
                                        <div class="row">
                                            <label class="fs-6">PAX</label>
                                        </div>
                                        <div class="row">
                                            <label class="fw-bold fs-5">76</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6" style="width: 49%;">
                        <div class="row rounded-3" style="background-color: white; height: 100%;">
                            <div class="col-12">
                                <div class="container">
                                    <div class="row p-2">
                                        <div class="row">
                                            <label class="fs-6">DATE</label>
                                        </div>
                                        <div class="row">
                                            <label class="fw-bold fs-5">18 - 09 -2024</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row p-2">
                                        <div class="col-3">
                                            <div class="row">
                                                ABC
                                            </div>
                                            <div class="row">
                                                VALUE
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="row">
                                                DEF
                                            </div>
                                            <div class="row">
                                                VALUE2
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="row">
                                                GHI
                                            </div>
                                            <div class="row">
                                                VALUE
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}