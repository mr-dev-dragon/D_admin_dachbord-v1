import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DropzoneConfigInterface, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
// import { ToastrModule } from 'ngx-toastr';

import { SharedModule } from './shared/shared.module';

// import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PresentHeaderStiperComponent } from './components/others-example/stipers-example/present-header-stiper/present-header-stiper.component';
import { PresentMainStiperComponent } from './components/others-example/stipers-example/present-main-stiper/present-main-stiper.component';
import { FormExampleComponent } from './components/form-example/form-example.component';
import { ChatesV2Component } from './components/chates-example/chates-v2/chates-v2.component';
import { TablesV1Component } from './components/tables-example/tables-v1/tables-v1.component';
import { TempletesV1Component } from './components/templetes-example/templetes-v1/templetes-v1.component';
import { SkeletonsV1Component } from './components/skeletons-example/skeletons-v1/skeletons-v1.component';
import { CalidersV1Component } from './components/caliders-example/caliders-v1/caliders-v1.component';
import { FormsV1Component } from './components/forms-items-example/forms-v1/forms-v1.component';
import { TablesV2Component } from './components/tables-example/tables-v2/tables-v2.component';
import { GeneriqueCardV1Component } from './components/cards-example/generique/generique-card-v1/generique-card-v1.component';
import { GeneriqueCardV2Component } from './components/cards-example/generique/generique-card-v2/generique-card-v2.component';
import { UnicCardV1Component } from './components/cards-example/unic/unic-card-v1/card-v1.component';
import { UnicCardV2Component } from './components/cards-example/unic/unic-card-v2/card-v2.component';
import { TempleteV2Component } from './components/templetes-example/templete-v2/templete-v2.component';
import { MSizeCalendarComponent } from './components/caliders-example/m-size-calendar/m-size-calendar.component';
import { DayCalinderComponent } from './components/caliders-example/day-calinder/day-calinder.component';
import { WeekCalinderComponent } from './components/caliders-example/week-calinder/week-calinder.component';
import { MonthCalinderComponent } from './components/caliders-example/month-calinder/month-calinder.component';
import { DynamicCalinderComponent } from './components/caliders-example/dynamic-calinder/dynamic-calinder.component';
import { ReadOnlyDynamicCalinderComponent } from './components/caliders-example/read-only-dynamic-calinder/read-only-dynamic-calinder.component';
import { ChateV1Component } from './components/chates-example/chate-v1/chate-v1.component';
import { AcorditionsComponent } from './components/others-example/acorditions/acorditions.component';
import { ConfigComponent } from './components/others-example/config/config.component';
import { UploudFileComponent } from './components/others-example/uploud-file/uploud-file.component';
import { SlidersComponent } from './components/others-example/sliders/sliders.component';
import { ProgressComponent } from './components/others-example/progress/progress.component';
import { ReadOnlyMapComponent } from './components/others-example/map-examples/read-only-map/read-only-map.component';
import { LiveMapComponent } from './components/others-example/map-examples/live-map/live-map.component';
import { MobileMapComponent } from './components/others-example/map-examples/mobile-map/mobile-map.component';
import { TableV3Component } from './components/tables-example/table-v3/table-v3.component';
import { TableV4Component } from './components/tables-example/table-v4/table-v4.component';
import { TableV5Component } from './components/tables-example/table-v5/table-v5.component';
import { DColExComponent } from './components/section-ex/d-col-ex/d-col-ex.component';
import { SelfCloseSectionExComponent } from './components/section-ex/self-close-section-ex/self-close-section-ex.component';
import { DZoonSictionExComponent } from './components/section-ex/dzoon-siction-ex/dzoon-siction-ex.component';




const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'http://localhost:8080/post',
  maxFilesize: 50,
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PresentHeaderStiperComponent,
    PresentMainStiperComponent,
    FormExampleComponent,
    ChatesV2Component,
    TablesV1Component,
    TempletesV1Component,
    SkeletonsV1Component,
    CalidersV1Component,
    FormsV1Component,
    TablesV2Component,
    UnicCardV1Component,
    UnicCardV2Component,
    GeneriqueCardV1Component,
    GeneriqueCardV2Component,
    TempleteV2Component,
    MSizeCalendarComponent,
    DayCalinderComponent,
    WeekCalinderComponent,
    MonthCalinderComponent,
    DynamicCalinderComponent,
    ReadOnlyDynamicCalinderComponent,
    ChateV1Component,
    AcorditionsComponent,
    ConfigComponent,
    UploudFileComponent,
    SlidersComponent,
    ProgressComponent,
    ReadOnlyMapComponent,
    LiveMapComponent,
    MobileMapComponent,
    TableV3Component,
    TableV4Component,
    TableV5Component,
    DColExComponent,

    SelfCloseSectionExComponent,
    DZoonSictionExComponent,


  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: localStorage.getItem('lang') || 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) =>
          new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient],
      },
    }),
    NgbModule,
    // ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    },
    DialogService,
    DynamicDialogConfig,
    DynamicDialogRef,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
