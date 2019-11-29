function main() { 

    const getDataForm = document.querySelector('#get-data-form');
    // Select sections that hold the forms
    const getIdSection = document.querySelector('#get-data-section');
    
    
    
    getDataForm.addEventListener('submit', function(e) {
        // Prevent the form reloading of the page
        e.preventDefault();
    
    
        // Get the id of the data from the input field
        const name = document.querySelector('#data-name').value;
    
        // If no id was provided, stop the function
    
        if (!name) return;
    
        // Make a GET request -  get one data
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=885dbfba88f11b7023082ad1956f5310&language=en-US&query=${name}&page=1&include_adult=false`)
            .then(response => {
                // Grab all input fields from the update form (still invisible)
                // const inputNodes = updateForm.querySelectorAll('input');
                // const inputElements = [...inputNodes];
                const events = response.data.results;
                // console.log(response.data.results);
                const resultList = document.querySelector('.movie-results');
    
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
                            data-eventid='${event.id}'
                            >
                            ${event.title} (${event.release_date.slice(0,4)})
                            </h2>
                            <img style= "width:500px;height:auto;margin-left:25%;margin-right:25%"
                            class="event-details-link" 
                            src="https://image.tmdb.org/t/p/w500${event.poster_path}"
                                data-eventid='${event.id}'
                                />
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