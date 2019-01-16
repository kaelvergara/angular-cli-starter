import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingPreloader } from '@app/app-routing-preloader';

const routes: Routes = [
  {
    path: 'hello-world',
    loadChildren: './modules/hello-world/hello-world.module#HelloWorldModule',
    data: { preload: true }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppRoutingPreloader })],
  exports: [RouterModule],
  providers: [AppRoutingPreloader]
})
export class AppRoutingModule { }
