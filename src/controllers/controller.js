export const fetchData = async (year = 2000, make = 'honda', model = 'civic') => {
    try {
        const response = await fetch(`http://localhost:5000`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                year: year,
                model: model,
                make: make
            })
        }).then(res => res.text());

        console.log(JSON.parse(response));
        return JSON.parse(response);
         
    } catch(error) {
        console.error(error);
        return false;
    }
}