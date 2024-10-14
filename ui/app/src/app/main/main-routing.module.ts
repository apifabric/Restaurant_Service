import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Delivery', loadChildren: () => import('./Delivery/Delivery.module').then(m => m.DeliveryModule) },
    
        { path: 'Driver', loadChildren: () => import('./Driver/Driver.module').then(m => m.DriverModule) },
    
        { path: 'MenuItem', loadChildren: () => import('./MenuItem/MenuItem.module').then(m => m.MenuItemModule) },
    
        { path: 'Notification', loadChildren: () => import('./Notification/Notification.module').then(m => m.NotificationModule) },
    
        { path: 'Order', loadChildren: () => import('./Order/Order.module').then(m => m.OrderModule) },
    
        { path: 'Payment', loadChildren: () => import('./Payment/Payment.module').then(m => m.PaymentModule) },
    
        { path: 'Promo', loadChildren: () => import('./Promo/Promo.module').then(m => m.PromoModule) },
    
        { path: 'Restaurant', loadChildren: () => import('./Restaurant/Restaurant.module').then(m => m.RestaurantModule) },
    
        { path: 'RestaurantSchedule', loadChildren: () => import('./RestaurantSchedule/RestaurantSchedule.module').then(m => m.RestaurantScheduleModule) },
    
        { path: 'Review', loadChildren: () => import('./Review/Review.module').then(m => m.ReviewModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
        { path: 'UserPreference', loadChildren: () => import('./UserPreference/UserPreference.module').then(m => m.UserPreferenceModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }