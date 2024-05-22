import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../_services/players.services';
import { Router } from '@angular/router';
import { Player } from '../../_models/player';

@Component({
  selector: 'app-player-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];
  filteredPlayers: Player[] = [];
  paginatedPlayers: Player[] = [];
  searchText: string = '';
  isLoading: boolean = true;

  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;
  pages: number[] = [];

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchPlayers();
  }

  fetchPlayers(): void {
    this.playerService.getAll().subscribe({
      next: (players) => {
        this.players = players;
        this.filteredPlayers = players;
        this.totalPages = Math.ceil(this.filteredPlayers.length / this.pageSize);
        this.pages = Array(this.totalPages).fill(0).map((x, i) => i + 1);
        this.paginatePlayers();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching players', error);
        this.isLoading = false;
      }
    });
  }

  filterPlayers(): void {
    this.filteredPlayers = this.players.filter(player =>
      player.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      player.nationality.toLowerCase().includes(this.searchText.toLowerCase()) ||
      player.region.toLowerCase().includes(this.searchText.toLowerCase()) ||
      player.role.toLowerCase().includes(this.searchText.toLowerCase()) ||
      player.ingameName.toLowerCase().includes(this.searchText.toLowerCase()) ||
      (player.team && player.team.name.toLowerCase().includes(this.searchText.toLowerCase()))
    );
    this.totalPages = Math.ceil(this.filteredPlayers.length / this.pageSize);
    this.pages = Array(this.totalPages).fill(0).map((x, i) => i + 1);
    this.currentPage = 1; // reset to first page
    this.paginatePlayers();
  }

  paginatePlayers(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedPlayers = this.filteredPlayers.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.paginatePlayers();
  }

  deletePlayer(playerId: string): void {
    this.playerService.delete(playerId).subscribe({
      next: () => {
        this.players = this.players.filter(player => player.playerId !== playerId);
        this.filterPlayers();
      },
      error: (error) => {
        console.error('Error deleting player', error);
      }
    });
  }

  viewPlayer(playerId: string): void {
    this.router.navigate(['/players/profile', playerId]);
  }

  viewTeam(teamId: string): void {
    this.router.navigate(['/teams/profile', teamId]);
  }
}
