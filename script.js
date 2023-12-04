const counterText = document.querySelectorAll('.counter-wrap b');
const counterBtn = document.querySelectorAll('.counter-wrap button');
const counterText2 = document.querySelectorAll('.counter-wrap2 b');
const counterBtn2 = document.querySelectorAll('.counter-wrap2 button');
const counterText3 = document.querySelectorAll('.counter-wrap3 b');
const counterBtn3 = document.querySelectorAll('.counter-wrap3 button');
const totalprice = document.querySelectorAll('.totalprice p');
const beforeprice = document.querySelectorAll('.beforeprice p');
const price = document.querySelector('.price p');
const discount = document.querySelector('.discount p');
const allready = document.querySelector('.allready')
const buytovar = document.querySelector('.yes');
const buytovarmob = document.querySelector('.yes-mobile');
const openingmob = document.getElementById('opening-mobile');
const closemob = document.getElementById('closething-mobile');
const closething = document.querySelector('#closething');
const openthing = document.querySelector('#opening');
const notovar = document.querySelector('.no-tovar');
const noclose = document.querySelector('#noclose');
const noopen = document.querySelector('#noopen');
const notovarmob = document.querySelector('.no-mobile');
const noclosemob = document.getElementById('noclosemob');
const noopenmob = document.getElementById('noopenmob');
const changecard = document.querySelectorAll('.changecard');
const popupforcard = document.querySelector('.popup-bg');
const popupforcard2 = document.querySelector('.popup-bg2');
const finishcard = document.getElementById('finishcard');
const world = document.querySelectorAll('.world');
const visa = document.querySelectorAll('.visa');
const master = document.querySelectorAll('.master');
const othercard = document.querySelectorAll('.othercard');
const cardclose = document.getElementById('cardclose');
const firstchoice = document.getElementById('ch1');
const secondchoice = document.getElementById('ch2');
const loca = document.querySelectorAll('.loca');
const thesix = document.querySelectorAll('.thesix');
const inputline = document.querySelectorAll('.result');
const deletebtn = document.querySelectorAll('.trashbin');
const destiny = document.getElementById('destiny');
const changedestiny = document.querySelectorAll('.changedestiny');
const destclose = document.getElementById('destclose');
const firstdes = document.querySelectorAll('.firstdes');
const seconddest = document.querySelectorAll('.seconddest');
const therddest = document.querySelectorAll('.therddest');
const forthdest = document.querySelectorAll('.forthdest');
const doityourself = document.querySelectorAll('.iwillgetitmyself');
const courier6 = document.querySelectorAll('.courier6');
const paybutton = document.querySelector('.paybutton');
const paytheprice = document.getElementById('paytheprice');
const supercheck = document.querySelector('.super');
const allcheck = document.querySelectorAll('.rest');



let counter = 1;
let befsum = '500 com'
let totalsum = '1000 com'

let finish = '2 070 900 сом'
let tovar = '202 товара'
let before = '2 301 800 сом'
let disc = '-230 900 сом'


counterBtn.forEach((el, index) => {
    el.addEventListener('click', () => {
        if (index === 0 || 2 && counter > 1) {
            counter--;
        } else if (index === 1 || 3 && counter < 2) {
            counter++;
        }
        counterText.forEach((ele) => {
            ele.textContent = counter;
        });
        befsum = `${counter * 1000} com`
        totalsum = `${counter * 1000 * 0.5} com`
        totalprice[0].textContent = totalsum
        beforeprice[0].textContent = befsum
        totalprice[3].textContent = totalsum
        beforeprice[3].textContent = befsum
        allcheck[0].value = counter * 1000 * 0.5
        allcheck[3].value = counter * 1000 * 0.5
        tovar = `${counter + counter2 + counter3} товара`
        finish = `${(counter * 1000 * 0.5) + (counter2 * 11500 * 0.9) + (counter3 * 800 * 0.5)} com`
        before = `${(counter * 1000) + (counter2 * 11500) + (counter3 * 800)} com`
        disc = `${((counter * 1000 * 0.5) + (counter2 * 11500 * 0.9) + (counter3 * 800 * 0.5)) - ((counter * 1000) + (counter2 * 11500) + (counter3 * 800))} com`
        price.innerHTML = `${tovar} <span style="float : right;"> ${before} </span>`;
        discount.innerHTML = `Скидка <span style="float : right;"> ${disc} </span>`;
        allready.textContent = finish;
        setDisabled(counter);
    });
});


function setDisabled(counter) {
    if (counter === 1) {
        counterBtn[0].disabled = true;
        counterBtn[1].disabled = false;
        counterBtn[2].disabled = true;
        counterBtn[3].disabled = false;
    } else if (counter === 2) {
        counterBtn[1].disabled = true;
        counterBtn[0].disabled = false;
        counterBtn[3].disabled = true;
        counterBtn[2].disabled = false;
    } else {
        counterBtn[0].disabled = false;
        counterBtn[1].disabled = false;
        counterBtn[2].disabled = false;
        counterBtn[3].disabled = false;
    }
}

let counter2 = 200;
let befsum2 = '2 070 000 com'
let totalsum2 = '2 300 000 com'

counterBtn2.forEach((el, index) => {
    el.addEventListener('click', () => {
        console.log(index);
        if ( index === 1) {
            counter2++;
        } else if ( index === 0 && counter2 > 1 ){
            counter2--;
        } else if (index === 2 && counter2 > 1) {
            counter2--;
        } else {
            counter2++
        }
        counterText2.forEach((ele) => {
            ele.textContent = counter2;
        });
        befsum2 = `${counter2 * 11500} com`
        totalsum2 = `${counter2 * 11500 * 0.9} com`
        totalprice[1].textContent = totalsum2
        beforeprice[1].textContent = befsum2
        totalprice[4].textContent = totalsum2
        beforeprice[4].textContent = befsum2
        allcheck[1].value = counter2 * 11500 * 0.9
        allcheck[4].value = counter2 * 11500 * 0.9
        tovar = `${counter + counter2 + counter3} товара`
        finish = `${(counter * 1000 * 0.5) + (counter2 * 11500 * 0.9) + (counter3 * 800 * 0.5)} com`
        before = `${(counter * 1000) + (counter2 * 11500) + (counter3 * 800)} com`
        disc = `${((counter * 1000 * 0.5) + (counter2 * 11500 * 0.9) + (counter3 * 800 * 0.5)) - ((counter * 1000) + (counter2 * 11500) + (counter3 * 800))} com`
        price.innerHTML = `${tovar} <span style="float : right;"> ${before} </span>`;
        discount.innerHTML = `Скидка <span style="float : right;"> ${disc} </span>`;
        allready.textContent = finish;
        setDisabled2(counter2);
    });
});

function setDisabled2(counter2) {
    if (counter2 === 1) {
        counterBtn2[0].disabled = true;
        counterBtn2[1].disabled = false;
        counterBtn2[2].disabled = true;
        counterBtn2[3].disabled = false;
    }  else {
        counterBtn2[0].disabled = false;
        counterBtn2[1].disabled = false;
        counterBtn2[2].disabled = false;
        counterBtn2[3].disabled = false;
    }
}

let counter3 = 1;
let befsum3 = '400 com'
let totalsum3 = '800 com'

counterBtn3.forEach((el, index) => {
    el.addEventListener('click', () => {
        if (index === 0 || 2 && counter3 > 1) {
            counter3--;
        } else if (index === 1 || 3 && counter3 < 2) {
            counter3++;
        }
        counterText3.forEach((ele) => {
            ele.textContent = counter3;
        });
        befsum3 = `${counter3 * 800} com`
        totalsum3 = `${counter3 * 800 * 0.5} com`
        allcheck[2].value = counter3 * 800 * 0.5
        allcheck[5].value = counter3 * 800 * 0.5
        totalprice[2].textContent = totalsum3
        beforeprice[2].textContent = befsum3
        totalprice[5].textContent = totalsum3
        beforeprice[5].textContent = befsum3
        tovar = `${counter + counter2 + counter3} товара`
        finish = `${(counter * 1000 * 0.5) + (counter2 * 11500 * 0.9) + (counter3 * 800 * 0.5)} com`
        before = `${(counter * 1000) + (counter2 * 11500) + (counter3 * 800)} com`
        disc = `${((counter * 1000 * 0.5) + (counter2 * 11500 * 0.9) + (counter3 * 800 * 0.5)) - ((counter * 1000) + (counter2 * 11500) + (counter3 * 800))} com`
        price.innerHTML = `${tovar} <span style="float : right;"> ${before} </span>`;
        discount.innerHTML = `Скидка <span style="float : right;"> ${disc} </span>`;
        allready.textContent = finish;
        setDisabled3(counter3);
    });
});

function setDisabled3(counter3) {
    if (counter3 === 1) {
        counterBtn3[0].disabled = true;
        counterBtn3[1].disabled = false;
        counterBtn3[2].disabled = true;
        counterBtn3[3].disabled = false;
    } else if (counter3 === 2) {
        counterBtn3[1].disabled = true;
        counterBtn3[0].disabled = false;
        counterBtn3[3].disabled = true;
        counterBtn3[2].disabled = false;
    } else {
        counterBtn3[0].disabled = false;
        counterBtn3[1].disabled = false;
        counterBtn3[2].disabled = false;
        counterBtn3[3].disabled = false;
    }
}

paytheprice.addEventListener('click', (e) => {
    if(paybutton.value !== '2'){
        let endsum = 0;
        let active = 0;
        allcheck.forEach((el) => {
            if (el.checked === true) {
                active++;
            }
        })
        if(active > 3) {
            allcheck.forEach((ele) => {
                if(ele.checked === true) {
                    endsum += Number(ele.value)
                }
            })
            paybutton.textContent = `${endsum/2} com`
        } else {
            allcheck.forEach((ele) => {
                if(ele.checked === true) {
                    endsum += Number(ele.value)
                }
            })
            paybutton.textContent = `${endsum} com`
        }
        paybutton.value = '2'
    } else {
        paybutton.textContent = 'Заказать'
        paybutton.value = '1'
    }
})

closething.addEventListener('click', () => {
    buytovar.style = 'display:none;'
    closething.style = 'display:none;'
    openthing.style = 'display: inline;'
})

openthing.addEventListener('click', () => {
    buytovar.style = 'display: flex;'
    closething.style = 'display: inline;'
    openthing.style = 'display:none;'
})

closemob.addEventListener('click', () => {
    buytovarmob.style = 'display:none;'
    closemob.style = 'display:none;'
    openingmob.style = 'display: inline;'
})

openingmob.addEventListener('click', () => {
    buytovarmob.style = 'display: inline;'
    closemob.style = 'display: inline;'
    openingmob.style = 'display:none;'
})

window.addEventListener("resize", (event) => {
    if(document.documentElement.clientWidth > 840) {
        buytovarmob.style = 'display:none;'
        closemob.style = 'display:none;'
        openingmob.style = 'display:none;'
        notovarmob.style = 'display:none;'
        noclosemob.style = 'display:none;'
        noopenmob.style = 'display: none;'
        buytovar.style = 'display: flex;'
        closething.style = 'display: inline;'
        openthing.style = 'display:none;'
        notovar.style = 'display: flex;'
        noclose.style = 'display: inline;'
        noopen.style = 'display:none;'
        allcheck.forEach((el) => {
            el.checked = false
        })
        supercheck.checked = false;
    } else if (document.documentElement.clientWidth <= 840){
        buytovarmob.style = 'display: inline;'
        closemob.style = 'display: inline;'
        openingmob.style = 'display:none;'
        notovarmob.style = 'display: inline;'
        noclosemob.style = 'display: inline;'
        noopenmob.style = 'display:none;'
        buytovar.style = 'display:none;'
        closething.style = 'display:none;'
        openthing.style = 'display: none;'
        notovar.style = 'display:none;'
        noclose.style = 'display:none;'
        noopen.style = 'display: none;'
        allcheck.forEach((el) => {
            el.checked = false
        })
        supercheck.checked = false;
    }
})




noclose.addEventListener('click', () => {
    notovar.style = 'display:none;'
    noclose.style = 'display:none;'
    noopen.style = 'display: inline;'
})

noopen.addEventListener('click', () => {
    notovar.style = 'display: flex;'
    noclose.style = 'display: inline;'
    noopen.style = 'display:none;'
})

noclosemob.addEventListener('click', () => {
    notovarmob.style = 'display:none;'
    noclosemob.style = 'display:none;'
    noopenmob.style = 'display: inline;'
})

noopenmob.addEventListener('click', () => {
    notovarmob.style = 'display: inline;'
    noclosemob.style = 'display: inline;'
    noopenmob.style = 'display:none;'
})

changecard.forEach((el) => {
    el.addEventListener('click', () => {
        popupforcard.style = 'display: inline'
    })
})

cardclose.addEventListener('click', () => {
    popupforcard.style = 'display: none;'
})

finishcard.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = new FormData(finishcard);
    const card = result.get('firstcard');
    if(card === 'world'){
        world.forEach((el) => {
            el.style = 'display: inline;'
        })
        visa.forEach((el) => {
            el.style = 'display: none;'
        })
        master.forEach((el) => {
            el.style = 'display: none;'
        })
        othercard.forEach((el) => {
            el.style = 'display: none;'
        })
    } else if (card === 'visa') {
        world.forEach((el) => {
            el.style = 'display: none;'
        })
        visa.forEach((el) => {
            el.style = 'display: inline;'
        })
        master.forEach((el) => {
            el.style = 'display: none;'
        })
        othercard.forEach((el) => {
            el.style = 'display: none;'
        })
    } else if (card === 'master') {
        world.forEach((el) => {
            el.style = 'display: none;'
        })
        visa.forEach((el) => {
            el.style = 'display: none;'
        })
        master.forEach((el) => {
            el.style = 'display: inline;'
        })
        othercard.forEach((el) => {
            el.style = 'display: none;'
        })
    } else {
        world.forEach((el) => {
            el.style = 'display: none;'
        })
        visa.forEach((el) => {
            el.style = 'display: none;'
        })
        master.forEach((el) => {
            el.style = 'display: none;'
        })
        othercard.forEach((el) => {
            el.style = 'display: inline;'
        })
    }
    popupforcard.style = 'display: none'
})

changedestiny.forEach((el) => {
    el.addEventListener('click', () => {
        popupforcard2.style = 'display: inline'
    })
})

destclose.addEventListener('click', () => {
    popupforcard2.style = 'display: none'
})

firstchoice.addEventListener('click', () => {
    firstchoice.style = 'border-color: #CB11AB;'
    secondchoice.style = 'border-color: #CB11AB26;'
    secondchoice.style = ':hover border-color: #CB11AB;'
    loca.forEach((el) => {
        el.style = 'display: flex;'
    });
    thesix.forEach((el) => {
        el.style = 'display: none;'
    })
})

secondchoice.addEventListener('click', () => {
    secondchoice.style = 'border-color: #CB11AB;'
    firstchoice.style = 'border-color: #CB11AB26;'
    firstchoice.style = ':hover border-color: #CB11AB;'
    thesix.forEach((el) => {
        el.style = 'display: flex;'
    });
    loca.forEach((el) => {
        el.style = 'display: none;'
    })
})

deletebtn.forEach((el , i) => {
    el.addEventListener('click', () => {
        inputline[i].style = 'display: none;'
    })
})

destiny.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = new FormData(destiny);
    const place = result.get('place');
    if(place === '1'){
        firstdes.forEach((el) => {
            el.style = 'display: inline;'
        })
        seconddest.forEach((el) => {
            el.style = 'display: none;'
        })
        therddest.forEach((el) => {
            el.style = 'display: none;'
        })
        forthdest.forEach((el) => {
            el.style = 'display: none;'
        })
        doityourself.forEach((el) => {
            el.style = 'display: inline;'
        })
        courier6.forEach((el) => {
            el.style = 'display: none;'
        })
    } else if (place === '2') {
        firstdes.forEach((el) => {
            el.style = 'display: none;'
        })
        seconddest.forEach((el) => {
            el.style = 'display: inline;'
        })
        therddest.forEach((el) => {
            el.style = 'display: none;'
        })
        forthdest.forEach((el) => {
            el.style = 'display: none;'
        })
        doityourself.forEach((el) => {
            el.style = 'display: inline;'
        })
        courier6.forEach((el) => {
            el.style = 'display: none;'
        })
    } else if (place === '3') {
        firstdes.forEach((el) => {
            el.style = 'display: none;'
        })
        seconddest.forEach((el) => {
            el.style = 'display: none;'
        })
        therddest.forEach((el) => {
            el.style = 'display: inline;'
        })
        forthdest.forEach((el) => {
            el.style = 'display: none;'
        })
        doityourself.forEach((el) => {
            el.style = 'display: none;'
        })
        courier6.forEach((el) => {
            el.style = 'display: inline;'
        })
    } else {
        firstdes.forEach((el) => {
            el.style = 'display: none;'
        })
        seconddest.forEach((el) => {
            el.style = 'display: none;'
        })
        therddest.forEach((el) => {
            el.style = 'display: none;'
        })
        forthdest.forEach((el) => {
            el.style = 'display: inline;'
        })
        doityourself.forEach((el) => {
            el.style = 'display: none;'
        })
        courier6.forEach((el) => {
            el.style = 'display: inline;'
        })
    }
    popupforcard2.style = 'display: none'

})

supercheck.addEventListener('click', () => {
    if(supercheck.value !== '2'){
        allcheck.forEach((el) => {
            el.checked = true;
        })
        supercheck.value = '2'
    } else {
        supercheck.value = '1'
        allcheck.forEach((el) => {
            el.checked = false;
        })
    }
})

const hicon = document.querySelectorAll('.hicon');
const htk = document.querySelectorAll('.htk');

hicon.forEach((el, i) => {
    el.addEventListener('mouseenter', () => {
        if(i === 3){
            htk[i].style = 'display: flex';
        } else if (i === 4) {
            htk[i].style = 'display: flex';
        } else if (i === 5) {
            htk[i].style = 'display: flex';
        } else {
            htk[i].style = 'display: block';
        }
    })
    el.addEventListener('mouseleave', () => {
        htk[i].style = 'display: none';
    })
})

