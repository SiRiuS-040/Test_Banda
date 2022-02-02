import { getUserData, getBeerData } from '../js/api.min.js';
import { getUserMapData } from '../js/map.min.js';

// const BEER = {
//     "id": 933,
//     "uid": "610def3c-3a4d-46d5-a2e5-9ed7456c091e +",
//     "brand": "Coors lite +",
//     "name": "Trappistes Rochefort 8 +",
//     "style": "Scottish And Irish Ale +",
//     "hop": "Newport +",
//     "yeast": "2112 - California Lager +",
//     "malts": "Carapils +",
//     "ibu": "63 IBU +",
//     "alcohol": "2.4% +",
//     "blg": "5.3°Blg +"
// };

// const USER = {
//     "id": "76 +",
//     "uid": "fb9451a4-95aa-40b5-8278-12b119cc8f6b +",
//     "password": "Yc6FCpPTE2 +",
//     "first_name": "Parker +",
//     "last_name": "Cartwright +",
//     "username": "parker.cartwright +",
//     "email": "parker.cartwright@email.com +",
//     "avatar": "https://robohash.org/easitsuscipit.png?size=300x300\u0026set=set1 +",
//     "gender": "Non-binary +",
//     "phone_number": "+232 354-665-4013 +",
//     "social_insurance_number": "449471903 +",
//     "date_of_birth": "1980-08-18 +",
//     "employment": {
//         "title": "Internal Liaison +",
//         "key_skill": "Leadership +"
//     },
//     "address": {
//         "city": "Lake Cedrickville +",
//         "street_name": "Wilfredo Square +",
//         "street_address": "96840 Erdman Brook +",
//         "zip_code": "39851-1610 +",
//         "state": "Iowa +",
//         "country": "United States +",
//         "coordinates": {
//             "lat": 51.15356230667055,
//             "lng": -53.79519763212616
//         }
//     },
//     "credit_card": {
//         "cc_number": "4337-7750-0381-9086 +"
//     },
//     "subscription": {
//         "plan": "Premium +",
//         "status": "Active +",
//         "payment_method": "WeChat Pay +",
//         "term": "Full subscription +"
//     }
// };

const userCard = document.querySelector('.user');
const beerCard = document.querySelector('.beer-info');
const changeUser = document.querySelector('.change-user');
const changeBeerFast = document.querySelector('.change-beer--fast');
const changeBeerBest = document.querySelector('.change-beer--best');
const changeBeerNext = document.querySelector('.change-beer--next');
const changeBeerSurprise = document.querySelector('.change-beer--surprise');


const getUserInfoData = (dataArray) => {

    let addr = new URL(dataArray.avatar);
    let origin = addr.origin;
    let path = addr.pathname;

    userCard.querySelector('.user__avatar-wrapper').style.backgroundImage = (" url('" + origin + path + "'");
    userCard.querySelector('.user-id').textContent = dataArray.id;
    userCard.querySelector('.user-uid').textContent = dataArray.uid;
    userCard.querySelector('.user-password').textContent = dataArray.password;
    userCard.querySelector('.user-first-name').textContent = dataArray.first_name;
    userCard.querySelector('.user-last-name').textContent = dataArray.last_name;
    userCard.querySelector('.user-name').textContent = dataArray.username;
    userCard.querySelector('.user-email').textContent = dataArray.email;
    userCard.querySelector('.user-gender').textContent = dataArray.gender;
    userCard.querySelector('.user-phone-number').textContent = dataArray.phone_number;
    userCard.querySelector('.user-social-card').textContent = dataArray.social_insurance_number;
    userCard.querySelector('.user-birth-date').textContent = dataArray.date_of_birth;
    userCard.querySelector('.user-employment-title').textContent = dataArray.employment.title;
    userCard.querySelector('.user-employment-key-skill').textContent = dataArray.employment.key_skill;
    userCard.querySelector('.address-city').textContent = dataArray.address.city;
    userCard.querySelector('.address-street-name').textContent = dataArray.address.street_name;
    userCard.querySelector('.address-street-address').textContent = dataArray.address.street_address;
    userCard.querySelector('.address-zip-code').textContent = dataArray.address.zip_code;
    userCard.querySelector('.address-state').textContent = dataArray.address.state;
    userCard.querySelector('.address-country').textContent = dataArray.address.country;
    userCard.querySelector('.address-coordinates-lat').textContent = dataArray.address.coordinates.lat;
    userCard.querySelector('.address-coordinates-lng').textContent = dataArray.address.coordinates.lng;
    userCard.querySelector('.credit-card-numder').textContent = dataArray.credit_card.cc_number;
    userCard.querySelector('.subscription-plan').textContent = dataArray.subscription.plan;
    userCard.querySelector('.subscription-status').textContent = dataArray.subscription.status;
    userCard.querySelector('.subscription-payment-method').textContent = dataArray.subscription.payment_method;
    userCard.querySelector('.subscription-term').textContent = dataArray.subscription.term;

};


const getUserCardData = (dataArray) => {
    getUserInfoData(dataArray);
    getUserMapData(dataArray);
};

const getBeerCardData = (dataArray) => {

    beerCard.querySelector('.beer-id').textContent = dataArray.id;
    beerCard.querySelector('.beer-uid').textContent = dataArray.uid;
    beerCard.querySelector('.beer-brand').textContent = dataArray.brand;
    beerCard.querySelector('.beer-name').textContent = dataArray.name;
    beerCard.querySelector('.beer-style').textContent = dataArray.style;
    beerCard.querySelector('.beer-hop').textContent = dataArray.hop;
    beerCard.querySelector('.beer-yeast').textContent = dataArray.yeast;
    beerCard.querySelector('.beer-malts').textContent = dataArray.malts;
    beerCard.querySelector('.beer-ibu').textContent = dataArray.ibu;
    beerCard.querySelector('.beer-alcohol').textContent = dataArray.alcohol;
    beerCard.querySelector('.beer-blg').textContent = dataArray.blg;

    return beerCard;
};

let loadUserData = getUserData(getUserCardData, console.error);
let loadBeerData = getBeerData(getBeerCardData, console.error);

changeUser.addEventListener('click', () => {
    loadUserData();
});


changeBeerFast.addEventListener('click', () => {
    loadBeerData();
});

changeBeerBest.addEventListener('click', () => {
    alert("придется подождать пару секунд");
    setTimeout(loadBeerData, 1000);

});

changeBeerNext.addEventListener('click', () => {
    alert("Момент - мы быстро подглядим в соседнем баре!");
    setTimeout(loadBeerData, 3000);
});

changeBeerSurprise.addEventListener('click', () => {
    alert("Мы делаем все возможное - ждите!");
    setTimeout(loadBeerData, 5000);
});

