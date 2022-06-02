import { Team } from '../models/team-model'

describe('Team Class', () => {
  test('Position', () => {
    const team = new Team()

    const position = {
      name: 'goalkeeper',
      tShirt: 1,
      skills: ['Kick hard', 'Jump fast', 'Jump high']
    }

    expect(team.position(position.name, position.tShirt, position.skills)).toEqual(['goalkeeper', 1, ['Kick hard', 'Jump fast', 'Jump high']])
  })

  test('Attacker', () => {
    const team = new Team()

    expect(team.attacker('clodovaldo')).toBe('attacker')
  })
})
