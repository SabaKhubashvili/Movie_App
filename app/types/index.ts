export interface SecondaryBannerTagsInterface{
    id:number
    image:string,
    label:string,
}

export interface MovieInformationInterface{
    id:number
    title:string,
    imdbRating:number,
    duration:string,
    year:number,
    tags:string[]
    description:string,
    image:string
}