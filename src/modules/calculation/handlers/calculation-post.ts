import { HttpMethod } from "../../../core/http-method";
import { Endpoint } from "../../../core/endpoint";

async function calculationPost(params: any){
    return "Calculator POST endpoint";
}

export const endpoint: Endpoint = {
    type: HttpMethod.GET,
    path: '/calculation',
    function: calculationPost
};
