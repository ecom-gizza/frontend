import { NgModule } from '@angular/core';
// modules
import { ClientContainerRoutingModule} from './client-container-routing.module';
import { SharedModule} from '../shared/shared.module';
import { FormsModule} from '@angular/forms';
// components
import { ClientHeaderComponent } from './client-header/client-header.component';
import { ClientContainerComponent } from './client-container/client-container.component';
import { ClientHomeComponent } from './client-home/client-home/client-home.component';
import { CarouselComponent } from './client-home/carousel/carousel.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
// services
import { ShoppingCartDataService } from './shopping-cart/shopping-cart-data.service';
import { ItemComponent } from './item/item.component';
import { ItemService} from './item/item.service';
// pipe
import { CategoryTypePipe } from './pipes/category-type.pipe';

@NgModule({
  imports: [
    ClientContainerRoutingModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    ClientContainerComponent,
    ClientHeaderComponent,
    ClientHomeComponent,
    CarouselComponent,
    ShoppingCartComponent,
    ItemComponent,
    CategoryTypePipe],
  providers: [
    ShoppingCartDataService,
    ItemService,
  ]
})
export class ClientContainerModule { }
