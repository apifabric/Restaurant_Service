import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantHomeComponent } from './home/Restaurant-home.component';
import { RestaurantNewComponent } from './new/Restaurant-new.component';
import { RestaurantDetailComponent } from './detail/Restaurant-detail.component';

const routes: Routes = [
  {path: '', component: RestaurantHomeComponent},
  { path: 'new', component: RestaurantNewComponent },
  { path: ':id', component: RestaurantDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Restaurant-detail-permissions'
      }
    }
  },{
    path: ':restaurant_id/MenuItem', loadChildren: () => import('../MenuItem/MenuItem.module').then(m => m.MenuItemModule),
    data: {
        oPermission: {
            permissionId: 'MenuItem-detail-permissions'
        }
    }
},{
    path: ':restaurant_id/Notification', loadChildren: () => import('../Notification/Notification.module').then(m => m.NotificationModule),
    data: {
        oPermission: {
            permissionId: 'Notification-detail-permissions'
        }
    }
},{
    path: ':restaurant_id/Order', loadChildren: () => import('../Order/Order.module').then(m => m.OrderModule),
    data: {
        oPermission: {
            permissionId: 'Order-detail-permissions'
        }
    }
},{
    path: ':restaurant_id/Promo', loadChildren: () => import('../Promo/Promo.module').then(m => m.PromoModule),
    data: {
        oPermission: {
            permissionId: 'Promo-detail-permissions'
        }
    }
},{
    path: ':restaurant_id/RestaurantSchedule', loadChildren: () => import('../RestaurantSchedule/RestaurantSchedule.module').then(m => m.RestaurantScheduleModule),
    data: {
        oPermission: {
            permissionId: 'RestaurantSchedule-detail-permissions'
        }
    }
},{
    path: ':restaurant_id/Review', loadChildren: () => import('../Review/Review.module').then(m => m.ReviewModule),
    data: {
        oPermission: {
            permissionId: 'Review-detail-permissions'
        }
    }
}
];

export const RESTAURANT_MODULE_DECLARATIONS = [
    RestaurantHomeComponent,
    RestaurantNewComponent,
    RestaurantDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }