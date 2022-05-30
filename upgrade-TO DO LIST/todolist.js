function init() {
    console.log("Manipulando el DOM con JS ok!");
  }
  
  window.onload = init;
  
  const myInput = document.querySelector(".input_task");
  const addButton = document.querySelector(".button_list"); 
  const taskList = document.querySelector(".ul_task"); // selecciono el nodo del ul no su padre .task_container 
  const empty = document.querySelector(".empty"); 
  
  addButton.addEventListener("click", (myEvent)=> {
    myEvent.preventDefault(); // Evita que se envíe el formulario y pete. Evita que recargue la página
    // console.log(myEvent);

    const myText = myInput.value; //guardo el valor del input en una variable

    const li = document.createElement("li"); // creo el li donde van a ir mis tareas pendientes
    const p = document.createElement("p"); // el p que va en cada li 
    p.innerText = myText; // texto para el p, en este caso dinámico porque myText es = myInput.value (lo que escribo en el campo input será el texto)

    empty.classList.add("empty_task");
    
    let buttonDelete = document.createElement("button"); // creo botón de eliminar 
    buttonDelete.classList.add(".buttonDelete1"); // con innerHTML incluyo la imagen dentro del botón 
    buttonDelete.innerHTML = ` 
      <div class="contentButtonDelete">
        <img src="/img/Ellipse 1.svg">
      </div>
    `
    li.appendChild(buttonDelete);
    li.appendChild(p);  // se incluye el p en el li 
    taskList.appendChild(li); // se añade el li en el ul (que tiene la clase taskList)

    myInput.value = ""; // campo queda vacío después de escribir la tarea 

  });



/*
    let buttonDelete = document.querySelector(".buttonDelete1");
    const deleteMyTask = function () {
    const li = this.parentNode;
    const taskList = li.parentNode;
    taskList.removeChild(li);
  }; 

    buttonDelete.onclick = deleteMyTask;
*/

/*
    let buttonDelete = document.querySelector(".buttonDelete1");
    buttonDelete.addEventListener("click", (e) => {
    li = this.parentNode;
    taskList = li.parentNode;
    taskList.removeChild(li);
  }); 
  */

  /*
  let buttonDelete = document.querySelector(".buttonDelete1");
    buttonDelete.addEventListener("click", (e) => {
    taskList.remove();
  }); 
  */

  
  // Con remove lastElementChild
  
  function removeChild() {
    let myList = document.querySelector(".ul_task");
    let item = taskList.lastElementChild;
    myList.removeChild(item);
  };



  // Remove sobre parentElement
  /*
    buttonDelete.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    taskList.removeChild(item);
    });
*/ 


/* Cambiando el contenido 

  let buttonDelete = document.querySelector(".buttonDelete1"); 
  buttonDelete.addEventListener("click", (e) => {
    buttonDelete.innerHTML = `
    <div class="contentButtonDelete">
      <img src="/img/Ellipse ok.svg">
    </div>`
  });
*/ 












