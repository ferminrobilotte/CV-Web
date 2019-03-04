import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { InformationPageComponent } from './information-page/information-page.component';

const routes: Routes = [
  {path: 'main-page', component: MainPageComponent},
  {path: 'information-page', component: InformationPageComponent},
  {path: '', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
