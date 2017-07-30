//Definindo as funções de Sucesso e Fracasso p/ a atenticação

var authenticationSuccess = function() {
  console.log('Successful authentication');
  //$('#authStatus').innerText = "Successful authentication";
  document.getElementById('authStatus').innerText = 'Successful authentication';
};

var authenticationFailure = function() {
  console.log('Failed authentication');
  //$('#authStatus').innerText = 'Failed authentication';
  document.getElementById('authStatus').innerText = 'Successful authentication';
};

//Função de Autenticação / Autorização

window.Trello.authorize({
  type: 'popup',
  name: 'Getting Started Application',
  scope: {
    read: 'true',
    write: 'true' },
  expiration: 'never',
  success: authenticationSuccess,
  error: authenticationFailure
});


var myList = '583c33e08a0e981202440c12';
var cartao;

var creationSuccess = function (data) {
  console.log('Card created successfully.');
  console.log(JSON.stringify(data, null, 2));
  //cartao = JSON.parse(JSON.stringify(data, null, 2));
  cartao = data;
};



function AddTrelloCard (){

  var newCard = {
    name: document.getElementById('tituloCartao').value,
    desc: document.getElementById('descCartao').value,
    // Place this card at the top of our list
    idList: myList,
    pos: 'top'
  };

  window.Trello.post('/cards/', newCard, creationSuccess);

}



function UpdateTrelloCard(){
  console.log('UPDATE CARD: ' + cartao.id);
  window.Trello.put('/cards/'+cartao.id, {name: 'New Test Card'});
}


//Carregando o primeiro JSON De um card qualqr
//https://trello.com/c/NYZaVJpt/58-copiar-a%C3%A7%C3%A3o-para-outro-sistema-tela.json
