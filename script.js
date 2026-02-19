function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");

    newForm.style.display = "none";

    if (filterForm.style.display === "none") {
        filterForm.style.display = "block";
    } else {
        filterForm.style.display = "none";
    }
}

function showAddNew() {
    const newForm = document.getElementById("newContent");
    const filterForm = document.getElementById("filterContent");

    filterForm.style.display = "none";

    if (newForm.style.display === "none" || newForm.style.display === "") {
        newForm.style.display = "flex";
    } else {
        newForm.style.display = "none";
    }
}

function filterArticles() {
    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;

    const articles = document.querySelectorAll("#articleList article");

    articles.forEach(article => {
        if (article.classList.contains("opinion")) {
            article.style.display = showOpinion ? "block" : "none";
        }
        else if (article.classList.contains("recipe")) {
            article.style.display = showRecipe ? "block" : "none";
        }
        else if (article.classList.contains("update")) {
            article.style.display = showUpdate ? "block" : "none";
        }
    });
}

function addNewArticle() {
    const title = document.getElementById("inputHeader").value;
    const content = document.getElementById("inputArticle").value;

    const opinionRadio = document.getElementById("opinionRadio");
    const recipeRadio = document.getElementById("recipeRadio");
    const lifeRadio = document.getElementById("lifeRadio");

    let type = "";
    let typeLabel = "";

    if (opinionRadio.checked) {
        type = "opinion";
        typeLabel = "Opinion";
    } 
    else if (recipeRadio.checked) {
        type = "recipe";
        typeLabel = "Recipe";
    } 
    else if (lifeRadio.checked) {
        type = "update";
        typeLabel = "Update";
    }

    if (!title || !content || !type) {
        alert("Please complete all fields.");
        return;
    }

    const newArticle = document.createElement("article");
    newArticle.classList.add(type);

    newArticle.innerHTML = `
        <span class="marker">${typeLabel}</span>
        <h2>${title}</h2>
        <p>${content}</p>
        <p><a href="#">Read more...</a></p>
    `;

    document.getElementById("articleList").appendChild(newArticle);
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    opinionRadio.checked = false;
    recipeRadio.checked = false;
    lifeRadio.checked = false;

    document.getElementById("newContent").style.display = "none";

    filterArticles();
}