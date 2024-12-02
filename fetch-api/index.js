const postList = document.getElementById("post-list");

// Fonction pour convertir un nombre en mots (vous l'avez déjà définie)
function numberToWords(num) {
  const belowTwenty = [
    "Zero", "One", "Two", "Three", "Four", "Five",
    "Six", "Seven", "Eight", "Nine", "Ten", "Eleven",
    "Twelve", "Thirteen", "Fourteen", "Fifteen",
    "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];

  const tens = [
    "", "", "Twenty", "Thirty", "Forty", "Fifty",
    "Sixty", "Seventy", "Eighty", "Ninety"
  ];

  if (num < 20) {
    return belowTwenty[num];
  } else if (num < 100) {
    const tenPart = tens[Math.floor(num / 10)];
    const unitPart = num % 10 === 0 ? "" : `-${belowTwenty[num % 10]}`;
    return tenPart + unitPart;
  } else if (num === 100) {
    return "Hundred"; // Gère spécifiquement 100
  } else {
    const hundredsPart = `${belowTwenty[Math.floor(num / 100)]} Hundred`;
    const remainder = num % 100;
    if (remainder === 0) {
      return hundredsPart;
    }
    return `${hundredsPart} and ${numberToWords(remainder)}`;
  }
}

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    // Trier les articles par ID
    posts.sort((a, b) => a.id - b.id);

    // Afficher les articles
    posts.forEach(post => {
      const listItem = document.createElement("li");

      // Convertir l'ID en mot
      const idWord = numberToWords(post.id);

      // Ajouter la classe CSS en fonction de l'ID (par exemple, num-1, num-2, etc.)
      const numClass = `num-${post.id}`;

      // Appliquer la classe CSS au numéro dans le HTML
      listItem.innerHTML = `
      <strong><span class="${numClass} number-id">${post.id}</span> 
      <span class="number-text">Number ${idWord}</span></strong>
      <br><strong class="title-text">Title: </strong><span class="post-title">${post.title}</span>
      <p class="body-text">${post.body}</p>
  `;

      postList.appendChild(listItem);
    });

    // Appliquer le dégradé de couleur à chaque numéro avec une boucle for
    for (let i = 1; i <= 100; i++) {
      const numElement = document.querySelector(`.num-${i}`);
      if (numElement) {
        numElement.style.color = "white";  // Appliquer la couleur du texte à blanc
        numElement.style.background = "linear-gradient(135deg, #ED4264, #F9B19D)";  // Appliquer un dégradé de couleur
        numElement.style.borderRadius = "0% 77% 52% 46% / 21% 51% 51% 80% ";  // Rendre le fond circulaire
        numElement.style.padding = "20px";  // Ajouter de l'espace autour du numéro
        numElement.style.margin = "20px";
        numElement.style.fontSize = "30px";  // Agrandir la taille de la police
        numElement.style.display = "inline-block";  // Afficher en ligne pour être dans un cercle
        numElement.style.textAlign = "center";  // Centrer le texte
        numElement.style.width = "40px";  // Largeur du cercle
        numElement.style.height = "40px";  // Hauteur du cercle
      }
    }
  } catch (error) {
    console.error("Error fetching posts:", error);

    // Afficher un message d'erreur si le fetch échoue
    const errorMessage = document.createElement("li");
    errorMessage.textContent = "Unable to load posts.";
    errorMessage.style.color = "red";
    postList.appendChild(errorMessage);
  }
}

// Appeler la fonction lors du chargement de la page
fetchPosts();

document.addEventListener("DOMContentLoaded", () => {
  const loaderWrapper = document.getElementById("loader-wrapper");
  const content = document.getElementById("content");

  // Simuler un délai de chargement (exemple : 2 secondes)
  setTimeout(() => {
    // Masquer le loader
    loaderWrapper.style.display = "none";

    // Afficher le contenu principal
    content.style.display = "block";
  }, 2000);
});