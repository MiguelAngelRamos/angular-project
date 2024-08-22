import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DirectivesComponent } from './pages/directives/directives.component';

// http://localhost:4200/
// http://localhost:4200/home
// http://localhost:4200/about
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
