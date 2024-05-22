import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../_services/team.services';
import { Router } from '@angular/router';
import { Team } from '../../_models/team';

@Component({
  selector: 'app-team-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Team[];

  constructor(
    private teamService: TeamService,
    private router: Router  
  ) {}

  ngOnInit(): void {
    this.teamService.getAll().subscribe(teams => this.teams = teams);
  }

  deleteTeam(teamId: string) {
    this.teamService.delete(teamId).subscribe(() => {
      this.teams = this.teams.filter(team => team.teamId !== teamId);
    });
  }

  viewTeam(teamId: string) {
    this.router.navigate(['/teams/profile', teamId]);
  }
}
