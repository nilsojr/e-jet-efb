import { FSComponent, DisplayComponent, VNode, ComponentProps } from "@microsoft/msfs-sdk";

export interface InfoCardProps extends ComponentProps {
    labelRow1: string;
    dataRow1: string;
    placeHolderRow1: string;
    labelRow2: string;
    dataRow2: string;
    placeHolderRow2: string;
}

export class InfoCard extends DisplayComponent<InfoCardProps> {
    public render(): VNode {
        return (
            <div class="row p-2">
                <div class="col">
                    <div class="row">
                        <label class="text-sm">{this.props.labelRow1}</label>
                    </div>
                    <div class="row">
                        <input type="text" placeholder={this.props.placeHolderRow1}
                            class="form-control start-info-input" value={this.props.dataRow1}/>
                    </div>
                </div>
                <div class="col mx-2">
                    <div class="row">
                        <label>{this.props.labelRow2}</label>
                    </div>
                    <div class="row">
                        <input type="text" placeholder={this.props.placeHolderRow2}
                            class="form-control start-info-input" value={this.props.dataRow2}/>
                    </div>
                </div>
            </div>
        )
    }
}