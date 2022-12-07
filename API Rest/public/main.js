//inicializamos socket
const socket = io.connect();

//funcion para renderizar los productos
const renderProducts = () => {
  const productsContainer = document.getElementById("productsContainer");     
  productsContainer.innerHTML = "";

  console.log('probando inicio');
  fetch('/lista-productos')
  .then(response => response.json())
  .then(data => {      
      
      data.forEach(el => {
      productsContainer.innerHTML += `
      <div class="productContainer">
              <div class="productImg">
                  <img src=${el.thumbnail} alt="imagen de ${el.name}">
              </div>
              <div class="productInfo">
                  <div>
                      <h3>${el.name}</h3>
                      <p>$${el.price}</p>
                  </div>
                  <p class="info">${el.description}</p>         
              </div>
          </div>
      `;
      });
  })
  .catch(err => console.log(err));  
}



//funcion que se encarga de renderizar el listado de productos
/* function renderProducts() {
  fetch('/lista-productos')
  .then(response => response.json())
  .then(data => {    
    const html = data.map((el, index) => {   
        return(
          `<tr>
            <td>${el.name}</td>
            <td>${el.price}</td>
            <td><img src="${el.thumbnail}" class="productImage"></td>                  
          </tr>`
        )
    }).join(" ");
    document.getElementById('tbodyList').innerHTML = html;
  });  
} */

//funcion que se encarga de renderizar los mensajes
function renderMessages(data) {
  const html = data.map((el, index) => {
      return(`<div>
          <p class="emailMensaje">${el.email}</p>
          <p class="fechaMensaje">[${el.fecha}]:</p>
          <p class="mensajeMensaje">${el.mensaje}</p> </div>`)
  }).join(" ");
  document.getElementById('mensajes').innerHTML = html;
}

//funcion que toma la info de los mensajes
function addMessage(e) {
  const mensaje = {
      email: document.getElementById('mail').value,
      fecha: `${(new Date).toLocaleDateString()} - ${(new Date).toLocaleTimeString()}`,      
      mensaje: document.getElementById('mensaje').value
  };    
  socket.emit('new-message', mensaje);
  return false;
}

socket.on('productos', function() { renderProducts(); });
socket.on('messages', function(data) { renderMessages(data); });



