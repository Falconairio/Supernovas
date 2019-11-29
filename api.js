function main() { 

    const getDataForm = document.querySelector('#get-data-form');
    // Select sections that hold the forms
    const getIdSection = document.querySelector('#get-data-section');
    
    
    
    getDataForm.addEventListener('submit', function(e) {
        // Prevent the form reloading of the page
        e.preventDefault();
    
    
        // Get the id of the data from the input field
        const title = document.querySelector('#data-title').value;
    
        // If no id was provided, stop the function
    
        if (!title) return;
    
        // Make a GET request -  get one data
        axios
            .get(`https://eonet.sci.gsfc.nasa.gov/api/v2.1/events`)
            .then(response => {
                // Grab all input fields from the update form (still invisible)
                // const inputNodes = updateForm.querySelectorAll('input');
                // const inputElements = [...inputNodes];
                const events = response.data.results;
                // console.log(response.data.results);
                const resultList = document.querySelector('.data-results');
    
                let htmlString = "";
                events.forEach(function(event) {
                    htmlString += `
                    <div style = "
                                display:flex; 
                                flex-direction:column;
                                justify-content:space-around"
                                    >
                            <h2 style="text-align:center;
                                margin-top:10%;
                                margin-bottom:5%;
                                font-size:50px;" 
                            class='event-title event-details-link' 
                            data-eventid='${events.id}'
                            >
                            ${events.title} (${events.release_date.slice(0,4)})
                            </h2>
                                </div>`
    
                })
                resultList.innerHTML = htmlString;
    
                const getEventDetailLinks = document.querySelectorAll('.event-details-link')
    
    
                getEventDetailLinks.forEach((element) => {
    
                    element.addEventListener('click', (e) => {
                        const eventId = element.dataset.eventid;
    
                        // axios.get(`/private/eventDetail/get/${eventId}`)
                        window.location.assign(`/private/eventDetail/${eventId}`)
                    })
    
    
                })
    
            })
            .catch(err => console.log(err));
    })
    
    }
    
    window.addEventListener('load', main);