form.addEventListener('submit', function(e) {
    Local.adiciona('circulo', {
      area: form.area.value,
      perimetro: form.perimetro.value
    });  
});
