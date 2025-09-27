import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { StrafficComponent } from "./dashboard/straffic/straffic.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";
import { LifecycleComponent } from "./lifecycle/lifecycle.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServerStatusComponent, StrafficComponent, TicketsComponent, DashboardItemComponent, LifecycleComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  // dummyTrafficData = [
  //   {
  //     id: 'd1',
  //     value: 433,
  //   },
  //   {
  //     id: 'd2',
  //     value: 260,
  //   },
  //   {
  //     id: 'd3',
  //     value: 290,
  //   },
  //   {
  //     id: 'd4',
  //     value: 410,
  //   },
  //   {
  //     id: 'd5',
  //     value: 397,
  //   },
  //   {
  //     id: 'd6',
  //     value: 488,
  //   },
  //   {
  //     id: 'd47',
  //     value: 589,
  //   },
  // ];
  // maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
  // currentStatus = 'online';

  //===================================
  // 30. Component Lifecycle - A Deep Dive
  //===================================
  lifecycleComponentIsVisible = false;
  lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;

  onToggleLifecycleComponentVisibility() {
    this.lifecycleComponentIsVisible = !this.lifecycleComponentIsVisible;
  }

  onChangeLifecycleInputText() {
    this.lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;
  }
}
