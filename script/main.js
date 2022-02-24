const $app = document.getElementById("app");


const contact = params => {
    // const src = https:://.../women/${params.id}.jpg
    const num = `+34`
    return `
    <div class="contact-container">
          <div class="contact">
            <span>${params.name}</span>
            <div class="button-container">
              <div class="button">X</div>
            </div>
          </div>
  
          <div class="contact-info">
            <span>+34 #########</span>
          </div>
    </div>
    `
}

$app.innerHTML += contact({ name: 'Pepe' });
$app.innerHTML += contact({ name: 'Juan' });
$app.innerHTML += contact({ name: 'Rosa' });


$app.querySelectorAll('.contact-container').forEach(cont => {
    cont.addEventListener('click', () => {
        cont.childNodes[3].classList.toggle('open');
        cont.childNodes[1].childNodes[3].classList.toggle('show');
    })
})

