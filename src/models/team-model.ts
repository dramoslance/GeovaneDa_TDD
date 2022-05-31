import { ITeam } from '../interfaces/ITeam'

export class Team implements ITeam {
  position (name: string, tShirt: number, skills: string[]): any[] {
    return [
      name,
      tShirt,
      skills
    ]
  }
}
