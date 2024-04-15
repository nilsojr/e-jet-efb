import { FSComponent, DisplayComponent, VNode } from "@microsoft/msfs-sdk";

export class StartPage extends DisplayComponent<any> {
    public render(): VNode {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div class="row mt-3 rounded-3 start-info" style="background-color: white; height: 100%;">
                            <div class="col-8">
                                <div class="container">

                                    <div class="row p-2">
                                        <div class="col">
                                            <div class="row">
                                                <label class="text-sm" for="FlightNO">FLIGHT NO</label>
                                            </div>
                                            <div class="row">
                                                <input id="FlightNO" type="text" placeholder="BA4455"
                                                    class="form-control start-info-input" />
                                            </div>
                                        </div>
                                        <div class="col mx-2">
                                            <div class="row">
                                                <label for="CallSign">CALL SIGN</label>
                                            </div>
                                            <div class="row">
                                                <input id="CallSign" type="text" placeholder="CFE7LM"
                                                    class="form-control start-info-input" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row p-2">
                                        <div class="col">
                                            <div class="row">
                                                <label for="From">FROM</label>
                                            </div>
                                            <div class="row">
                                                <input id="From" type="text" placeholder="EGLC"
                                                    class="form-control start-info-input" />
                                            </div>
                                        </div>
                                        <div class="col mx-2">
                                            <div class="row">
                                                <label for="To">TO</label>
                                            </div>
                                            <div class="row">
                                                <input id="To" type=" text" placeholder="EDDF"
                                                    class="form-control start-info-input" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row p-2">
                                        <div class="col">
                                            <div class="row">
                                                <label for="OffBlock">OFF BLOCK (UTC)</label>
                                            </div>
                                            <div class="row">
                                                <input id="OffBlock" type="text" placeholder="1125"
                                                    class="form-control start-info-input" />
                                            </div>
                                        </div>
                                        <div class="col mx-2">
                                            <div class="row">
                                                <label for="EnRoute">ENROUTE</label>
                                            </div>
                                            <div class="row">
                                                <input id="EnRoute" type="text" placeholder="01:45"
                                                    class="form-control start-info-input" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 d-flex flex-column">
                                <div class="row" style="text-align: right;">
                                    <span class="p-2">AIRPLANE ICON</span>
                                </div>
                                <div class="row  flex-grow-1 d-flex flex-column justify-content-between align-items-end p-3">
                                    <span></span>
                                    <button class="btn btn-outline-success rounded-4 fw-bold start-flight-button" style="max-width: 150px; max-height: 50px;">START FLIGHT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">

                        <div class="container mt-3 rounded-3" style="background-color: white; height: 29%;">
                            <div class="row p-2">

                                <div class="col">
                                    <div class="row">
                                        <label>Source</label>
                                    </div>
                                    <div class="row fw-bold">
                                        <label class="fs-5">SimBrief</label>
                                    </div>
                                </div>
                                <div class="col-2 d-grid gap-2">
                                    <div class="row align-items-center">
                                        <button class="btn btn-sm btn-outline-dark rounded-4 import-source-button">IMPORT</button>
                                    </div>
                                </div>
                                <div class="col align-self-center">
                                    <div class="d-flex ms-auto">
                                        <div class="ms-auto p-2">
                                            Source Icon
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="container mt-3 rounded-3" style="background-color: white; height: 29%;">
                            <div class="row p-2">
                                <div class="col">
                                    <div class="row">
                                        <label>Source</label>
                                    </div>
                                    <div class="row fw-bold">
                                        <label class="fs-5">Vatsim</label>
                                    </div>
                                </div>
                                <div class="col-2 d-grid gap-2">
                                    <div class="row align-items-center">
                                        <button class="btn btn-sm btn-outline-dark rounded-4 import-source-button">IMPORT</button>
                                    </div>
                                </div>
                                <div class="col align-self-center">
                                    <div class="d-flex ms-auto">
                                        <div class="ms-auto p-2">
                                            Source Icon
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container mt-3 rounded-3" style="background-color: white; height: 29%;">
                            <div class="row p-2">
                                <div class="col">
                                    <div class="row">
                                        <label>Source</label>
                                    </div>
                                    <div class="row fw-bold">
                                        <label class="fs-5">IVAO</label>
                                    </div>
                                </div>
                                <div class="col-2 d-grid gap-2">
                                    <div class="row align-items-center">
                                        <button class="btn btn-sm btn-outline-dark rounded-4 import-source-button">IMPORT</button>
                                    </div>
                                </div>
                                <div class="col align-self-center">
                                    <div class="d-flex ms-auto">
                                        <div class="ms-auto p-2">
                                            Source Icon
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