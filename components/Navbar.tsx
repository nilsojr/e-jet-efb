import { FSComponent, DisplayComponent, VNode, ComponentProps } from '@microsoft/msfs-sdk';

export interface NavbarProps extends ComponentProps {

}

export class Navbar extends DisplayComponent<NavbarProps> {
    public render(): VNode {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
                    <div class="navbar-nav mr-auto justify-content-between">
                        <div class="nav-item">
                            <label class="fw-bold fs-3 text-danger">FSS</label>
                        </div>
                        <div class="nav-item dropdown">
                            <button class="btn btn-primary">CFE7LM</button>
                        </div>
                        <div class="nav-item">
                            <div class="d-flex flex-row gap-3">
                                <div>
                                    <h2>
                                        <i class="bi bi-wifi text-success"></i>
                                    </h2>
                                </div>
                                <div class="align-self-center">
                                    <label class="fw-bold">13:00 UTC</label>
                                </div>
                                <div>
                                    <h2>
                                        <i class="bi bi-sliders2"></i>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}