const output = document.querySelectorAll('div')[0]; 
const userInput = document.querySelector('#userInput');
const InputSection = document.querySelector('.inputSection')
let ButtonDelete = false; 

function showMenu(){
   InputSection.style.visibility = 'visible'; 
}

function setup(){
   InputSection.style.visibility = 'hidden'; 
    if(userInput.value.trim() == ''){
        return; 
    }
    
    let userChoice = document.createElement('div');
    let content = document.createElement('div');
    let wrapper = document.createElement('div');
    let WrappingUpUserChoice = document.createElement('div');
    
    let buttonTrash1 = document.createElement('button');
    let input = document.createElement('textarea');

    let Text =  document.createElement('p');

    input.setAttribute('onkeyup', 'saveText(this)'); 

    wrapper.classList.add('wrapper'); 
    content.classList.add('content');
    userChoice.classList.add('userChoice');

    buttonTrash1.classList.add('fa', 'fa-trash');

    // Calling to delete 
    wrapper.setAttribute('onclick', 'DeletingWrapper(this)');
    buttonTrash1.setAttribute('onclick', 'DeletingWrapper(this)');

    
    // Setting up the title(day to train)
    wrapper.append(Text); 
    Text.append(userInput.value); 

    // Adding buttons to the content div 
    content.append(buttonTrash1);


    // Adding choice
    userChoice.append(input); 


    // Adding everything together
    WrappingUpUserChoice.append(userChoice); 


    wrapper.append(content); 
    wrapper.append(WrappingUpUserChoice); 

    output.append(wrapper);
    userInput.value= '';

}

function saveText(text){
    console.log( text.value);
    text.innerHTML = text.value
}

// Checking if it is the "button" that is clicked is 
// if yes delete otherwise leave it
function DeletingWrapper(wrapper){
    if(Object.prototype.toString.call(wrapper) == '[object HTMLButtonElement]'){
        ButtonDelete = true;
            return;  
    }
   
    if(ButtonDelete == true){
        wrapper.outerHTML = ''; 
            ButtonDelete = false; 
                return; 
    }
}

window.addEventListener('beforeunload', () => {
    localStorage.setItem('key', output.innerHTML);
})


window.onload = () => {
    if(window.localStorage.length == 0){
        return; 
    }
    output.innerHTML = localStorage.getItem('key'); 

}

function closing(){
    InputSection.style.visibility = 'hidden';
    userInput.value= '';
}

// <div class="wrapper">
// <p>Content goes here</p>
// <div class="content">
//     <button class="fa fa-trash"></button>
// </div>
// <div>
//     <div class="userChoice">
//     <textarea></textarea>
// </div>
// </div>
// </div>
