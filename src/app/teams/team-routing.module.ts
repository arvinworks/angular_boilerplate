import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamListComponent } from './list/list.component';
import { AddEditTeamComponent } from './add-edit/add-edit-team.component';
import { TeamProfileComponent } from './team-profile/team-profile.component';

const routes: Routes = [
    { path: '', component: TeamListComponent },
    { path: 'add', component: AddEditTeamComponent },
    { path: 'edit/:teamId', component: AddEditTeamComponent },
    { path: 'profile/:teamId', component: TeamProfileComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeamRoutingModule { }
