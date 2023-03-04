import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionMenuComponent } from './gestion-menu/gestion-menu.component';
const routes: Routes = [
  {
    path: 'menu-admin',
    component: GestionMenuComponent,
    data: {
      title: 'gestion menu espace administration',
      breadcrumb: 'configuration/menu admin',
      breadcrumbURLs: ['/menu-admin'],
    },
    // canActivate: [AuthGuard],
  },



];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationRoutingModule {}
