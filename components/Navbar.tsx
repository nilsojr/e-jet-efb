import { FSComponent, DisplayComponent, VNode, ComponentProps } from '@microsoft/msfs-sdk';
import { SettingsIcon, WifiIcon } from './Icons';

export interface NavbarProps extends ComponentProps {

}

export class Navbar extends DisplayComponent<NavbarProps> {
    public render(): VNode {
        return (
            <>
                <nav class="navbar navbar-expand navbar-light bg-light px-4">
                    <div class="mr-auto align-bottom px-4">
                        <div class="nav-item">
                            <label class="fw-bold fs-1 text-danger">FSS</label>
                        </div>
                        <div class="nav-item position-absolute top-50 start-50 translate-middle">
                            <button id="init-flight" class="btn btn-outline-danger fw-bold"
                                style="color: black; font-size: small; border-width: 2px;">INIT FLIGHT
                            </button>
                        </div>
                        <div class="nav-item position-absolute bottom-0 end-0 mb-4 px-4">
                            <div class="d-flex flex-row gap-3">
                                <div>
                                    <WifiIcon size='28' color='green' />
                                </div>
                                <div class="align-self-center">
                                    <label class="fs-5 px-4">13:02 UTC</label>
                                </div>
                                <div>
                                    <SettingsIcon size='28' color='currentColor' />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}