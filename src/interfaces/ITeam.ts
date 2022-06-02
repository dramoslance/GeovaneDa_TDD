export interface ISoccerPlayer {
  attacker: (name: string) => string
}
export interface ITeam {
  position: (name: string, tShirt: number, skills: string[]) => any[]
}
