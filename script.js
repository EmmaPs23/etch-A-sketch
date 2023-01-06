const container = document.querySelector('#container');
const wrapper = document.querySelector('#wrapper');
const range = document.querySelector('#range');
const rangeValuePrinter = document.querySelector('#rangeValuePrinter');
const ShowGrid = document.querySelector('#showGrid');
const clear = document.querySelector('#clear');
const colorPicker = document.querySelector('#colorPicker');
const backgroundPicker = document.querySelector('#backgroundPicker');
const BackgroundPickerBtn = document.querySelector('#BackgroundPickerBtn');
const randomColor = document.querySelector('#randomColor');
const rangeValue = range.value;


//it generates a random six digits hexadecimal value
let getRandomColor = function(){
    
    let letters = ["A", "B", "C","D", "E", "F", 0,  1, 2, 3, 4, 5, 6, 7, 8 , 9];
    
    let color = '#';
    //this for loop takes 6 times random letters or number and sum them to creater random hexadecimal colors.
    for(let i = 0; i < 6; i++){
        let randomvalues  = letters[Math.floor(Math.random() * 16)];
        color += randomvalues;     
    }
    return color;
}

//it takes the range input value and generates all the predeterminated grid cells = value of sixteen 
for(let i = 0; i < rangeValue * rangeValue; i++)
{
    const div = document.createElement('div');

    rangeValuePrinter.textContent = rangeValue;

    //function that gives to divs a background color picked by the user.
    let hoverOver = ()=>{
        div.style.backgroundColor = colorPicker.value;
    };

    let isShowGridOn = false;
    ShowGrid.addEventListener('click', ()=>{
        isShowGridOn = !isShowGridOn;
        if(isShowGridOn){
            div.classList.add('show-grid');
            ShowGrid.textContent = "Hide grid";
        }
        else{
            div.classList.remove('show-grid');
            ShowGrid.textContent = "Show grid";
        }
    });

    BackgroundPickerBtn.addEventListener('click', ()=>{
        div.style.backgroundColor = backgroundPicker.value;
    });

    let mouseClicked = false;
    
    wrapper.addEventListener('mousedown', ()=>{
        mouseClicked = !mouseClicked;
        if(mouseClicked){
            div.addEventListener('mouseover', hoverOver);
        }
        else{
            div.removeEventListener('mouseover', hoverOver);
        }
    });

    //it gives to all the grid cells the default color.
    clear.addEventListener('click', ()=>{
        div.style.backgroundColor = "rgba(182, 178, 178)";
    });
    
    //this function calls the getRandomColor function as the colorPicker value.
    let randomHoverOver = ()=>{
        colorPicker.value = getRandomColor();
    }
    
    let isListening = false;
    randomColor.addEventListener('click', ()=>{
        isListening = !isListening;
        if(isListening){    
            div.addEventListener('mouseover', randomHoverOver);
            randomColor.textContent = "Random Color: On";
        }
        else{
            div.removeEventListener('mouseover', randomHoverOver);
            randomColor.textContent = "Random Color: Off";
        }
    });

    wrapper.appendChild(div);
};


//it takes a range input value that the user would choose, and generates the amount of grid cells depending of that value
range.addEventListener('change', ()=>{

    wrapper.innerHTML = " ";

    const rangeValue = range.value;

     rangeValuePrinter.textContent = rangeValue;

    wrapper.style.cssText = `grid-template-columns: repeat(${rangeValue}, 1fr)`;
    
    for(let i = 0; i < rangeValue * rangeValue; i++)
    {
        const div = document.createElement('div');
        
        let isShowGridOn = false;
        ShowGrid.addEventListener('click', ()=>{
            isShowGridOn = !isShowGridOn;
            
            if(isShowGridOn){
                div.classList.add('show-grid');
                ShowGrid.textContent = "Hide grid";
            }
            else{
                div.classList.remove('show-grid');
                ShowGrid.textContent = "Show grid"
            }
        });
        
        BackgroundPickerBtn.addEventListener('click', ()=>{
            div.style.backgroundColor = backgroundPicker.value;
        });

        let hoverOver = ()=>{
            div.style.backgroundColor = colorPicker.value;
        };

        let mouseClicked = false;

        wrapper.addEventListener('mousedown', ()=>{
            mouseClicked = !mouseClicked;
            if(mouseClicked){
                div.addEventListener('mouseover', hoverOver);
            }
            else{
                div.removeEventListener('mouseover', hoverOver);
            }
        });
        
        clear.addEventListener('click', ()=>{
            div.style.backgroundColor = "rgb(182, 178, 178)";
        });
        
        let randomHoverOver = ()=>{
            colorPicker.value = getRandomColor();
        }
        
        let isListening = false;
        randomColor.addEventListener('click', ()=>{
            isListening = !isListening;
            if(isListening){    
                div.addEventListener('mouseover', randomHoverOver);
                randomColor.textContent = "Random Color: On";
            }
            else{
                div.removeEventListener('mouseover', randomHoverOver);
                randomColor.textContent = "Random Color: Off";
            }
        });

        
        wrapper.appendChild(div);
    };
    
});