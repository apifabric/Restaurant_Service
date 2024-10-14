import { MenuRootItem } from 'ontimize-web-ngx';

import { DeliveryCardComponent } from './Delivery-card/Delivery-card.component';

import { DriverCardComponent } from './Driver-card/Driver-card.component';

import { MenuItemCardComponent } from './MenuItem-card/MenuItem-card.component';

import { NotificationCardComponent } from './Notification-card/Notification-card.component';

import { OrderCardComponent } from './Order-card/Order-card.component';

import { PaymentCardComponent } from './Payment-card/Payment-card.component';

import { PromoCardComponent } from './Promo-card/Promo-card.component';

import { RestaurantCardComponent } from './Restaurant-card/Restaurant-card.component';

import { RestaurantScheduleCardComponent } from './RestaurantSchedule-card/RestaurantSchedule-card.component';

import { ReviewCardComponent } from './Review-card/Review-card.component';

import { UserCardComponent } from './User-card/User-card.component';

import { UserPreferenceCardComponent } from './UserPreference-card/UserPreference-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Delivery', name: 'DELIVERY', icon: 'view_list', route: '/main/Delivery' }
    
        ,{ id: 'Driver', name: 'DRIVER', icon: 'view_list', route: '/main/Driver' }
    
        ,{ id: 'MenuItem', name: 'MENUITEM', icon: 'view_list', route: '/main/MenuItem' }
    
        ,{ id: 'Notification', name: 'NOTIFICATION', icon: 'view_list', route: '/main/Notification' }
    
        ,{ id: 'Order', name: 'ORDER', icon: 'view_list', route: '/main/Order' }
    
        ,{ id: 'Payment', name: 'PAYMENT', icon: 'view_list', route: '/main/Payment' }
    
        ,{ id: 'Promo', name: 'PROMO', icon: 'view_list', route: '/main/Promo' }
    
        ,{ id: 'Restaurant', name: 'RESTAURANT', icon: 'view_list', route: '/main/Restaurant' }
    
        ,{ id: 'RestaurantSchedule', name: 'RESTAURANTSCHEDULE', icon: 'view_list', route: '/main/RestaurantSchedule' }
    
        ,{ id: 'Review', name: 'REVIEW', icon: 'view_list', route: '/main/Review' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
        ,{ id: 'UserPreference', name: 'USERPREFERENCE', icon: 'view_list', route: '/main/UserPreference' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    DeliveryCardComponent

    ,DriverCardComponent

    ,MenuItemCardComponent

    ,NotificationCardComponent

    ,OrderCardComponent

    ,PaymentCardComponent

    ,PromoCardComponent

    ,RestaurantCardComponent

    ,RestaurantScheduleCardComponent

    ,ReviewCardComponent

    ,UserCardComponent

    ,UserPreferenceCardComponent

];