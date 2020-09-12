import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';


const routes: Routes = [
  {
    path: 'home',
    component: AccueilComponent
  },
  {
    path: 'sommesnous',
    component: QuiSommesNousComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },





  {
    path: 'home2',
    component: AccueilComponent
  },
  {
    path: 'qui2',
    component: QuiSommesNousComponent
  },
  {
    path: 'contact2',
    component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
