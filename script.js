window.addEventListener('load',()=>{
    const addTaskForm = document.querySelector('.header__form');
    const taskHeadInput = document.querySelector('.header__text');
    const taskList = document.querySelector('.main__task-list');
    
    const counter = document.querySelector('.main__counter');
    let i = 0;


    addTaskForm.addEventListener('submit', (e) => {
        e.preventDefault()  
        
        //set maxlength to 47 for all inputs
        let max = taskHeadInput.getAttribute('maxlength');
        max.length = 47;

        //asks to fill out the task
        const task = taskHeadInput.value;
        
        //resets input value after submit event
        taskHeadInput.value= ""
        
        if(task){
            makeTask() 
            //counts the tasks
            i++;
            counter.innerHTML=`(${i})`  
        } else {
            alert('Please, describe the task!')
        }
        
        //creates a task
        function makeTask(){
        const taskElement = document.createElement('div');
        taskElement.classList.add('main__task');
        taskList.append(taskElement);
        
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('main__input');
        input.value = task;
        input.readOnly = 'true'
        taskElement.append(input)

        const actions = document.createElement('div');
        actions.classList.add('main__actions');
        taskElement.append(actions)

        
        const edit = document.createElement('a');
        edit.href = '#';
        edit.classList.add('main__edit');
        edit.innerHTML = 'Edit';
        actions.append(edit);
        
        const erase = document.createElement('a');
        erase.href = '#';
        erase.classList.add('main__delete');
        erase.innerHTML = 'Delete';
        actions.append(erase);

        //changes "Edit" button to "Save" button and allows to change the input's value
        edit.addEventListener('click', (e)=>{
            e.preventDefault;
            if (edit.innerHTML.toLowerCase() == 'edit'){
                input.readOnly = '';
                input.style.color = '#FFA07A'
                edit.innerHTML = 'Save'
                edit.style.color = '#FFA07A'
            } 
            else{
                edit.innerHTML = 'Edit'
                input.style.color = '#B0C4DE'
                input.readOnly = 'true'
                edit.style.color = '#50C878'
            }
        })
        //deletes the task
        erase.addEventListener('click', (e)=>{
            e.preventDefaultl;
            taskList.removeChild(taskElement);
            
            //decreases tasks counter and hides it if there isn't any tasks
            i--
            counter.innerHTML = `(${i})`
            if (i == 0){
                counter.innerHTML=''
            }
            
        });
        // input.style += text-decoration: line-through
        input.addEventListener('dblclick',()=>{
            input.classList.toggle('toggle')
        }) 
    
    }
    })
})
