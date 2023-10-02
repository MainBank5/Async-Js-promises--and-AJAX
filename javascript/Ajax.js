const xhr = new XMLHttpRequest();

/*5 values of readystateg change 
0 - request not initialized 
1- server connection established and response is ready to be processed.
2- user request received. user can interact with page (e.g., click a link)
3- processing request
4- request processing finished and response is ready
*/


//xhr.open('GET' , '/movies.json');

/*xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.responseText))
    }
}*/

//xhr.send()


//api request 

xhr.open('GET', 'https://api.github.com/users/bradtraversy/repos')

xhr.onreadystatechange = function () {
    //if the state changes, check for status code
    if (this.readyState === 4 && this.status === 200){ 
        const data = JSON.parse(this.responseText);

        data.forEach((repo) => {
            let li = document.createElement('li');
            li.innerHTML = repo.name + " - " + repo.description

            document.querySelector('#results').appendChild(li)
            
        })
    }

    

}



xhr.send()

//callback hell

function getdata(endpoints) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoints);

    xhr.onreadystatechange = function () {
        if(this.readyState=== 4 && this.status === 200) {
            console.log(JSON.parse(this.responseText));
          
        }
    }

    xhr.send()


}


getdata('/actors.json')

