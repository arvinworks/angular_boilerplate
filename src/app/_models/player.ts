import { Team } from "./team";

export class Player {
    playerId: string;
    name: string;
    nationality: string;
    born: string;
    region: string;
    role: string;
    ingameName: string;
    teamId: string;
    team: Team;
}
