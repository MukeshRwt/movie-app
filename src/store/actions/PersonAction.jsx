import axios from '../../utils/axios'
import { loadperson } from '../reducers/PeopleSlice'
export {removeperson} from '../reducers/PeopleSlice'


export const asyncloadperson = (id)=> async(dispatch,getstate)=>{
    try {
        const detail = await axios.get(`person/${id}`)
        const externalid =await  axios.get(`person/${id}/external_ids`)
        const combinecredit =await  axios.get(`person/${id}/combined_credits`)
        const tvecredit =await  axios.get(`person/${id}/tv_credits`)
        const moviecredit =await  axios.get(`person/${id}/movie_credits`)
        let ultidetails = {
            details:detail.data,
            externalid:externalid.data, 
            combinecredit:combinecredit.data,
            moviecredit:moviecredit.data,
            tvecredit:tvecredit.data
        }
        console.log(ultidetails)
        dispatch(loadperson(ultidetails))
    } catch (error) {
        console.log(error)
    }
}