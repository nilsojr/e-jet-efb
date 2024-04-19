import { FSComponent, ComponentProps, DisplayComponent, VNode } from "@microsoft/msfs-sdk";

export interface NavSourceProps extends ComponentProps {
    sourceName: string;
    sourceIcon: string;
}

export class NavSource extends DisplayComponent<NavSourceProps> {
    public render(): VNode {
        return (
            <div class="container mt-3 rounded-3" style="background-color: white; height: 29%;">
                <div class="row p-2">

                    <div class="col">
                        <div class="row">
                            <label>Source</label>
                        </div>
                        <div class="row fw-bold">
                            <label class="fs-5">{this.props.sourceName}</label>
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
                                {this.props.sourceIcon}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}