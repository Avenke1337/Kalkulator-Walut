//Funkcje ktore odpowiadaja za czyszczenie okienek

window.onload = function() {
    document.getElementById('wyczysc').onclick = function() {
        document.getElementById('kwota').value = '';
        document.getElementById('przeliczona').value = '';
    };
};




function wyczysc() {
    document.getElementById('kwotax').value = '';
    let kys = document.getElementsByName('przeliczona')
    for (let i = 0; i < kys.length; i++) {
        kys[i].value = '';
    }
};




//Kursy walut

const kursy = {
    PLN: { USD: 0.25, EUR: 0.22, GBP: 0.19, CNY: 1.6, KRW: 300, PLN: 1 },
    USD: { PLN: 4.0, EUR: 0.88, GBP: 0.76, CNY: 6.4, KRW: 1200, USD: 1 },
    EUR: { PLN: 4.5, USD: 1.14, GBP: 0.86, CNY: 7.2, KRW: 1350, EUR: 1 },
    GBP: { PLN: 5.3, USD: 1.32, EUR: 1.17, CNY: 8.4, KRW: 1600, GBP: 1 },
    CNY: { PLN: 0.63, USD: 0.16, EUR: 0.14, GBP: 0.12, KRW: 180, CNY: 1 },
    KRW: { PLN: 0.0033, USD: 0.00083, EUR: 0.00074, GBP: 0.00063, CNY: 0.0056, KRW: 1 }
};


//funkcje odpowiadajace za przeliczanie

function przeliczanieWalut(){
    let kwota = document.getElementById('kwota').value;
    let waluta1 = document.getElementById('waluty').value;
    let waluta2 = document.getElementById('waluty1').value;
    let wynik = kwota * kursy[waluta1][waluta2];
    document.getElementById('przeliczona').value = wynik.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('przelicz').onclick = przeliczanieWalut;
});


function przeliczanieWalutMulti(){
    let kwota = document.getElementById('kwotax').value;
    let waluta = document.getElementById('waluty3').value;
    let wynik1 = (kwota * kursy[waluta]["PLN"]).toFixed(2) + " PLN";
    let wynik2 = (kwota * kursy[waluta]["USD"]).toFixed(2) + " USD";
    let wynik3 = (kwota * kursy[waluta]["EUR"]).toFixed(2) + " EUR";
    let wynik4 = (kwota * kursy[waluta]["GBP"]).toFixed(2) + " GBP";
    let wynik5 = (kwota * kursy[waluta]["CNY"]).toFixed(2) + " CNY";
    let wynik6 = (kwota * kursy[waluta]["KRW"]).toFixed(2) + " KRW";
    document.getElementById('przeliczona1').value = wynik1
    document.getElementById('przeliczona2').value = wynik2
    document.getElementById('przeliczona3').value = wynik3
    document.getElementById('przeliczona4').value = wynik4
    document.getElementById('przeliczona5').value = wynik5


    if (waluta === "PLN") {
        document.getElementById('przeliczona1').value = wynik6;
    }
    if (waluta === "USD") {
        document.getElementById('przeliczona2').value = wynik6;
    }
    if (waluta === "EUR") {
        document.getElementById('przeliczona3').value = wynik6;
    }
    if (waluta === "GBP") {
        document.getElementById('przeliczona4').value = wynik6;
    }
    if (waluta === "CNY") {
        document.getElementById('przeliczona5').value = wynik6;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('przelicz2').onclick = przeliczanieWalutMulti;
});


//funkcja odpowiadajaca za przełączenie widoku

function toggleView() {
    const view1 = document.querySelector(".container");
    const view2 = document.querySelector(".container2");

    if (view1.style.display === "block") {
        view1.style.display = "none";
        view2.style.display = "block";
    } else {
        view1.style.display = "block";
        view2.style.display = "none";
    }
}









