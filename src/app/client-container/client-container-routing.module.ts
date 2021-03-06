import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientHomeComponent} from './client-home/client-home/client-home.component';
import { ItemComponent} from './item/item.component';
import { ShoppingCartComponent} from './shopping-cart/shopping-cart.component';

import { ClientContainerComponent } from './client-container/client-container.component';
import {ShoppingCartValidationComponent} from './shopping-cart-validation/shopping-cart-validation.component';


export const clientContainerRoutes: Routes = [
    {
        path: '', component: ClientContainerComponent,
        children: [
            { path: '', component: ClientHomeComponent },
            { path: 'pizza', component: ItemComponent },
            { path: 'drink', component: ItemComponent },
            { path: 'dessert', component: ItemComponent},
            { path: 'shopping-cart-validation', component: ShoppingCartValidationComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(
        clientContainerRoutes
        // ,{ enableTracing: true } // <-- debugging purposes only
    )],
    exports: [RouterModule]
})
export class ClientContainerRoutingModule { }

