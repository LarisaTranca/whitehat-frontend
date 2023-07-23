import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ListComponent } from './components/list/list.component';
import { GamesRoutingModule } from './games-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatGridListModule,
        MatCardModule,
        MatBadgeModule,
        MatSelectModule,
        CommonModule,
        FormsModule,
        GamesRoutingModule
    ]
})

export class GamesModule {

}