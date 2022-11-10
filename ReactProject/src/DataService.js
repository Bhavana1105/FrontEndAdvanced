import axios  from "axios";
export let dataServiceObj = {
    getAllrecipies
};
function  getAllrecipies()
{
    let url =  "http://localhost:3500/recipies";
    return axios.get(url);
}
export default dataServiceObj;




 