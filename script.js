// Sélection des boutons de chaque article
const btnPlus = document.querySelectorAll('.plus');
const btnMinus = document.querySelectorAll('.moins');
const btnDelete = document.querySelectorAll('.fa-trash');
const btnLike = document.querySelectorAll('.fa-heart');
const totalCommande = document.getElementById('tyu');

// Fonction pour calculer et mettre à jour le prix total d'un article
function updateTotalPrice(article) {
  const unitPrice = parseInt(article.querySelector('span:nth-child(2)').textContent);
  const quantity = parseInt(article.querySelector('.num').textContent);
  const totalPrice = unitPrice * quantity;
  article.querySelector('.price').textContent = totalPrice;
  updateTotalOrder();
}

// Fonction pour mettre à jour le prix total de la commande
function updateTotalOrder() {
  let totalOrder = 0;
  document.querySelectorAll('.price').forEach(price => {
    totalOrder += parseInt(price.textContent);
  });
  totalCommande.textContent = totalOrder;
}

// Ajout d'un événement sur le bouton "+" pour chaque article
btnPlus.forEach(button => {
  button.addEventListener('click', () => {
    const article = button.closest('.box');
    let quantity = parseInt(article.querySelector('.num').textContent);
    quantity++;
    article.querySelector('.num').textContent = quantity;
    updateTotalPrice(article);
  });
});

// Ajout d'un événement sur le bouton "-" pour chaque article
btnMinus.forEach(button => {
  button.addEventListener('click', () => {
    const article = button.closest('.box');
    let quantity = parseInt(article.querySelector('.num').textContent);
    if (quantity > 0) {
      quantity--;
      article.querySelector('.num').textContent = quantity;
      updateTotalPrice(article);
    }
  });
});

// Ajout d'un événement sur le bouton "Supprimer" pour chaque article
btnDelete.forEach(button => {
  button.addEventListener('click', () => {
    const article = button.closest('.box');
    article.remove();
    updateTotalOrder();
  });
});

