import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../../_services/team.services';
import { Team } from '../../_models/team';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.css']
})
export class TeamProfileComponent implements OnInit {
  team: Team;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    const teamId = this.route.snapshot.paramMap.get('teamId');
    if (teamId) {
      this.teamService.getById(teamId).subscribe({
        next: (team) => {
          this.team = team;
          console.log('Fetched team:', team); // Verify data is being fetched
        },
        error: (error) => {
          console.error('Error fetching team data:', error);
          // Handle errors here (e.g., display an error message)
        }
      });
    }
  }
}
