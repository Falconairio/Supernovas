
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
            .get(`https://eonet.sci.gsfc.nasa.gov/api/v2/events?limit=20&days=365&status=open`)
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
                    <div style="
                    display: flex;
                    flex-direction: column;
                    position: absolute;
                    margin: auto;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    width: 60vw;
                    height: 30vh;
                    background-color:#0066b2;
                    border-radius: 25px;
                    border: 5px solid #ec1c24;
                    ">
                    <a style="
                    text-align:center;
                    margin-top:10%;
                    margin-bottom:5%;
                    font-color: white;
                    letter-spacing: 1.75px;
                    font-weight: bolder;
                    margin: 10px 20px 10px 20px;
                    font-size:1em;"

                    href = 'searchResult/?id=${event.id}'>
                        <h2>${event.title}</h2>
                        <p>Category:${event.categories[0].title}</p>
                    </a>
                    </div>
                    `
    
                })
                resultList.innerHTML = htmlString;
            })
            .catch(err => console.log(err));
    })
    }
    
    window.addEventListener('load', main);