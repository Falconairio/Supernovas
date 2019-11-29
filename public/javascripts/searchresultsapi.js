
function main() { 
    
    const formData = document.querySelector('.dataid').innerHTML; 
 
        axios
            .get(`https://eonet.sci.gsfc.nasa.gov/api/v2/events?limit=20&days=365&status=open`)
            .then(response => {
                let newData = [];
                for(let i = 0; i < response.data.events.length; i++) {
                    if(response.data.events[i].id.includes(formData)) {
                        newData.push(response.data.events[i]);
                    };
                }
                console.log(newData);
                const resultList = document.querySelector('.data-results');
    
                let htmlString = "";
                newData.forEach(function(event) {
                    htmlString += `
                    <a href = 'searchResult/?id=${event.id}'>
                        <h2>${event.title}</h2>
                        <p>Category:${event.categories[0].title}</p>
                    </a>
                    `
    
                })
                resultList.innerHTML = htmlString;
            })
            .catch(err => console.log(err));
    }
    
    window.addEventListener('load', main);