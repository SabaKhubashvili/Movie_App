import { MovieInformationInterface, SecondaryBannerTagsInterface } from "../types"


export const Parnters:string[] =  [
    'disney',
    'netflix',
    'hbo',
    'pixar',
    'marvel',
    'starwars',
    'nationalgeographic',
    'warnerbros',
    'discoveryLogo',
    'dreamworks',
    'paramount'
]

export const secondaryBannerTags:SecondaryBannerTagsInterface[] = [
    {
        id:0,
        image:'superhero',
        label:'Superhero'
    },
    {
        id:1,
        image:'drama',
        label:'Drama'
    },
    {
        id:2,
        image:'sitcom',
        label:'Sitcom'
    },
    {
        id:3,
        image:'thriller',
        label:'Thriller'
    },
    {
        id:4,
        image:'comedy',
        label:'Comedy'
    },
    {
        id:5,
        image:'fantasy',
        label:'Fantasy'
    },
    
]


export const moviesAndSeries:MovieInformationInterface[] = [
    {
        id:0,
        title: "The Pursuit of Happiness",
        imdbRating: 8.0,
        duration: "2h 57min",
        year: 2006,
        tags: ["Drama"],
        description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional endeavor. Heartwarming and inspiring.",
        image:'DungeonsDragons'
      },
      {
        id:1,
        title: "Stranger Things",
        imdbRating: 8.7,
        duration: "51min",
        year: 2016,
        tags: ["Mystery", "Sci-Fi"],
        description: "In a small town where everyone knows everyone, strange events start unfolding after a young boy goes missing. A group of friends and a mysterious girl embark on a thrilling adventure to uncover the truth.",
        image:'guardiansofgalaxybanner'
      },
      {
        id:2,
        title: "The Dark Knight",
        imdbRating: 9.0,
        duration: "2h 32min",
        year: 2008,
        tags: ["Action", "Crime"],
        description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham City. Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        image:'DungeonsDragons'
      },
]

export const movieReleases = [
    {
        month: "June",
        movies: [
            {
                title: "Movie 1",
                release_date: "15",
                studio: "Studio A"
            },
            {
                title: "Movie 2",
                release_date: "30",
                studio: "Studio B"
            },
            {
                title: "Movie 3",
                release_date: "30",
                studio: "Studio B"
            },
            {
                title: "Movie 4",
                release_date: "30",
                studio: "Studio B"
            },
        ]
    },
    {
        month: "July",
        movies: [
            {
                title: "Movie 3",
                release_date: "5",
                studio: "Studio C"
            },
            {
                title: "Movie 4",
                release_date: "20",
                studio: "Studio D"
            }
        ]
    },
    {
        month: "August",
        movies: [
            {
                title: "Movie 5",
                release_date: "10",
                studio: "Studio E"
            },
            {
                title: "Movie 6",
                release_date: "25",
                studio: "Studio F"
            }
        ]
    },
    {
        month: "September",
        movies: [
            {
                title: "Movie 7",
                release_date: "5",
                studio: "Studio G"
            },
            {
                title: "Movie 8",
                release_date: "15",
                studio: "Studio H"
            }
        ]
    }
];


export const hotTopics = [
    {
      title: "Dungeons & Dragons: The Adventure Begins",
      imdbRating: 6.8,
      reviews: 1350,
      rating: 7.4,
      img: "dungeonsdragon"
    },
    {
      title: "The Dragon's Lair",
      imdbRating: 7.2,
      reviews: 1420,
      rating: 7.8,
      img: "dungeonsdragon"
    },
    {
      title: "Sorcerer's Quest",
      imdbRating: 6.5,
      reviews: 920,
      rating: 6.9,
      img: "dungeonsdragon"
    },
    {
      title: "The Dungeon Master",
      imdbRating: 7.1,
      reviews: 1100,
      rating: 7.6,
      img: "dungeonsdragon"
    },
    {
      title: "Realm of Dragons",
      imdbRating: 6.7,
      reviews: 980,
      rating: 7.3,
      img: "dungeonsdragon"
    },
    {
      title: "The Dragon's Crown",
      imdbRating: 7.4,
      reviews: 1250,
      rating: 8.1,
      img: "dungeonsdragon"
    },
    {
      title: "Tales from the Dungeon",
      imdbRating: 6.9,
      reviews: 1050,
      rating: 7.2,
      img: "dungeonsdragon"
    },
    {
      title: "The Dragon's Wrath",
      imdbRating: 7.3,
      reviews: 1160,
      rating: 8.0,
      img: "dungeonsdragon"
    },
    {
      title: "Wizard's Dominion",
      imdbRating: 6.6,
      reviews: 890,
      rating: 6.8,
      img: "dungeonsdragon"
    },
    {
      title: "The Dungeon Crawler",
      imdbRating: 7.0,
      reviews: 1010,
      rating: 7.5,
      img: "dungeonsdragon"
    },
    {
      title: "Dragons & Magic",
      imdbRating: 6.4,
      reviews: 840,
      rating: 6.7,
      img: "dungeonsdragon"
    },
    {
      title: "The Dragon's Prophecy",
      imdbRating: 7.5,
      reviews: 1310,
      rating: 8.2,
      img: "dungeonsdragon"
    },
    {
      title: "The Dungeon Chronicles",
      imdbRating: 6.8,
      reviews: 950,
      rating: 7.1,
      img: "dungeonsdragon"
    },
    {
      title: "Dragon's Legacy",
      imdbRating: 7.2,
      reviews: 1200,
      rating: 7.9,
      img: "dungeonsdragon"
    },
]  
export const movieTags = [
  "Horror",
  "Animation",
  "Action",
  "Comedy",
  "Thriller",
  "Sci-Fi",
  "Drama",
  "Adventure",
  "Fantasy",
  "Romance"
];
