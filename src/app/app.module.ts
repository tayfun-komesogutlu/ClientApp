import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostAddEditComponent } from './blog-post-add-edit/blog-post-add-edit.component';
import { BlogPostService } from './services/blog-post.service';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { FraudmanipulationdetailComponent } from './fraudmanipulationdetail/fraudmanipulationdetail.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { FraudmanipulationComponent } from './fraudmanipulation/fraudmanipulation.component';
import { FraudManipulationService } from './services/fraud-manipulation.service';
import {PinchZoomModule} from 'ngx-pinch-zoom';


@NgModule({
  declarations: [
    AppComponent,
    BlogPostsComponent,
    BlogPostComponent,
    BlogPostAddEditComponent,
    FraudmanipulationdetailComponent,
    FraudmanipulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonsModule,
    BrowserAnimationsModule,
    GridModule,
    LayoutModule,
    ChartsModule,
    NotificationModule,
    ExcelExportModule,
    PDFExportModule,
    PDFModule,
    ExcelModule,
    DialogsModule,
    PinchZoomModule
  ],
  providers: [
    BlogPostService,
    FraudManipulationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
