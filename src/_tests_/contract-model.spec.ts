import { ContractModel } from '../models/contract-model'

describe('Class Contract', () => {
  it('Contract 12 month', () => {
    const contract = new ContractModel({
      id: '#001',
      date_init: new Date(2019),
      expiration_date: new Date(2020),
      month: 12,
      monthly_cost: 500
    })

    expect(contract.getId()).toBe('#001')
    expect(contract.getDateInit()).toStrictEqual(new Date(2019))
    expect(contract.getExpirationDate()).toStrictEqual(new Date(2020))
    expect(contract.getMonth()).toBe(12)
    expect(contract.getMonthlyCost()).toBe(500)
  })
})
