let select = document.getElementById('select');
select.addEventListener('change', function(){
    let valor = this.value;
    window.location.href = valor;
});