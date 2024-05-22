import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../_services/players.services';
import { Player } from '../../_models/player';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {
  player: Player;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    const playerId = this.route.snapshot.paramMap.get('playerId');
    if (playerId) {
      this.playerService.getById(playerId).subscribe(player => {
        this.player = player;
      });
    }
  }
}
