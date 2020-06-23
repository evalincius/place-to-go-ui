import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/places-container', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'places', loadChildren: './places/places.module#PlacesModule' },
    { path: 'places-container', loadChildren: './places-container/places-container.module#PlacesContainerModule' },
    { path: 'maps', loadChildren: './google-maps/google-maps.module#GoogleMapsModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
