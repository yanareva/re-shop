import {useNavigate, useParams} from "react-router-dom";
import {useGetProductQuery} from "../../features/api/apiSlice";
import {useEffect} from "react";
import {ROUTES} from "../../utils/routes";

const SingleProduct = () => {
    const {id} = useParams();
    const {data,isLoading,isFetching,isSuccess} = useGetProductQuery({id});
    useEffect(()=>{
        if(!isFetching && !isLoading && !isSuccess){
            useNavigate.push(ROUTES.HOME)
        }
    })
    console.log(data)
    return <div>Single</div>
}
export default SingleProduct;
