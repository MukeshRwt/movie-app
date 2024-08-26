import axios from '../../utils/axios'
import { loadmovie } from '../reducers/MovieSlice'
export {removemovie} from '../reducers/MovieSlice'


export const asyncloadmovie = (id)=> async(dispatch,getstate)=>{
    try {
        const detail = await axios.get(`movie/${id}`)
        const externalid =await  axios.get(`movie/${id}/external_ids`)
        const recommand =await  axios.get(`movie/${id}/recommendations`)
        const similar =await  axios.get(`movie/${id}/similar`)
        const videos =await  axios.get(`movie/${id}/videos`)
        const translations =await  axios.get(`movie/${id}/translations`)
        const watchProvider =await  axios.get(`movie/${id}/watch/providers`)
        let ultidetails = {
            details:detail.data,
            externalid:externalid.data,
            translations:translations.data.translations.map((t)=>t.english_name),
            recommand:recommand.data.results,
            similar:similar.data,
            videos:videos.data.results,
            watchProvider:watchProvider.data.results.IN,
        }
        console.log(ultidetails)
        dispatch(loadmovie(ultidetails))
    } catch (error) {
        console.log(error)
    }
}