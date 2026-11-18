// Song and Artist Cards on Main page
const songCards = document.querySelector(".songCards");
const artistDetails = document.querySelector(".artistDetails");

// Create Button on library to rotate and show popup
const createBtn = document.querySelector(".createBtn");
const createSvg = document.querySelector(".createBtn svg");
const createLibraryPopUp = document.getElementById("createLibraryPopUp");

// Search Songs in search Bar
const search = document.getElementById("songSearch");

// Modal & Player Elements of Pop Up Cards
const popUpOverlay = document.getElementById("popUpOverlay");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalArtist = document.getElementById("modalArtist");


const api = [
  {
    id: 0,
    songTitle: "Alfaaz",
    SongCover: "imges/songs/Alfaaz Hamza Malik x Zain Zohaib.png",
    song: "songs/Alfaaz Hamza Malik Zain Zohaib Official Visualiser.mp3",
    artist: "Alfaaz Hamza",
    artistImg: "imges/artists/hamza malik.jpeg",
  },
  {
    id: 1,
    songTitle: "Banger",
    SongCover: "imges/songs/Banger.png",
    song: "songs/BANGER  Badshah Sharvi Hiten ft Aveera Singh.mp3",
    artist: "Badshah",
    artistImg: "imges/artists/badshah.jpeg",
  },
  {
    id: 2,
    songTitle: "Bari",
    SongCover: "imges/songs/bari Nijjar and jazz.png",
    song: "songs/NIJJAR & Jazz Dee  Bari.mp3",
    artist: "Nijjar",
    artistImg: "imges/songs/bari Nijjar and jazz.png",
  },
  {
    id: 3,
    songTitle: "Sammi Meri",
    SongCover: "imges/songs/coke studio season 8 sammi meri.png",
    song: "songs/Coke Studio Season 8 Sammi Meri Waar Umair Jaswal Quratulain Balouch.mp3",
    artist: "Umair Jaiswal",
    artistImg: "imges/artists/umari jaiswal.jpeg",
  },
  {
    id: 4,
    songTitle: "Rathinamo",
    SongCover: "imges/songs/rathinamo.png",
    song: "songs/Rathinamo feat Tanisha Gnanavel Female Version.mp3",
    artist: "Tanisha Gnanavel",
    artistImg: "imges/artists/tanisha gnanavel.jpeg",
  },
];

// Render Song & Artist Cards
let songsHTML = "";
let artistsHTML = "";

api.forEach((item, index) => {
  songsHTML += `
    <div class="cards" data-id="${item.id}">
      <div class="songImg">
        <img src="${item.SongCover}" alt="${item.songTitle}">
        <div class="playBtn playBtnTrigger" data-index="${index}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/>
          </svg>
        </div>
      </div>
      <h4 class="songName underLine">${item.songTitle}</h4>
      <p class="artist scaleAndWhiteText underLine">${item.artist}</p>
    </div>
  `;

  artistsHTML += `
    <div class="cards">
      <div class="artistImg">
        <img src="${item.artistImg}" alt="${item.artist}">
        <div class="playBtn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/>
          </svg>
        </div>
      </div>
      <h4 class="artistName underLine">${item.artist}</h4>
      <p class="title scaleAndWhiteText underLine">Artist</p>
    </div>
  `;
});

songCards.innerHTML = songsHTML;
artistDetails.innerHTML = artistsHTML;

// Create Library Popup Toggle
createBtn.addEventListener("click", () => {
  createLibraryPopUp.classList.toggle("show");
  createSvg.classList.toggle("rotate45");
});

// Search Filter
search.addEventListener("input", () => {
  const searchValue = search.value.toLowerCase().trim();
  const allCards = document.querySelectorAll(".cards");

  allCards.forEach((card) => {
    const cardText = card.textContent.toLowerCase();
    card.style.display = cardText.includes(searchValue) ? "flex" : "none";
  });
});

const popupOverlay = document.getElementById("popupOverlay");
const closeBtn = document.getElementById("closeBtn");
const popupImg = document.getElementById("popupImg");
const popupTitle = document.getElementById("popupTitle");
const popupArtist = document.getElementById("popupArtist");

songCard.forEach((card)=>{
           card.addEventListener("click",()=>{
                let cardId = card.getAttribute("data-id");
                let songId = songs.find(song => song.id == cardId);
                // console.log(songId)
                popupImg.src = songId.img;
                popupArtist.textContent = songId.artist;
                popupTitle.textContent= songId.title;

            popupOverlay.classList.add("active")


           })
        })

        closeBtn.addEventListener("click",()=>{
            popupOverlay.classList.remove("active")
        })