import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { IndiaUsaComponent } from './india-usa/india-usa.component';
import { AtlanticComponent } from './atlantic/atlantic.component';
import { PacificComponent } from './pacific/pacific.component';
import { MealComponentComponent } from './meal-component/meal-component.component';
const routes: Routes = [
  {path: '', redirectTo: 'india-usa', pathMatch: 'full'},
  {path: 'india-usa', component: IndiaUsaComponent, children: [
    {path: 'atlantic', component: AtlanticComponent},
      {path: 'atlantic/:id', component: MealComponentComponent},
    {path: 'pacific', component: PacificComponent},
    {path: 'pacific/:id', component: MealComponentComponent}
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    IndiaUsaComponent,
    AtlanticComponent,
    PacificComponent,
    MealComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
