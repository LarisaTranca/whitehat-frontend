import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
    {
        path: '',
        component: ListComponent,
        data : {
            title: 'Games'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GamesRoutingModule {

}