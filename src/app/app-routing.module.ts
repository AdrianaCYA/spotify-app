import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TokenComponent } from './pages/token/token.component';
import { ArtistComponent } from './pages/artist/artist.component';

const routes: Routes = [
  { path: "", redirectTo:'search', pathMatch: 'full'},
  { path: "search", component:HomeComponent},
  { path: "login", component: LoginComponent},
  { path: "artists/:id", component: ArtistComponent},
  { path: "spotify", component: TokenComponent},
  { path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
