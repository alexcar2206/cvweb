function openModal() {
    // Obtener los valores de los campos a modificar
    var projectName = document.getElementById('project-title').textContent;
  
    // Modificar los campos dentro de modal-wrapper
    document.querySelector('#modal-wrapper input[name="uname"]').value = projectName;
  
    // Mostrar modal-wrapper
    document.getElementById('modal-wrapper').style.display = 'block';
  }
  