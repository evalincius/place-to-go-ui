import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlaygroundComponent} from "./components/playground/playground.component";


const routes: Routes = [
  {path: '', component: PlaygroundComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
