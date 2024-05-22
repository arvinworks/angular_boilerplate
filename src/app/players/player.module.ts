import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerListComponent } from './list/list.component';
import { AddEditPlayerComponent } from './add-edit/add-edit-players.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PlayerRoutingModule
    ],
    declarations: [
        PlayerListComponent,
        AddEditPlayerComponent
    ]
})
export class PlayerModule { }
