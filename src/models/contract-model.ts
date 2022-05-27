import { IContract } from '../interfaces/IContract'

export class ContractModel {
  constructor (public contract: IContract) {
    Object.assign(this, contract)
  }

  getId (): string {
    return this.contract.id
  }

  getDateInit (): Date {
    return this.contract.date_init
  }

  getExpirationDate (): Date {
    return this.contract.expiration_date
  }

  getMonth (): number {
    return this.contract.month
  }

  getMonthlyCost (): number {
    return this.contract.monthly_cost
  }
}

// Open-closed principle
export class PrimeContract extends ContractModel {
  getMonthlyDiscount (): number {
    return this.contract.monthly_cost * 0.1
  }
}
