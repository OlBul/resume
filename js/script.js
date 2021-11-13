const prices = {
    'landing-page': {
        pm: 700,
        design: 600,
        developer: 1200,
        qa: 500
    },
    'online-store': {
        pm: 1200,
        design: 900,
        developer: 2500,
        qa: 800,
    },
    'web-application': {
        pm: 2000,
        design:1100,
        developer:3000,
        qa: 1000,
    },
    'mobile-application': {
        pm: 3000,
        design: 1500,
        developer: 4000,
        qa: 1300,
    }
};

function getFormValues () {
    const websiteTypeElement = document.querySelector('#project-type');

    const pmEL = document.querySelector('#project-menegment');
    const desingEl = document.querySelector('#desing');
    const developerEl = document.querySelector('#developer');
    const  qaEl = document.querySelector('#qa');

    return {
        websiteType: websiteTypeElement.value,
        pm: pmEL.checked,
        design: desingEl.checked,
        developer: developerEl.checked,
        qa: qaEl.checked
    }   
}

function calculateWork () {
    const values = getFormValues ();
    let totalPrice = 0;

    const workTypes = prices[values.websiteType];

    if (values.pm) {
        totalPrice = workTypes.pm;
    }

    if (values.design) {
        totalPrice = totalPrice + workTypes.design;
    }

    if (values.developer) {
        totalPrice = totalPrice + workTypes.developer;
    }

    if (values.qa) {
        totalPrice = totalPrice + workTypes.qa;
    }

    const totalPriceEl = document.querySelector('#total-price');

    totalPriceEl.textContent= totalPrice;

    console.log(totalPrice);

}
const formEl = document.querySelector('#project-price-form');
formEl.addEventListener('change', calculateWork);

