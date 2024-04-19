import { FSComponent, DisplayComponent, VNode } from "@microsoft/msfs-sdk";
import { BriefingIcon, ChartsIcon, InFlightIcon, PostFlightIcon, PreFlightIcon, SummaryIcon } from "./Icons";

export class BottomNavbar extends DisplayComponent<any> {
    public render(): VNode {
        return (
            <nav class="navbar fixed-bottom navbar-light bg-light custom-navbar">
                <div class="container-fluid px-5">
                    <div class="d-flex justify-content-between w-100">
                        <div class="navbar-btn">
                            <button class="btn btn-outline-dark">
                                <SummaryIcon size="32" color="currentColor" />
                            </button>
                            <span>SUMMARY</span>
                        </div>
                        <div class="navbar-btn">
                            <button class="btn btn-outline-dark">
                                <BriefingIcon size="32" color="currentColor" />
                            </button>
                            <span>BRIEFING</span>
                        </div>
                        <div class="navbar-btn">
                            <button class="btn btn-outline-dark">
                                <PreFlightIcon size="32" color="currentColor" />
                            </button>
                            <span>PRE-FLIGHT</span>
                        </div>
                        <div class="navbar-btn">
                            <button class="btn btn-outline-dark">
                                <InFlightIcon size="32" color="currentColor" />
                            </button>
                            <span>IN-FLIGHT</span>
                        </div>
                        <div class="navbar-btn">
                            <button class="btn btn-outline-dark">
                                <PostFlightIcon size="32" color="currentColor" />
                            </button>
                            <span>POST-FLIGHT</span>
                        </div>
                        <div class="navbar-btn">
                            <button class="btn btn-outline-dark">
                                <ChartsIcon size="32" color="currentColor" />
                            </button>
                            <span>CHARTS</span>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}