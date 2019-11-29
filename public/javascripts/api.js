
function main() { 
    
    const getDataForm = document.querySelector('#get-data-form');
    // Select sections that hold the forms 
    
    getDataForm.addEventListener('submit', function(e) {
        // Prevent the form reloading of the page
        e.preventDefault();
    
    
        // // Get the id of the data from the input field
        const title = document.querySelector('#data-title').value;
    
        // If no id was provided, stop the function
    
        // if (!title) return;
    
        // Make a GET request -  get one data
        axios
            .get(`https://eonet.sci.gsfc.nasa.gov/api/v2/events?limit=5&days=20&status=open`)
            .then(response => {
                // Grab all input fields from the update form (still invisible)
                // const inputNodes = updateForm.querySelectorAll('input');
                // const inputElements = [...inputNodes];
                let newData = [];
                for(let i = 0; i < response.data.events.length; i++) {
                    if(response.data.events[i].title.includes(title)) {
                        newData.push(response.data.events[i]);
                    };
                }
                console.log(newData);
                const resultList = document.querySelector('.data-results');
    
                let htmlString = "";
                newData.forEach(function(event) {
                    htmlString += `
                    <a>
                        <h2>${event.title}</h2>
                        <p>Category:${event.categories[0].title}</p>
                    </a>
                    `
    
                })
                resultList.innerHTML = htmlString;
            })
            .catch(err => console.log(err));
    })
    }
    
    window.addEventListener('load', main);