import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FraudManipulationService } from '../services/fraud-manipulation.service';
import { NotificationService } from '@progress/kendo-angular-notification';


@Component({
  selector: 'app-fraudmanipulationdetail',
  templateUrl: './fraudmanipulationdetail.component.html',
  styleUrls: ['./fraudmanipulationdetail.component.scss']
})
export class FraudmanipulationdetailComponent implements OnInit {
  form: FormGroup;
  actionType: string;
  formTitle: string;
  formBody: string;
  fileNo: string;
  imgName: string;
  errorMessage: any;
  valueA: string;
  public elaRes: string;
  public softwareRes: string;
  public elaImage: string;
  public targetImage: string;
  public dialogOpened = false;
  public windowOpened = false;
  public windowTop = 5;
  public windowRight = 50;

  public closeEla(component) {
    this[component + 'Opened'] = false;
  }

  public openEla(component) {
    this[component + 'Opened'] = true;
  }
  public closeSoft(component) {
    this[component + 'Opened'] = false;
  }

  public openSoft(component) {
    this[component + 'Opened'] = true;
  }

  public action(status) {
    console.log(`Dialog result: ${status}`);
    this.dialogOpened = false;
  }
  goBack() {
    this._location.back();
  }

  // tslint:disable-next-line: max-line-length
  constructor(private fraudManipulationService: FraudManipulationService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router, private _location: Location, private notificationService: NotificationService) {
    const imgName = 'ImageName';

    if (this.avRoute.snapshot.params[imgName]) {
      this.imgName = this.avRoute.snapshot.params[imgName];
    }
  }
  ngOnInit() {
    this.actionType = 'List';
    this.fraudManipulationService.getFraudDetail(this.imgName)
      .subscribe(data => (
        this.elaRes = data[0].elaResult,
        this.softwareRes = data[0].ImageBase64,
        this.elaImage = data[0].elaBase64,
        this.targetImage = data[0].targetImage
      ));
  }
  public showWarning(): void {
    this.notificationService.show({
      content: 'Warning notification',
      hideAfter: 1600,
      position: { horizontal: 'right', vertical: 'bottom' },
      animation: { type: 'fade', duration: 400 },
      type: { style: 'warning', icon: true }
    });
  }
  public showInfo(): void {
    this.notificationService.show({
      content: 'Info notification',
      hideAfter: 1600,
      position: { horizontal: 'center', vertical: 'bottom' },
      animation: { type: 'fade', duration: 400 },
      type: { style: 'info', icon: true }
    });
  }
}
