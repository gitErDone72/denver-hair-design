export enum SalonServiceType {
    HAIR = 'haircutting, coloring & styling',
    WAXING = 'waxing & tinting',
    FACE = 'facials & skin care treatments',
    NAIL_TREATMENTS = 'nail treatments'
}
export interface SalonService {
    id: number,
    type: SalonServiceType,
    name: string,
    description: string,
    startingPrice: number
}