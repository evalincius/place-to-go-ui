import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlacesContainerComponent} from "./places-container.component";


const routes: Routes = [
  {path: '', component: PlacesContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesContainerRoutingModule { }
