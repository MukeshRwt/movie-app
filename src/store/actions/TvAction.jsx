import axios from '../../utils/axios'
import { loadtv } from '../reducers/TvSlice'
export {removetv} from '../reducers/TvSlice'
export const asyncloadtv = (id)=> async(dispatch,getstate)=>{
    try {
        const detail = await axios.get(`tv/${id}`)
        const externalid =await  axios.get(`tv/${id}/external_ids`)
        const recommand =await  axios.get(`tv/${id}/recommendations`)
        const similar =await  axios.get(`tv/${id}/similar`)
        const videos =await  axios.get(`tv/${id}/videos`)
        const translations =await  axios.get(`tv/${id}/translations`)
        const watchProvider =await  axios.get(`tv/${id}/watch/providers`)
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
        dispatch(loadtv(ultidetails))
    } catch (error) {
        console.log(error)
    }
}