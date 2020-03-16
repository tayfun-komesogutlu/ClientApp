import { Component, ViewEncapsulation } from '@angular/core';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';
@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<div class="custom-toolbar">
  <button kendoButton
      icon="menu"
       [look] = "'flat'"
      (click)="drawer.toggle()"></button>
      <img src="./assets/img/Zurich_Logo.png" class="logo">
  </div>
  <kendo-drawer-container>
      <kendo-drawer #drawer
          [items]="items"
          [mode]="'push'"
          [mini]="true"
          [expanded]="false"
          (select)="onSelect($event)">
      </kendo-drawer>
      <kendo-drawer-content>
      <router-outlet></router-outlet>
      </kendo-drawer-content>
  </kendo-drawer-container>`
})
export class AppComponent {
  public selected = 'Inbox';
  title = 'ClientApp';
  public items: Array<DrawerItem> = [
    { text: 'Fraud Visual Manipulation', icon: 'k-i-image-map-editor', selected: true },
    { separator: true },
    { text: 'Fraud Visual Similarity', icon: 'k-i-image-edit'}
];
public onSelect(ev: DrawerSelectEvent): void {
  this.selected = ev.item.text;
}
}
