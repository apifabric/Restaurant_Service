import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderHomeComponent } from './home/Order-home.component';
import { OrderNewComponent } from './new/Order-new.component';
import { OrderDetailComponent } from './detail/Order-detail.component';

const routes: Routes = [
  {path: '', component: OrderHomeComponent},
  { path: 'new', component: OrderNewComponent },
  { path: ':id', component: OrderDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Order-detail-permissions'
      }
    }
  },{
    path: ':order_id/Delivery', loadChildren: () => import('../Delivery/Delivery.module').then(m => m.DeliveryModule),
    data: {
        oPermission: {
            permissionId: 'Delivery-detail-permissions'
        }
    }
},{
    path: ':order_id/Payment', loadChildren: () => import('../Payment/Payment.module').then(m => m.PaymentModule),
    data: {
        oPermission: {
            permissionId: 'Payment-detail-permissions'
        }
    }
}
];

export const ORDER_MODULE_DECLARATIONS = [
    OrderHomeComponent,
    OrderNewComponent,
    OrderDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }