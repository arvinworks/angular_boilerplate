import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../_services/players.services';
import { TeamService } from '../../_services/team.services';
import { Team } from '../../_models/team';
import { Player } from '../../_models/player';
import { Router } from '@angular/router'

@Component({
  selector: 'app-player-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[];

  constructor(
    private playerService: PlayerService,
    private teamService: TeamService,
    private router: Router  
  ) {}
  ngOnInit(): void {
    this.playerService.getAll().subscribe(players => this.players = players);
  }

  deletePlayer(playerId: string) {
    this.playerService.delete(playerId).subscribe(() => {
      this.players = this.players.filter(player => player.playerId !== playerId);
    });
  }

  viewPlayer(playerId: string) {
    this.router.navigate(['/players/profile', playerId]);
  }

  viewTeam(teamId: string) {
    this.router.navigate(['/teams/profile', teamId]);
  }
}
