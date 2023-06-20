import axios from 'axios'
import {useQuery} from 'react-query'

export default function GetUpcomingReleases(){
    return useQuery(['upcomingReleases'],async()=>{
        const resposne = await axios.get('https://api.themoviedb.org/3/movie/upcoming',{
            params: {language: 'en-US', page: '1'},
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWNiNzk0NTQwM2RhM2QwNTFlODM4YzBjOGQ2MWI2MiIsInN1YiI6IjY0OGM4MmIyYzJmZjNkMDBmZmJhNmY3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PYkel6Ih3T5ojKG-3yspfoeLCQ90OWdolXUi5r35WHk'
            }
        })
        return resposne.data;
    })
}