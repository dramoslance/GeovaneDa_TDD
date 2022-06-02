import { ITeam, ISoccerPlayer } from '../interfaces/ITeam'

export class Team implements ITeam, ISoccerPlayer {
  position (name: string, tShirt: number, skills: string[]): any[] {
    return [
      name,
      tShirt,
      skills
    ]
  }

  attacker (name: string): string {
    name = 'attacker'
    return name
  }
}
