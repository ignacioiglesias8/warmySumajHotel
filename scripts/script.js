// Elementos del DOM
const roomsRow = document.querySelector("#rooms-row");
const servicesRow = document.querySelector("#services-row");
const activitiesRow = document.querySelector("#activities-row");

// Define una función para crear una tarjetas
function createRoomsCard(rooms) {
    const card = document.createElement("div");
    card.classList.add("col-md-4");
    const html = `
    <div class="card mb-4 box-shadow">
    <div class="box-image">
        <img class="card-img-top" src="${rooms.image}" alt="${rooms.name}">
    </div>
    <div class="card-body">
        <h3 class="row card-title justify-content-center">${rooms.name}</h3>
        <p class="card-text ">${rooms.description}</p>
        <p class="card-text text-justify">${rooms.price}</p>
    </div>
    </div>`;
    card.innerHTML = html;
    return card;
}

function createServiceCard(services) {
    const card = document.createElement("div");
    card.classList.add("col-md-4");
    const html = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${services.name}</h5>
                    <p class="card-text">${services.description}</p>
                </div>
            </div>`;
    card.innerHTML = html;
    return card;
}

function createActivityCard(activities) {
    const card = document.createElement("div");
    card.classList.add("col-md-4");
    const html = `
            <div class="card">
                <div class="box-image">
                    <img class="card-img-top" src="${activities.image}" alt="${activities.name}">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${activities.name}</h5>
                    <p class="card-text">${activities.description}</p>
                </div>
            </div>`;
    card.innerHTML = html;
    return card;
}

// Define una función para agregar las cards a la página
function addCardsToPage(array, html, func) {
    html.innerHTML = "";
    array.forEach((obj) => {
        const card = func(obj);
        html.appendChild(card);
    });
}

// Agrega todas las cards a la página al cargar la página
addCardsToPage(rooms, roomsRow, createRoomsCard);
addCardsToPage(services, servicesRow, createServiceCard);
addCardsToPage(activities, activitiesRow, createActivityCard);