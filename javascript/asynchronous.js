/*Javascript is synchronous meaning its executed sequentially - the first code has to be executed before the second
however, this might cause some delay when running blocking/complex and timeconsuming functions, which is why we use 
async javascript web apis. They help start a potentially long-running task and still be able 
to be responsive to other events while that task runs, rather than having to wait until that task has finished
*/ 
//examples of these web APIs include

//setTimeout and setInterval 

//setTimeout syntax

//setTimeout(function, time) the time is in miliseconds 

setTimeout(function() {
    console.log('Hello from callback')
}, 200);

console.log('Hello from global');

setTimeout( () => {
    console.log('Adele hello')
}, 200)

//you can also used named functions 

function changeHeading () {
    document.querySelector("h1").textContent = "I changed the heading" ; 
}

//setTimeout(changeHeading, 2000);

const timeId = setTimeout(changeHeading, 2000);

//you can cancel/stop the timeout in using clearTimeOut()

document.querySelector('.cancel').addEventListener('click', () => {
    clearTimeout(timeId);
    console.log(timeId);
    console.log('timeID cancelled');
});

//setInterval - continously calls a function at specified intervals(in milisecond).
//This goes on until clearInterval() is called or the window is closed. The setInterval follows the same syntax
//as setTimeout. setInterval(function, time) time is in milisecond

/*const intervalId = setInterval( () => {
    console.log(Date.now())
}, 1000);*/



/*function myCallBack () {
    console.log(Date.now());
}*/

//the program will continually call the date until we set the clearInterval method to stop it

/*document.querySelector('.stop').addEventListener('click', () => {
    clearInterval(intervalId)
})*/

document.querySelector('.stop').addEventListener('click', stopChange);

function stopChange() {
    clearInterval(intervalId);
}


//const colorChange = setInterval(change, 1000);

let intervalD;

function startchange () {
    if(!intervalD) {
        intervalD = (setInterval(changeColor, 1000))
    }
}

function changeColor () {
    if(document.querySelector('body').style.backgroundColor !== 'black') {
        document.querySelector('body').style.backgroundColor = 'black'
        document.querySelector('body').style.color = 'white'
}
    else{
        document.querySelector('body').style.backgroundColor = 'white'
        document.querySelector('body').style.color = 'black'
    }
    console.log('working')
}
    
document.querySelector('.start').addEventListener('click', startchange)


document.querySelector('.stop').addEventListener('click', () => {
    clearInterval(intervalD);
})


setTimeout(function(){
    console.log('buddy is fine')
}, 2000)

//call back functions
function toggle (e) {
    e.target.classList.toggle("danger")
    console.log(e.target)
}
document.querySelector('.click').addEventListener('click', toggle);

const posts = [
    {title: 'Post One', body:'This post one'},
    {title: 'Post Two', body:'This post two'},
    
];

/*function getPosts () {
    setTimeout (() => {
        posts.forEach(function (post) {
            const div= document.createElement ('div');
            div.textContent = post.title + " - " + post.body
            document.querySelector('#posts').appendChild(div)
        });
    }, 2000)
}*/



//getPosts()


function getPosts () {
    setTimeout(posts.forEach((post) => {
        const div= document.createElement ('div');
        div.textContent = post.title + " - " + post.body
        document.querySelector('#posts').appendChild(div) 
    }), 1000)
}

//getPosts ();


/*function createPost (post, kb) {
    setTimeout( () =>{
        posts.push(post)
        kb()
    }, 2000)
}*/

//createPost({title: 'Post three', body:'This is post three'}, getPosts);

//refactor to use a promise 
function createPost (post) {

    return new Promise((resolve, reject) => {
        
        setTimeout( () =>{

            let error = false
            if (!error){
                posts.push(post);
                resolve() 
            } else {
                reject('Error has occured')
            }
            
        } ,2000)
    }) 
    
}

function showError (erra) {
    const h3 = document.createElement('h3')
    h3.textContent = erra
    document.getElementById("posts").appendChild(h3)
}

createPost({title: 'Post three', body:'This is post three'})
.then(getPosts).catch(showError)








function hi ( name, cb) {
    console.log('hello' + name)
    cb()
}

function vm ( ) {
    console.log('this is my callback')
}

hi(" Eliud", vm);

//callback hell


function getData (endpoints) {
    const xr = new XMLHttpRequest()
}
