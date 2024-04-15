import { FSComponent, DisplayComponent, ComponentProps, VNode } from "@microsoft/msfs-sdk";

export interface DataSourceProps extends ComponentProps {

}

export class DataSource extends DisplayComponent<DataSourceProps> {
    public render(): VNode {
        return (
            <div>
                
            </div>
        )
    }
} 