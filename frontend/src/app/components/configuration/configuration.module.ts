

import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { GestionMenuComponent } from './gestion-menu/gestion-menu.component';
@NgModule({
  declarations: [
    GestionMenuComponent,
  ],
  imports: [
    SharedModule,
    ConfigurationRoutingModule
  ],
  // providers: [MenuService]
})
export class ConfigurationModule { }
