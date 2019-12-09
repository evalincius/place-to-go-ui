import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {CardsComponent} from "./components/cards/cards.component";
import {CarouselComponent} from "./components/carousel/carousel.component";


const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'carousel', component: CarouselComponent },
   { path: 'cards', component: CardsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
