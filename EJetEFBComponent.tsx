import { FSComponent, DisplayComponent, VNode, Subject, ComponentProps } from '@microsoft/msfs-sdk';
import { Navbar } from './components/Navbar';
import { MainGrid } from './components/MainGrid';
import { StartPage } from './components/StartPage';
import { BottomNavbar } from './components/BottomNavbar';

const textValue = Subject.create<string>('default');

function DateInfo() {
  // const [currentDate, setCurrentDate] = useState<string>('');
  let currentDate = '';

  const updateDate = () => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, ' - ');
    currentDate = formattedDate;
  };

  updateDate(); // Initial call to set the date
  // const intervalId = setInterval(updateDate, 1000); // Update date every second

  // return () => clearInterval(intervalId);

  return (
    <div>
      <label caption='DATE' />
      <br />
      {/* <InfoText text={currentDate} /> */}
    </div>
  )
}

export interface EJetEFBComponentProps extends ComponentProps {
  navBarAdded: boolean;
}

export class EJetEFBComponent extends DisplayComponent<EJetEFBComponentProps> {

  public handleClick() {
    if (this.props.navBarAdded === false) {
      var callsign = (document.getElementById('input-name') as HTMLInputElement).value;

      console.log(callsign);

      FSComponent.render(<MainGrid callsign={callsign} />, document.getElementById('temp'));
      this.props.navBarAdded = true;
    }
  }

  public hide() {
    var mainGrid = document.getElementById('temp')!;

    mainGrid.innerHTML = "";

    this.props.navBarAdded = false;
  }

  public init() {
    document.getElementById('main-grid')!.innerHTML = "";
    FSComponent.render(<StartPage />, document.getElementById('main-grid'));
  }

  public render(): VNode {
    return (
      <>
        <div class="bg-dark-grey">
          <Navbar />
          <div id="main-grid">
          </div>
          <BottomNavbar />
        </div>
      </>
    );
  }

  public onAfterRender(node: VNode): void {
    this.init();

    document.getElementById("init-flight")?.addEventListener("click", this.init.bind(this));
    
    // let btnTest = document.getElementById('btn-test');
    // btnTest!.addEventListener("click", this.handleClick.bind(this));

    // document.getElementById('btn-test-2')?.addEventListener("click", this.hide.bind(this));
  }
}

