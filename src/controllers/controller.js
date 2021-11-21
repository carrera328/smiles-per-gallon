export const fetchData = async (year = 2000, make = 'honda', model = 'civic') => {
    try {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&make=${make}&model=${model}&year=${year}`, {
            method: 'GET'
        }).then(res => res.text());

        console.log(JSON.parse(response.slice(2, -1).slice(0, -1)));
        return JSON.parse(response.slice(2, -1).slice(0, -1));
         
    } catch(error) {
        console.error(error);
        return false;
    }
}