import { Data } from "@angular/router"

export interface DhdNavDataItem extends Data {
  showInNav: boolean,
  buttonLabel?: string,
  routerLink?: string
  animation?: string
}
