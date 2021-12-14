import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BmnComponent } from './pages/bmn/bmn.component';
import { SrcComponent } from './pages/src/src.component';
import { DictionaryComponent } from './pages/dictionary/dictionary.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: HomeComponent },
  { path: 'src', component: SrcComponent },
  { path: 'bmn', component: BmnComponent },
  { path: 'dictionary', component: DictionaryComponent }
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
