import { getUserData, getBeerData } from '../js/api.min.js';
import { getUserMapData } from '../js/map.min.js';

const userCard = document.querySelector('.user');
const beerCard = document.querySelector('.beer-info');
const beerCardImahe = document.querySelector('.beer-section');
const beerCardTitle = document.querySelector('.your-beer-title');

const beerCardImgPath = {
    img1: '/img/beer-4.png',
    img2: '/img/beer-card.jpg',
    img3: '/img/bender.png',
    img4: '/img/beer-3.png',
    img5: '/img/beer-card-4.jpg',
};

const userInfo = document.querySelector('.user-info');
const userInfoButton = document.querySelector('.user__button--show-hide');
const changeUser = document.querySelector('.user-control__button--change-user');
const changeBeerFast = document.querySelector('.change-beer__button--fast');
const changeBeerBest = document.querySelector('.change-beer__button--best');
const changeBeerSurprise = document.querySelector('.change-beer__button--surprise');
const changeBeerNext = document.querySelector('.beer-options__button--next');

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

const operAndHideUserInfo = () => {
    userInfo.classList.toggle('user-info--open');

};

userInfoButton.addEventListener('click', () => {
    operAndHideUserInfo();
});

changeUser.addEventListener('click', () => {
    loadUserData();
});

changeBeerNext.addEventListener('click', () => {
    beerCardTitle.textContent = 'Пивогенератор v 1.0:';
    beerCardImahe.style.backgroundImage = (" url('" + beerCardImgPath.img1 + "'");
    loadBeerData();
});

changeBeerFast.addEventListener('click', () => {
    beerCardTitle.textContent = 'Нет времени думать? - Быстро пей!';
    beerCardImahe.style.backgroundImage = (" url('" + beerCardImgPath.img4 + "'");
    loadBeerData();
});

changeBeerBest.addEventListener('click', () => {
    beerCardTitle.textContent = 'Лучшее на сегодня!';
    beerCardImahe.style.backgroundImage = (" url('" + beerCardImgPath.img2 + "'");
    setTimeout(loadBeerData, 0);

});

changeBeerSurprise.addEventListener('click', () => {
    beerCardTitle.textContent = 'Из самых дальних уголков вселенной!';
    beerCardImahe.style.backgroundImage = (" url('" + beerCardImgPath.img3 + "'");
    setTimeout(loadBeerData, 0);

});

