import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'games',
    data: {
      title: 'Games',
    },
    loadChildren: () =>
      import('@app/modules/games/games.module').then((m) => m.GamesModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/games?perpage=10&page=1',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
