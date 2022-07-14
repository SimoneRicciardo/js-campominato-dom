let containerGridDom = document.getElementById('container-grid');

let title = document.querySelector('.title')

const bomba = generaBombe();

function generaBombe() {
  console.log('STO RICHIAMANDO GENERABOMBE');
  let bombe = [];

  let min = 1;

  let max = 100;

  console.log(bombe);

  for( let i = 1; i <= 16; i++){

    let numero_random = Math.floor(Math.random() * (max - min) + min);
    bombe.push(numero_random);
  }

  return bombe;
}


let MainButton = document.getElementById('main-button');
MainButton.addEventListener('click', function(){


  
  containerGridDom.innerHTML = '';
  
  for( let i = 1; i <= 100; i++ ) {
    
    const square = generateSquare(i);
    
    square.addEventListener('click',
      function (){
        let cell_n = i;
        console.log(cell_n);
        this.classList.toggle('clicked');

        let prova = false;
        for (let x = 0; x < cell_n; x++){
            if (bomba == cell_n[x]){
                prova = true;
            }}
            
             if ( prova == true){
              alert('ok')
            }
          

      }
    );
    
    containerGridDom.append(square);
  }
  
  title.classList.remove('show');
  title.classList.add('hidden');
  
});



function numeroRandom(){
  return Math.floor(Math.random()* 16 + 1);
}

function generateSquare(numero){
  
  const square = document.createElement('div');
  square.classList.add('square-easy');
  square.append(numero)
  
  return square;
}

/*let livello = parseInt(document.getElementById('livello').value);

  switch (livello) {
      case 1:

        break;
      case 2:

        break;
      case 3:

        break;
    }*/