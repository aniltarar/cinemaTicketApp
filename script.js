const container = document.querySelector(".container");
container.addEventListener("click",clickFunc)

const ticketInfoSeatCount = document.querySelector("#ticketCount"); //Bilet Sayısı
const ticketInfoMovieName = document.querySelector("#movie") //Seçilen Film
const screenMovieName = document.querySelector("#screenMovieName"); //Perde'ye yansıtılan film
const confirmButton = document.querySelector("#confirmButton");
const seats = document.querySelectorAll(".container .seat");



function clickFunc(e){
    if(e.target.classList.contains('seat')&& !e.target.classList.contains('reserved'))
    e.target.classList.toggle('selected')

    // Seçilen Koltuk Sayısını Belirleme.
    let selectedSeats = container.querySelectorAll('.seat.selected');
    let selectedSeatCounter = selectedSeats.length;
    ticketInfoSeatCount.innerHTML=selectedSeatCounter;

    //Seçilen Film Adını Görüntüleme.
    let selectedMovieName =document.querySelector("#movieName");
    selectedMovieName.innerText =ticketInfoMovieName.options[ticketInfoMovieName.selectedIndex].text;
    screenMovieName.innerText = selectedMovieName.innerText;

    //Seçilen Film Bilet Fiyatı* Seçilen Koltuk Adedi
    let selectedMovieTicketPrice = document.querySelector("#price"); //info Text seçimi
    selectedMovieTicketPrice.innerText = ticketInfoMovieName.value*selectedSeatCounter;
}

confirmButton.addEventListener("click",ticketReserved);


function ticketReserved () {
    let selectedSeats = container.querySelectorAll(".seat.selected");
    let reservedTicketArr = [];

    seats.forEach((seat, indexNum) => {
        if(seat.classList.contains("selected")){
            reservedTicketArr.push(indexNum)
        }
    });

    selectedSeats.forEach(element => {
        element.classList.remove("selected");
        element.classList.add("reserved");
    });

    localStorage.setItem("Reserved-Seats",JSON.stringify(reservedTicketArr))
}

