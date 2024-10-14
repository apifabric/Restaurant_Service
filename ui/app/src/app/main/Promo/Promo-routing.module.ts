import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoHomeComponent } from './home/Promo-home.component';
import { PromoNewComponent } from './new/Promo-new.component';
import { PromoDetailComponent } from './detail/Promo-detail.component';

const routes: Routes = [
  {path: '', component: PromoHomeComponent},
  { path: 'new', component: PromoNewComponent },
  { path: ':id', component: PromoDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Promo-detail-permissions'
      }
    }
  }
];

export const PROMO_MODULE_DECLARATIONS = [
    PromoHomeComponent,
    PromoNewComponent,
    PromoDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoRoutingModule { }