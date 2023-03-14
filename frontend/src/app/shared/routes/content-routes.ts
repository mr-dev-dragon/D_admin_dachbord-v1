import { TableV5Component } from     'src/app/components/tables-example/table-v5/table-v5.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { Page404Component } from 'src/app/shared/components/page404/page404.component';
// import { PresentHeaderStiperComponent } from 'src/app/components/others-example/stipers-example/present-header-stiper/present-header-stiper.component';
// import { SDynamicTableComponent } from '../components/lib/tables/s-dynamic-table/s-dynamic-table.component';
// import { PresentMainStiperComponent } from 'src/app/components/others-example/stipers-example/present-main-stiper/present-main-stiper.component';
// import { FormExampleComponent } from 'src/app/components/form-example/form-example.component';
// import { TablesV1Component } from 'src/app/components/tables-example/tables-v1/tables-v1.component';
// import { TablesV2Component } from 'src/app/components/tables-example/tables-v2/tables-v2.component';
// import { UnicCardV1Component } from 'src/app/components/cards-example/unic/unic-card-v1/card-v1.component';
// import { UnicCardV2Component } from 'src/app/components/cards-example/unic/unic-card-v2/card-v2.component';
// import { GeneriqueCardV2Component } from 'src/app/components/cards-example/generique/generique-card-v2/generique-card-v2.component';
// import { GeneriqueCardV1Component } from 'src/app/components/cards-example/generique/generique-card-v1/generique-card-v1.component';
// import { TempletesV1Component } from 'src/app/components/templetes-example/templetes-v1/templetes-v1.component';
// import { TempleteV2Component } from 'src/app/components/templetes-example/templete-v2/templete-v2.component';
// import { ChateV1Component } from 'src/app/components/chates-example/chate-v1/chate-v1.component';
// import { ChatesV2Component } from 'src/app/components/chates-example/chates-v2/chates-v2.component';
// import { MSizeCalendarComponent } from 'src/app/components/caliders-example/m-size-calendar/m-size-calendar.component';
// import { DayCalinderComponent } from 'src/app/components/caliders-example/day-calinder/day-calinder.component';
// import { DynamicCalinderComponent } from 'src/app/components/caliders-example/dynamic-calinder/dynamic-calinder.component';
// import { MonthCalinderComponent } from 'src/app/components/caliders-example/month-calinder/month-calinder.component';
// import { ReadOnlyDynamicCalinderComponent } from 'src/app/components/caliders-example/read-only-dynamic-calinder/read-only-dynamic-calinder.component';
// import { WeekCalinderComponent } from 'src/app/components/caliders-example/week-calinder/week-calinder.component';
// import { AcorditionsComponent } from 'src/app/components/others-example/acorditions/acorditions.component';
// import { ConfigComponent } from 'src/app/components/others-example/config/config.component';
// import { SlidersComponent } from 'src/app/components/others-example/sliders/sliders.component';
// import { UploudFileComponent } from 'src/app/components/others-example/uploud-file/uploud-file.component';
// import { ProgressComponent } from 'src/app/components/others-example/progress/progress.component';
// import { LiveMapComponent } from 'src/app/components/others-example/map-examples/live-map/live-map.component';
// import { MobileMapComponent } from 'src/app/components/others-example/map-examples/mobile-map/mobile-map.component';
// import { ReadOnlyMapComponent } from 'src/app/components/others-example/map-examples/read-only-map/read-only-map.component';
// import { TableV3Component } from     'src/app/components/tables-example/table-v3/table-v3.component';
// import { TableV4Component } from     'src/app/components/tables-example/table-v4/table-v4.component';
// import { SelfCloseSectionComponent } from '../components/lib/sections/self-close-section/self-close-section.component';
// import { DZoonSictionComponent } from '../components/lib/sections/d-zoon-siction/d-zoon-siction.component';
// import { DinamicColComponent } from '../components/lib/sections/dinamic-col/dinamic-col.component';
// import { DColExComponent } from 'src/app/components/section-ex/d-col-ex/d-col-ex.component';
// import { SelfCloseSectionExComponent } from 'src/app/components/section-ex/self-close-section-ex/self-close-section-ex.component';
// import { DZoonSictionExComponent } from 'src/app/components/section-ex/dzoon-siction-ex/dzoon-siction-ex.component';
export const content: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'menu.dash',
      menu: true,
    },
  },
  {
    path: 'tables',
    children: [
      // {
      //   path: 'table-v1',
      //   component: TablesV1Component,
      // },
      // {
      //   path: 'table-v2',
      //   component: TablesV2Component,
      // },
      // {
      //   path: 'table-v3',
      //   component: TableV3Component,
      // },
      // {
      //   path: 'table-v4',
      //   component: TableV4Component,
      // },
      {
        path: 'table-v5',
        component: TableV5Component,
        data: {
          title: '  version 5',
          breadcrumb: 'tables/table-v5',
        },
      },

      // {
      //   path: 'ng-default-table',
      //   component: Page404Component,
      // },
    ],
  },
  // {
  //   path: 'cards',
  //   children: [
  //     {
  //       path: 'unic',
  //       children: [
  //         {
  //           path: 'card-v1',
  //           component: UnicCardV1Component,
  //         },
  //         {
  //           path: 'card-v2',
  //           component: UnicCardV2Component,
  //         },
  //       ],
  //     },
  //     {
  //       path: 'generique',
  //       children: [
  //         {
  //           path: 'card-v1',
  //           component: GeneriqueCardV1Component,
  //         },
  //         {
  //           path: 'card-v2',
  //           component: GeneriqueCardV2Component,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   path: 'templete',
  //   children: [
  //     {
  //       path: 'templete-v1',
  //       component: TempletesV1Component,
  //     },
  //     {
  //       path: 'templete-v2',
  //       component: TempleteV2Component,
  //     },
  //   ],
  // },
  // {
  //   path: 'charts',
  //   children: [
  //     {
  //       path: 'chart-v1',
  //       component: ChateV1Component,
  //     },
  //     {
  //       path: 'chart-v2',
  //       component: ChatesV2Component,
  //     },
  //   ],
  // },
  // {
  //   path: 'skeletons',
  //   children: [
  //     {
  //       path: '',
  //       component: Page404Component,
  //     },
  //   ],
  // },
  // {
  //   path: 'form-itoms',
  //   children: [
  //     {
  //       path: 'forme-example',
  //       component: FormExampleComponent,
  //     },
  //   ],
  // },
  // {
  //   path: 'calinders',
  //   children: [
  //     {
  //       path: 'mobile-dynamic-calindar',
  //       component: MSizeCalendarComponent,
  //     },
  //     {
  //       path: 'day-calindar',
  //       component: DayCalinderComponent,
  //     },
  //     {
  //       path: 'week-calindar',
  //       component: WeekCalinderComponent,
  //     },
  //     {
  //       path: 'month-calindar',
  //       component: MonthCalinderComponent,
  //     },
  //     {
  //       path: 'dynamic-calindar',
  //       component: DynamicCalinderComponent,
  //     },
  //     {
  //       path: 'only-calindar',
  //       component: ReadOnlyDynamicCalinderComponent,
  //     },
  //   ],
  // },
  // {
  //   path: 'others',
  //   children: [
  //     {
  //       path: 'map',
  //       children: [
  //         {
  //           path: 'read-only-map',
  //           component: ReadOnlyMapComponent,
  //         },
  //         {
  //           path: 'live-map',
  //           component: LiveMapComponent,
  //         },
  //         {
  //           path: 'mobile-map',
  //           component: MobileMapComponent,
  //         },
  //       ],
  //     },

  //     {
  //       path: 'acorditions',
  //       component: AcorditionsComponent,
  //     },
  //     {
  //       path: 'config',
  //       component: ConfigComponent,
  //     },
  //     {
  //       path: 'uploud-file',
  //       component: UploudFileComponent,
  //     },
  //     {
  //       path: 'sliders',
  //       component: SlidersComponent,
  //     },
  //     {
  //       path: 'progress',
  //       component: ProgressComponent,
  //     },
  //     {
  //       path: 'stipers',
  //       children: [
  //         {
  //           path: 'header-stiper',
  //           component: PresentHeaderStiperComponent,
  //         },
  //         {
  //           path: 'main-stiper',
  //           component: PresentMainStiperComponent,
  //         },
  //         {
  //           path: '',
  //           component: Page404Component,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   path: 'sections',
  //   children: [
  //     {
  //       path: 'self-close-section',

  //       component: SelfCloseSectionExComponent,
  //     },
  //     {
  //       path: 'd-zoon-section',
  //       component: DZoonSictionExComponent,
  //     },
  //     {
  //       path: 'd-col-section',
  //       component: DColExComponent,
  //     },
  //   ],
  // },
  // {
  //   path: 'configuration',
  //   loadChildren: () =>
  //     import('../../components/configuration/configuration.module').then(
  //       (m) => m.ConfigurationModule
  //     ),
  //   data: {
  //     title: 'menu.configuration',
  //     type: 'module',
  //     menu: true,
  //   },
  // },
  {
    path: 'PageNotFound',
    component: Page404Component,
    // canActivate: [AuthGuard],
    data: {
      title: '',
    },
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'PageNotFound',
  },
];
