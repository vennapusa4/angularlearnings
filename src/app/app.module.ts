import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { IndiaUsaComponent } from './india-usa/india-usa.component';
import { AtlanticComponent } from './atlantic/atlantic.component';
import { PacificComponent } from './pacific/pacific.component';
import { MealComponentComponent } from './meal-component/meal-component.component';
import { TemplateComponent } from './template/template.component';
import { ResolverService } from './resolver.service';
import { HttpClientService } from "./http-client.service";
import { HttpClientModule } from '@angular/common/http';
import { FirstComponent } from './first/first.component';
import { SubjectService } from "./subject.service";
import { SecondComponent } from './second/second.component';
import { RouteguardService } from "./routeguard.service";
import { SidebarComponent } from './sidebar/sidebar.component';
const routes: Routes = [
  {path: '', redirectTo: 'india-usa', pathMatch: 'full'},
  {
    path: 'side',
    outlet: 'aside',
    component: SidebarComponent
},
  {path: 'sidebar', component:SidebarComponent, pathMatch: 'full'},
  {path: 'india-usa',canActivate: [RouteguardService], component: IndiaUsaComponent,resolve: { message: ResolverService }, children: [
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
    MealComponentComponent,
    TemplateComponent,
    FirstComponent,
    SecondComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ResolverService,HttpClientService,SubjectService,RouteguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
