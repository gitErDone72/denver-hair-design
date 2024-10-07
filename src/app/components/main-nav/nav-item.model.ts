import { Data } from "@angular/router"

export interface IDhdNavDataItem extends Data {
  showInNav: boolean,
  buttonLabel?: string,
  routerLink?: string
  animation?: string
}
