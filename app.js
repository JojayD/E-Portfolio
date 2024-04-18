const scaleFactor = 1 / 20;

let moveBackground = (event)=>{
  const shapes = document.querySelectorAll(".shape")
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for(let i = 0; i < shapes.length; ++i){
    const isOdd = i % 2 !== 0; /*Direction for the movement for the odd shapes */
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px,${y * boolInt}px)`
  }
}

function contact(event){
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      'service_gxqaaxr',
      'template_i4pz2nn',
      event.target,
      'user_GdbnplrUra4FlTD3UNmKB'
    ).then (()=>{
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible"; 
    }).catch(()=>{  
      loading.classList.remove("modal__overlay--visible");
      alert('The email service currently unavailable. Contact me on professional.josephd@gmail.com');
    });

}

var isModalOpen = false;

function toggleModal(){
  
  if(isModalOpen){
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

let contrastToggle = false;

let toggleContrast = () =>{
  contrastToggle = !contrastToggle
  if(contrastToggle){
    document.body.classList += " dark-theme"
  }else{
    document.body.classList.remove("dark-theme");
  }
}

var geo = " Geo";