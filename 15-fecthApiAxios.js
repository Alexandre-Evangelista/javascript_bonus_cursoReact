/* fetch('15-pessoas.json').then(response => response.json())
.then(json => {
    const ul = document.createElement('ul');
    json.forEach(pessoa => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${pessoa.nome}</strong>: ${pessoa.idade} anos`;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}); */
axios('15-pessoas.json')
  .then(response => {
    const pessoas = response.data; // aqui estão os dados do JSON
    const ul = document.createElement('ul');
    pessoas.forEach(pessoa => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${pessoa.nome}</strong>: ${pessoa.idade} anos`;
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
  })
  .catch(error => {
    console.error('Erro ao carregar JSON:', error);
  });
