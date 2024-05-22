import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamListComponent } from './list/list.component';
import { AddEditTeamComponent } from './add-edit/add-edit-team.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TeamRoutingModule
    ],
    declarations: [ 
        TeamListComponent,
        AddEditTeamComponent
    ]
})
export class TeamModule { }
