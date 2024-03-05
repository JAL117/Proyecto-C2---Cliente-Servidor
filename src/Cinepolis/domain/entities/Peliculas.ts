export class Peliculas {
  constructor(
    readonly id:number,
    readonly titulo: string,
    readonly like : number,
    readonly dislike : number,
    readonly destacado : boolean
  ) {}
}
