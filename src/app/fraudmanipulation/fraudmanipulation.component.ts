import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GridDataResult, DataStateChangeEvent, ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { sampleFraudData } from '../models/FraudData';
import { FraudManipulationService } from '../services/fraud-manipulation.service';
import { FraudManipulation } from '../models/fraudManipulation';
import { parse } from 'date-fns';
import { parseDate } from '@progress/kendo-angular-intl';

@Component({
  selector: 'app-fraudmanipulation',
  templateUrl: './fraudmanipulation.component.html',
  styleUrls: ['./fraudmanipulation.component.scss']
})
export class FraudmanipulationComponent implements OnInit {

  public columns: any[] = [{ field: "fileNo" }, { field: "imageName" }, { field: "software" }, { field: "copyMoveRate" }, { field: "date_time" }];

  public samplegridData: any = sampleFraudData;
  public data: any[] = [{
    kind: 'Hydroelectric', share: 0.175
  }, {
    kind: 'Nuclear', share: 0.238
  }, {
    kind: 'Coal', share: 0.118
  }, {
    kind: 'Solar', share: 0.052
  }, {
    kind: 'Wind', share: 0.225
  }, {
    kind: 'Other', share: 0.192
  }];
  gridFraudData = new Array<FraudManipulation>();

  public from: number = 0;
  public to: number = 100;
  public series: any[] = [{
    name: "Software Manipulation Rate",
    data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
  }, {
    name: "Copy-Move-Splicing Rate",
    data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, 5.147, 4.3, 4.3]
  }];
  public categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
  @Input() selectedItem: string;

  constructor(private fraudManipulationService: FraudManipulationService) { }

  ngOnInit() {
    this.loadGridFruad();
  }

  loadGridFruad() {
    // tslint:disable-next-line: deprecation
    this.fraudManipulationService.getFraudDatas().subscribe(res => {
      this.gridFraudData = res.map(item => {
        return new FraudManipulation(
          item.id,
          item.fileNo,
          item.imageName,
          item.software.substr(item.software.indexOf(':') + 1, item.software.length),
          item.copyMoveRate,
          new Date(item.date_time) // =  parse(item.date_time.toString(),'d/M/yyyy HH:mm:ss', new Date()) //= parse(item.date_time, 'd/M/yyyy HH:mm:ss', new Date());
        );
      });
    });
  }
}