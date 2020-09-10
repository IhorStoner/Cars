'use strict';
function showContent() {
    localStorageData();
    const carsSection = document.getElementById('cars');
    const showCarsBtn = document.createElement('button');

    showCarsBtn.innerHTML = 'Car showroom';
    showCarsBtn.classList.add('showBtn');
    carsSection.appendChild(showCarsBtn);

    showCarsBtn.addEventListener('click',deleteContent);
    showCarsBtn.addEventListener('click',handleShowCarsShop);

    const showPepleBtn = document.createElement('button');
    showPepleBtn.innerHTML = 'Show people';
    showPepleBtn.classList.add('showBtn');
    carsSection.appendChild(showPepleBtn);

    showPepleBtn.addEventListener('click',deleteContent);
    showPepleBtn.addEventListener('click',handleShowPeople);

    const showCompanyBtn = document.createElement('button');
    showCompanyBtn.innerHTML = 'Show company';
    showCompanyBtn.classList.add('showBtn');
    carsSection.appendChild(showCompanyBtn);

    showCompanyBtn.addEventListener('click',deleteContent);
    showCompanyBtn.addEventListener('click',handleShowCompany);
}

function handleShowCarsShop() {
    const carsSection = document.getElementById('cars');
    const carContent = document.createElement('div');

    const parseCarsShop = JSON.parse(localStorage.getItem('cars'));

    carContent.classList.add('content');
    carsSection.appendChild(carContent);

    createCarShop(carContent,parseCarsShop);
}

function createCarShop(carContent,parseCarsShop) {
    const addNewCarBtn = document.createElement('button');
    addNewCarBtn.classList.add('btnAddItem');
    carContent.appendChild(addNewCarBtn);

    addNewCarBtn.addEventListener('click',handleAddNewCar);

    for(let i = 0; i < parseCarsShop.length; i++) {
        const carItem = document.createElement('div');
        const carNameTitle = document.createElement('h2');
        const carModel = document.createElement('p');
        const carPrice = document.createElement('p');

        carItem.classList.add('item');
        carNameTitle.classList.add('name');
        carModel.classList.add('info');
        carPrice.classList.add('info');

        carContent.appendChild(carItem);
        carItem.appendChild(carNameTitle);
        carItem.appendChild(carModel);
        carItem.appendChild(carPrice);

        carNameTitle.innerHTML = parseCarsShop[i].carName;
        carModel.innerHTML = 'Model: ' + parseCarsShop[i].model;
        carPrice.innerHTML = 'Price: ' + parseCarsShop[i].carPrice + '$';

        const viewCarBtn = document.createElement('button');
        const deleteCarBtn = document.createElement('button');
        const buyCarBtn = document.createElement('button');
        
        viewCarBtn.classList.add('btnOwners');
        deleteCarBtn.classList.add('btnOwners');
        buyCarBtn.classList.add('btnOwners');

        viewCarBtn.innerHTML = 'View car';
        deleteCarBtn.innerHTML = 'Delete car';
        buyCarBtn.innerHTML = 'Buy car';
        addNewCarBtn.innerHTML = 'Add new car';

        viewCarBtn.setAttribute('data-carId',parseCarsShop[i].id);
        deleteCarBtn.setAttribute('data-carId',parseCarsShop[i].id);
        buyCarBtn.setAttribute('data-carId',parseCarsShop[i].id);

        carItem.appendChild(viewCarBtn);
        carItem.appendChild(deleteCarBtn);       
        carItem.appendChild(buyCarBtn);

        viewCarBtn.addEventListener('click',handleViewCar);
        deleteCarBtn.addEventListener('click',handleDeleteCar);
        buyCarBtn.addEventListener('click',handleBuyCar);
    }
}

function handleAddNewCar() {
    deleteContent();
    const carsSection = document.getElementById('cars');
    const carContent = document.createElement('div');
    const carItem = document.createElement('div');
    const carTitle = document.createElement('h2');
    const carName = document.createElement('input');
    const carModel = document.createElement('input');
    const carPrice = document.createElement('input');
    const carEngineVolume = document.createElement('input');
    const carMaxSpeed = document.createElement('input');
    const carHorsePower = document.createElement('input');
    const btnAddCar = document.createElement('button');

    carContent.classList.add('content');
    carItem.classList.add('item')

    carsSection.appendChild(carContent);
    carContent.appendChild(carItem);
    carItem.appendChild(carTitle);
    carItem.appendChild(carName);
    carItem.appendChild(carModel);
    carItem.appendChild(carPrice);
    carItem.appendChild(carMaxSpeed);
    carItem.appendChild(carEngineVolume);
    carItem.appendChild(carHorsePower);
    carItem.appendChild(btnAddCar);

    carTitle.innerText = 'Add new car';
    carName.setAttribute('placeholder','Car name');
    carModel.setAttribute('placeholder','Car model');
    carPrice.setAttribute('placeholder','Price');
    carEngineVolume.setAttribute('placeholder','Engine volume');
    carMaxSpeed.setAttribute('placeholder','Car max speed');
    carHorsePower.setAttribute('placeholder','Car horsepower');
    btnAddCar.classList.add('btnOk');
    btnAddCar.innerText = 'OK';

    btnAddCar.addEventListener('click',function handleBtnAddPerson() {
        const carsArr = JSON.parse(localStorage.getItem('cars'));
        let addCar = new Car(carName.value,carModel.value,carPrice.value,carEngineVolume.value,carMaxSpeed.value,carHorsePower.value,carsArr);
        let check = 0;
        let checkName = /[A-z]{1,}/;
        let checkModel = /\w/;
        let checkPrice = /^\d{1,}$/;
        let checkEngineVolume = /^\d{1,}$/;
        let checkMaxSpeed = /^\d{1,}$/;
        let checkHorsePower = /^\d{1,}$/;

        if(carName.value === '' || carName.value.match(checkName) === null) {
            carName.classList.add('invalid');
        } else {
            carName.classList.remove('invalid');
            check++
        }
        if(carMaxSpeed.value === '' || carMaxSpeed.value.match(checkMaxSpeed) === null) {
            carMaxSpeed.classList.add('invalid');

        } else {
            carMaxSpeed.classList.remove('invalid');
            check++;
        }
        if(carModel.value === '' || carModel.value.match(checkModel) === null) {
            carModel.classList.add('invalid');
        } else {
            carModel.classList.remove('invalid');
            check++;
        }
        if(carPrice.value === '' || carPrice.value.match(checkPrice) === null) {
            carPrice.classList.add('invalid');
        } else {
            carPrice.classList.remove('invalid');
            check++;
        }
        if(carEngineVolume.value === '' || carEngineVolume.value.match(checkEngineVolume) === null) {
            carEngineVolume.classList.add('invalid');
        } else {
            carEngineVolume.classList.remove('invalid');
            check++;
        }
        if(carHorsePower.value === '' || carHorsePower.value.match(checkHorsePower) === null) {
            carHorsePower.classList.add('invalid');
        } else {
            carHorsePower.classList.remove('invalid');
            check++;
        }

        if(check === 6) {
            carsArr.push(addCar);
            localStorage.setItem('cars',JSON.stringify(carsArr));
            deleteContent();
            handleShowCarsShop();
        } 
    })

    
    const inputs = document.querySelectorAll('input');

    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('blur',function() {
            inputs[i].classList.remove('invalid');
        });
    }
}

function Car(carName,model,carPrice,engineVolume,maxSpeed,horsePower,parseCars) {

    for(let i = 0; i < parseCars.length; i++) {
        this.id = `${parseCars.length + 1}`;

        if(this.id === parseCars[i].id) {
            this.id++;
        }
    }

    this.carName = carName;
    this.model = model;
    this.carPrice = carPrice;
    this.engineVolume = engineVolume;
    this.maxSpeed = maxSpeed;
    this.horsePower = horsePower;
}

function handleBuyCar() {
    const chooseCar = event.target.getAttribute('data-carId');

    deleteContent();
    const carsSection = document.getElementById('cars');
    const chooseBuy = document.createElement('div');
    const chooseTitle = document.createElement('h2');
    const choosePersonBtn = document.createElement('button');
    const chooseCompanyBtn = document.createElement('button');

    chooseBuy.classList.add('confirmBlock');
    choosePersonBtn.classList.add('confirmBlock__btn');
    chooseCompanyBtn.classList.add('confirmBlock__btn');

    choosePersonBtn.setAttribute('data-carId',chooseCar);
    chooseCompanyBtn.setAttribute('data-carId',chooseCar);

    chooseTitle.innerHTML = 'Person or Company?';
    choosePersonBtn.innerHTML = 'Person';
    chooseCompanyBtn.innerHTML = 'Company';

    carsSection.appendChild(chooseBuy);
    chooseBuy.appendChild(chooseTitle);
    chooseBuy.appendChild(choosePersonBtn);
    chooseBuy.appendChild(chooseCompanyBtn);

    choosePersonBtn.addEventListener('click',handlePersonBuyCar);
    chooseCompanyBtn.addEventListener('click',handleCompanyBuyCar);
}

function handleCompanyBuyCar() {
    const carsSection = document.getElementById('cars');

    const carId = event.target.getAttribute('data-carId');
    const companyArr = JSON.parse(localStorage.getItem('company'));
    const parseCarsShop = JSON.parse(localStorage.getItem('cars'));

    const selectedCar = parseCarsShop.find(function (car) {
        return car.id === carId;
    })

    personOrCompany(selectedCar,companyArr,carsSection);
}

function handlePersonBuyCar() {
    const carsSection = document.getElementById('cars');

    const carId = event.target.getAttribute('data-carId');
    const peopleArr = JSON.parse(localStorage.getItem('people'));
    const parseCarsShop = JSON.parse(localStorage.getItem('cars'));

    const selectedCar = parseCarsShop.find(function (car) {
        return car.id === carId;
    })

    personOrCompany(selectedCar,peopleArr,carsSection);
}

function personOrCompany(selectedCar,peopleOrCompanyArr,carsSection) {
    deleteContent();
    const formBuyCar = document.createElement('form');
    const formContent = document.createElement('div');
    const carNamePrice = document.createElement('h2');

    formContent.classList.add('item');
    carNamePrice.classList.add('titleBuyForm');
    formBuyCar.classList.add('content');

    carsSection.appendChild(formBuyCar);
    formBuyCar.appendChild(formContent)
    formContent.appendChild(carNamePrice);

    carNamePrice.innerHTML = `${selectedCar.carName} Price: ${selectedCar.carPrice}$,Choose person:`;

    const peopleArr = localStorage.getItem('people');
    const companyArr = localStorage.getItem('company');
    const checkArr = JSON.stringify(peopleOrCompanyArr);
    
    for(let i = 0; i < peopleOrCompanyArr.length; i++) {
        const item = document.createElement('p');
        item.innerHTML = `${peopleOrCompanyArr[i].name}, Money: ${peopleOrCompanyArr[i].money}$`;
        item.setAttribute('data-carId',selectedCar.id);
        if(checkArr === peopleArr) {
            item.setAttribute('data-peopleId',peopleOrCompanyArr[i].id);
        }
        if(checkArr === companyArr) {
            item.setAttribute('data-companyId',peopleOrCompanyArr[i].id);
        }
        formContent.appendChild(item);
        item.classList.add('name');
        item.addEventListener('click',handleItemBuyCar);
    }   
}

function handleItemBuyCar() {
    const peopleId = event.target.getAttribute('data-peopleId');
    const companyId = event.target.getAttribute('data-companyId');

    deleteContent();

    const carsSection = document.getElementById('cars');
    const confirmBlock = document.createElement('div');
    const confirmTitle = document.createElement('h2');
    const btnYes = document.createElement('button');
    const btnNo = document.createElement('button');

    confirmBlock.classList.add('confirmBlock');
    btnYes.classList.add('confirmBlock__btn');
    btnYes.classList.add('confirmBlock__btn');
    confirmTitle.innerText = 'Confirm?';
    btnYes.innerText = 'Yes';
    btnNo.innerText = 'No';

    carsSection.appendChild(confirmBlock);
    confirmBlock.appendChild(confirmTitle);
    confirmBlock.appendChild(btnYes);
    confirmBlock.appendChild(btnNo);

    const carId = event.target.getAttribute('data-carId');
    const parseCarsShop = JSON.parse(localStorage.getItem('cars'));
    const peopleArr = JSON.parse(localStorage.getItem('people'));
    const companyArr = JSON.parse(localStorage.getItem('company'));

    const selectedCar = parseCarsShop.find(function (car) {
        return car.id === carId;
    })

    btnYes.setAttribute('data-carId',selectedCar.id);
    const selectedPeople = peopleArr.find(function (people) {
        return people.id === peopleId;
    })
    const selectedCompany = companyArr.find(function (company) {
        return company.id === companyId;
    })

    if(peopleId) {
        btnYes.setAttribute('data-peopleId',selectedPeople.id);
    }
    if(companyId) {
        
        btnYes.setAttribute('data-companyId',selectedCompany.id);
    } 

    btnYes.addEventListener('click',function() {
        if(peopleId) {
            for(let i = 0; i < peopleArr.length; i++) { 
                if(peopleArr[i].id === selectedPeople.id) {
                    if(Number(peopleArr[i].money) < Number(selectedCar.carPrice)) {
                        notEnoughMoney();
                        
                    }
                    if(Number(peopleArr[i].money) >= Number(selectedCar.carPrice)) {
                        const indexElement = parseCarsShop.indexOf(selectedCar);
                        parseCarsShop.splice((indexElement),1);
                        localStorage.setItem('cars',JSON.stringify(parseCarsShop));

                        peopleArr[i].money = Number(peopleArr[i].money - selectedCar.carPrice).toString();
                        selectedCar.carPrice = (Number(selectedCar.carPrice) - 1000).toString();
                        peopleArr[i].garage.push(selectedCar);
                        localStorage.setItem('people',JSON.stringify(peopleArr));
                        handleShowPeople();
                        confirmBlock.remove(); 
                    }

                }
            }
        }
        if(companyId) {
            for(let i = 0; i < companyArr.length; i++) {
                if(companyArr[i].id === selectedCompany.id) {
                    if(Number(companyArr[i].money) < Number(selectedCar.carPrice)) {
                        notEnoughMoney();
                    }
                    if(Number(companyArr[i].money) >= Number(selectedCar.carPrice)) {
                        const indexElement = parseCarsShop.indexOf(selectedCar);
                        parseCarsShop.splice((indexElement),1);
                        localStorage.setItem('cars',JSON.stringify(parseCarsShop));

                        companyArr[i].money = Number(companyArr[i].money - selectedCar.carPrice).toString();
                        selectedCar.carPrice = (Number(selectedCar.carPrice) - 1000).toString();                                     //// нужно сделать цену
                        companyArr[i].garage.push(selectedCar);
                        localStorage.setItem('company',JSON.stringify(companyArr));
                        handleShowCompany();
                        confirmBlock.remove();
                    } 
                }
            }

        }   
    })

    btnNo.addEventListener('click',function() {
        confirmBlock.remove();
    })
}

function notEnoughMoney() {
    deleteContent();
    const carContent = document.getElementById('cars');
    const confirmBlock = document.createElement('div');
    const confirmTitle = document.createElement('h2');

    confirmBlock.classList.add('confirmBlock');
    confirmTitle.innerText = 'Not enough money';

    carContent.appendChild(confirmBlock);
    confirmBlock.appendChild(confirmTitle);
}

function handleDeleteCar() {
    deleteContent();
    const parseCarsShop = JSON.parse(localStorage.getItem('cars'));
    const carId = event.target.getAttribute('data-carId');
    const carContent = document.getElementById('cars');

    const selectedCar = parseCarsShop.find(function (car) {
        return car.id === carId;
    })
    confirmDeleteCar(selectedCar,carContent,parseCarsShop);
}

function confirmDeleteCar(selectedCar,carContent,parseCarsShop) {
    const confirmBlock = document.createElement('div');
    const confirmTitle = document.createElement('h2');
    const btnYes = document.createElement('button');
    const btnNo = document.createElement('button');

    confirmBlock.classList.add('confirmBlock');
    btnYes.classList.add('confirmBlock__btn');
    btnYes.classList.add('confirmBlock__btn');
    confirmTitle.innerText = 'Confirm?';
    btnYes.innerText = 'Yes';
    btnNo.innerText = 'No';

    carContent.appendChild(confirmBlock);
    confirmBlock.appendChild(confirmTitle);
    confirmBlock.appendChild(btnYes);
    confirmBlock.appendChild(btnNo);

    btnYes.addEventListener('click',function() {
        const indexElement = parseCarsShop.indexOf(selectedCar);
        parseCarsShop.splice((indexElement),1);
        localStorage.setItem('cars',JSON.stringify(parseCarsShop));
        handleShowCarsShop();
        confirmBlock.remove();
    })

    btnNo.addEventListener('click',function() {
        handleShowCarsShop();
        confirmBlock.remove();
    })
}

function handleViewCar() {
    const parseCarsShop = JSON.parse(localStorage.getItem('cars'));
    const carId = event.target.getAttribute('data-carId');
    const carContent = document.getElementById('cars');

    const selectedCar = parseCarsShop.find(function (car) {
        return car.id === carId;
    })
    showCarInfo(selectedCar,carContent);
}

function showCarInfo(selectedCar,carContent) {
    deleteContent();
    const carInfoContent = document.createElement('div');
    const carItem = document.createElement('div');
    const carNameTitle = document.createElement('h2');
    const carModel = document.createElement('p');
    const carPrice = document.createElement('p');
    const engineVolume = document.createElement('p');
    const maxSpeed = document.createElement('p');
    const horsePower = document.createElement('p');

    carInfoContent.classList.add('content');
    carItem.classList.add('item');
    carItem.classList.add('itemCar');
    carNameTitle.classList.add('name');
    carModel.classList.add('info');
    carPrice.classList.add('info');
    engineVolume.classList.add('info');
    maxSpeed.classList.add('info');
    horsePower.classList.add('info');

    carNameTitle.innerHTML = selectedCar.carName;
    carModel.innerHTML = 'Model: ' + selectedCar.model;
    carPrice.innerHTML = 'Price: ' + selectedCar.carPrice + '$';
    engineVolume.innerHTML = 'Engine volume: ' + selectedCar.engineVolume;
    maxSpeed.innerHTML = 'Max speed: ' + selectedCar.maxSpeed;
    horsePower.innerHTML = 'Horse power: ' + selectedCar.horsePower; 

    carContent.appendChild(carInfoContent);
    carInfoContent.appendChild(carItem);
    carItem.appendChild(carNameTitle);
    carItem.appendChild(carModel);
    carItem.appendChild(carPrice);
    carItem.appendChild(engineVolume);
    carItem.appendChild(maxSpeed);
    carItem.appendChild(horsePower);

    const btnBack = document.createElement('button');
    btnBack.innerHTML = 'Back';

    btnBack.addEventListener('click',deleteContent);
    btnBack.addEventListener('click',handleShowCarsShop);

    carItem.appendChild(btnBack);
}

function handleShowCompany() {
    const parseCompany = JSON.parse(localStorage.getItem('company'));
    const carsSection = document.getElementById('cars');

    createOwners(carsSection,parseCompany);
}

function handleShowPeople() {
    const parsePeople = JSON.parse(localStorage.getItem('people'));
    const carsSection = document.getElementById('cars');

    createOwners(carsSection,parsePeople);
}

function createOwners(carsSection,parseObj) {
    const content = document.createElement('div');
    carsSection.appendChild(content);
    const checkArr = JSON.stringify(parseObj);
    const peopleArr = localStorage.getItem('people');
    const companyArr = localStorage.getItem('company');
    
    for(let i = 0; i < parseObj.length; i++) {
        const item = document.createElement('div');
        const name = document.createElement('h2');
        const money = document.createElement('p');
        const garageList = document.createElement('ul');

        content.classList.add('content');
        item.classList.add('item');
        name.classList.add('name');

        content.appendChild(item);
        item.appendChild(name);
        item.appendChild(money);
        item.appendChild(garageList);

        name.innerHTML = parseObj[i].name;
        money.innerHTML = `Money: ${parseObj[i].money}$`;

        let garage = parseObj[i].garage;

        for(let j = 0; j < parseObj[i].garage.length; j++) {
            const garageListItem = document.createElement('li');
            garageListItem.innerHTML = `${garage[j].carName} ${garage[j].carPrice}$`;
            garageListItem.setAttribute('data-carId',garage[j].id);
            garageList.appendChild(garageListItem);
        }

        const viewGarageBtn = document.createElement('button');
        const deleteItemBtn = document.createElement('button');

        viewGarageBtn.innerHTML = 'View garage';       
        deleteItemBtn.innerHTML = 'Delete item';  

        if(checkArr === peopleArr) {
            viewGarageBtn.setAttribute('data-peopleId',parseObj[i].id);
            deleteItemBtn.setAttribute('data-peopleId',parseObj[i].id);
        }
        if(checkArr === companyArr) {
            viewGarageBtn.setAttribute('data-companyId',parseObj[i].id);
            deleteItemBtn.setAttribute('data-companyId',parseObj[i].id)
        }

        viewGarageBtn.classList.add('btnOwners');
        deleteItemBtn.classList.add('btnOwners');
        
        item.appendChild(viewGarageBtn);
        item.appendChild(deleteItemBtn);

        viewGarageBtn.addEventListener('click',handleViewGarage);
        deleteItemBtn.addEventListener('click',handleDeleteItem);
    }

    const addNewPersonBtn = document.createElement('button');
    addNewPersonBtn.classList.add('btnAddItem');
    addNewPersonBtn.innerHTML = 'Add new item';
    content.appendChild(addNewPersonBtn);

    if(checkArr === peopleArr) {
        addNewPersonBtn.setAttribute('data-newItemBtn','people');
    }
    if(checkArr === companyArr) {
        addNewPersonBtn.setAttribute('data-newItemBtn','company');
    }
    addNewPersonBtn.addEventListener('click',handleAddNewItem);
}

function handleDeleteItem() {
    deleteContent();
    const peopleId = event.target.getAttribute('data-peopleId');
    const companyId = event.target.getAttribute('data-companyId');

    const carContent = document.getElementById('cars');
    const confirmBlock = document.createElement('div');
    const confirmTitle = document.createElement('h2');
    const btnYes = document.createElement('button');
    const btnNo = document.createElement('button');

    confirmBlock.classList.add('confirmBlock');
    btnYes.classList.add('confirmBlock__btn');
    btnYes.classList.add('confirmBlock__btn');
    confirmTitle.innerText = 'Confirm?';
    btnYes.innerText = 'Yes';
    btnNo.innerText = 'No';

    carContent.appendChild(confirmBlock);
    confirmBlock.appendChild(confirmTitle);
    confirmBlock.appendChild(btnYes);
    confirmBlock.appendChild(btnNo);

    if(peopleId) {
        btnYes.setAttribute('data-peopleId',peopleId);
    }
    if(companyId) {
        btnYes.setAttribute('data-companyId',companyId);
    }

    btnYes.addEventListener('click',function() {
        const peopleId = event.target.getAttribute('data-peopleId');
        const companyId = event.target.getAttribute('data-companyId');

        if(peopleId) {
            const parsePeople = JSON.parse(localStorage.getItem('people'));
            const selectedPeople = parsePeople.find(function (item) {
                return item.id === peopleId;
            })
            const indexElement = parsePeople.indexOf(selectedPeople);
            parsePeople.splice((indexElement),1);
            localStorage.setItem('people',JSON.stringify(parsePeople));
            handleShowPeople();
        }
        if(companyId) {
            const parseCompany = JSON.parse(localStorage.getItem('company'));
            const selectedCompany = parseCompany.find(function (item) {
                return item.id === companyId;
            })
            const indexElement = parseCompany.indexOf(selectedCompany);
            parseCompany.splice((indexElement),1);
            localStorage.setItem('company',JSON.stringify(parseCompany));
            handleShowCompany();
        }
        confirmBlock.remove();
    })

    btnNo.addEventListener('click',function() {
        handleShowCarsShop();
        confirmBlock.remove();
    })

    
}

function handleAddNewItem() {
    deleteContent();
    const carsSection = document.getElementById('cars');
    const carContent = document.createElement('div');
    const item = document.createElement('div');
    const title = document.createElement('h2');
    const name = document.createElement('input');
    const money = document.createElement('input');
    const btnAddItem = document.createElement('button');

    carContent.classList.add('content');
    item.classList.add('item')

    carsSection.appendChild(carContent);
    carContent.appendChild(item);
    item.appendChild(title);
    item.appendChild(name);
    item.appendChild(money);
    item.appendChild(btnAddItem);

    title.innerText = 'Add new item';
    name.setAttribute('placeholder','Name');
    money.setAttribute('placeholder','Money');
    btnAddItem.classList.add('btnOk');
    btnAddItem.innerText = 'OK';

    const checkItem = event.target.getAttribute('data-newItemBtn');

    btnAddItem.addEventListener('click',function handleBtnAddItem() {
        let check = 0;
        let checkName = /[A-Z][a-z]{1,}/;
        let checkMoney = /\d/;

        if(name.value === '' || name.value.match(checkName) === null) {
            name.classList.add('invalid');
        } else {
            name.classList.remove('invalid');
            check++
        }
        if(money.value === '' || money.value.match(checkMoney) === null) {
            money.classList.add('invalid');
        } else {
            money.classList.remove('invalid');
            check++;
        }

        if(checkItem === 'people' && check === 2) {
            const parsePeopleArr = JSON.parse(localStorage.getItem('people'));
            let addItem = new Item(name.value,money.value,'people',parsePeopleArr);
            parsePeopleArr.push(addItem);
            localStorage.setItem('people',JSON.stringify(parsePeopleArr));
            deleteContent()
            handleShowPeople();
        }
        if(checkItem === 'company' && check === 2) {
            const parseCompanyArr = JSON.parse(localStorage.getItem('company'));
            let addItem = new Item(name.value,money.value,'company',parseCompanyArr);
            parseCompanyArr.push(addItem);
            localStorage.setItem('company',JSON.stringify(parseCompanyArr));
            deleteContent();
            handleShowCompany();
        }

    })

    const inputs = document.querySelectorAll('input');

    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('blur',function() {
            inputs[i].classList.remove('invalid');
        });
    }
}

function Item (name,money,type,peopleOrCompanyArr) {
    for(let i = 0; i < peopleOrCompanyArr.length; i++) {
        this.id = `${peopleOrCompanyArr.length + 1}`;

        if(this.id === peopleOrCompanyArr[i].id) {
            this.id++;
        }
    }

    this.name = name;
    this.money = money;
    this.type = type;
    this.garage = [];
}

function handleViewGarage() {
    const peopleId = event.target.getAttribute('data-peopleId');
    const companyId = event.target.getAttribute('data-companyId');
    const parsePeopleArr = JSON.parse(localStorage.getItem('people'));
    const parseCompanyArr = JSON.parse(localStorage.getItem('company'));

    deleteContent();

    if(peopleId) {
        const selectedItem = parsePeopleArr.find(function (people) {
            return people.id === peopleId;
        })
        showGarage(selectedItem);
    }
    if(companyId) {
        const selectedItem = parseCompanyArr.find(function (company) {
            return company.id === companyId;
        })
        showGarage(selectedItem);
    } 
}

function showGarage(selectedItem) {
    const carsSection = document.getElementById('cars');
    const content = document.createElement('div');
    const contentTitle = document.createElement('h2');

    content.classList.add('content');
    contentTitle.innerHTML = `Garage ${selectedItem.name}`;
    contentTitle.classList.add('contentTitle');

    content.appendChild(contentTitle);
    carsSection.appendChild(content);

    for(let i = 0; i < selectedItem.garage.length; i++) {
        const item = document.createElement('div');
        const itemName = document.createElement('h2');
        const model = document.createElement('p');
        const itemPrice = document.createElement('p');
        const engineVolume = document.createElement('p');
        const maxSpeed = document.createElement('p');
        const horsePower = document.createElement('p');

        const sellCarBtn = document.createElement('button');
        sellCarBtn.setAttribute('data-carId',selectedItem.garage[i].id);

        sellCarBtn.innerHTML = 'Sell car';

        if(selectedItem.type === 'people') {
            sellCarBtn.setAttribute('data-peopleId',selectedItem.id);
        }
        if(selectedItem.type === 'company') {
            sellCarBtn.setAttribute('data-companyId',selectedItem.id);
        }
        

        item.classList.add('item');

        content.appendChild(item);
        item.appendChild(itemName);
        item.appendChild(model);
        item.appendChild(itemPrice);
        item.appendChild(engineVolume);
        item.appendChild(maxSpeed);
        item.appendChild(horsePower);
        item.appendChild(sellCarBtn);

        itemName.innerHTML = selectedItem.garage[i].carName;
        model.innerHTML = `Model: ${selectedItem.garage[i].model}`;
        itemPrice.innerHTML = `Price: ${selectedItem.garage[i].carPrice}$`;
        engineVolume.innerHTML = `Engine volume: ${selectedItem.garage[i].engineVolume}`;
        maxSpeed.innerHTML = `Max speed: ${selectedItem.garage[i].maxSpeed}`;
        horsePower.innerHTML = `Horse power: ${selectedItem.garage[i].horsePower}`;

        sellCarBtn.addEventListener('click',handleSellCar);
    }
}

function handleSellCar() {
    const peopleId = event.target.getAttribute('data-peopleId');
    const companyId = event.target.getAttribute('data-companyId');
    const carId = event.target.getAttribute('data-carId');
    const carContent = document.getElementById('cars');
    
    const parseCompanyArr = JSON.parse(localStorage.getItem('company'));

    deleteContent();

    const confirmBlock = document.createElement('div');
    const confirmTitle = document.createElement('h2');
    const btnYes = document.createElement('button');
    const btnNo = document.createElement('button');

    confirmBlock.classList.add('confirmBlock');
    btnYes.classList.add('confirmBlock__btn');
    btnYes.classList.add('confirmBlock__btn');
    confirmTitle.innerText = 'Confirm?';
    btnYes.innerText = 'Yes';
    btnNo.innerText = 'No';

    carContent.appendChild(confirmBlock);
    confirmBlock.appendChild(confirmTitle);
    confirmBlock.appendChild(btnYes);
    confirmBlock.appendChild(btnNo);

    btnYes.setAttribute('data-carId',carId);

    if(peopleId) {
        btnYes.setAttribute('data-peopleId',peopleId);
        btnYes.addEventListener('click',handleBtnYesSellCar);
    }
    if(companyId) {
        btnYes.setAttribute('data-companyId',companyId);
        btnYes.addEventListener('click',handleBtnYesSellCar);
    }
    btnYes.addEventListener('click',function del() {
        confirmBlock.remove();
    })

    btnNo.addEventListener('click',function() {
        confirmBlock.remove();
    })
}

function handleBtnYesSellCar() {
    const peopleId = event.target.getAttribute('data-peopleId');
    const companyId = event.target.getAttribute('data-companyId');
    const carId = event.target.getAttribute('data-carId');

    if(peopleId) {
        const parsePeopleArr = JSON.parse(localStorage.getItem('people'));
        const selectedPeople = parsePeopleArr.find(function (person) {
            return person.id === peopleId;
        })
    
        let garageArr = selectedPeople.garage;
    
        const selectedCar = garageArr.find(function(car) {
            return car.id === carId;
        })
    
        selectedPeople.money = (Number(selectedPeople.money) + Number(selectedCar.carPrice)).toString();
    
        const indexElement = garageArr.indexOf(selectedCar);
        garageArr.splice((indexElement),1);
    
        const indexPeople = parsePeopleArr.indexOf(selectedPeople);
    
        parsePeopleArr.splice(indexPeople,selectedPeople);
        localStorage.setItem('people',JSON.stringify(parsePeopleArr));
    
        const parseCarArr = JSON.parse(localStorage.getItem('cars'));
        selectedCar.carPrice = (Number(selectedCar.carPrice) + 1000).toString();
        parseCarArr.push(selectedCar);
        localStorage.setItem('cars',JSON.stringify(parseCarArr));
        handleShowPeople();
    }

    if(companyId) {
        const parseCompanyArr = JSON.parse(localStorage.getItem('company'));
        
        const selectedCompany = parseCompanyArr.find(function (company) {
            return company.id === companyId;
        })

    
        let garageCompanyArr = selectedCompany.garage;
    
        const selectedCar = garageCompanyArr.find(function(car) {
            return car.id === carId;
        })
    
        selectedCompany.money = (Number(selectedCompany.money) + Number(selectedCar.carPrice)).toString();
    
        const indexElement = garageCompanyArr.indexOf(selectedCar);
        garageCompanyArr.splice((indexElement),1);
    
        const indexPeople = parseCompanyArr.indexOf(selectedCompany);
    
        parseCompanyArr.splice(indexPeople,selectedCompany);
        localStorage.setItem('company',JSON.stringify(parseCompanyArr));
    
        const parseCarArr = JSON.parse(localStorage.getItem('cars'));
        selectedCar.carPrice = (Number(selectedCar.carPrice) + 1000).toString();
        parseCarArr.push(selectedCar);
        localStorage.setItem('cars',JSON.stringify(parseCarArr));
        handleShowCompany();
    }
    
}

function localStorageData() {
    const carsStorage = localStorage.getItem('cars');
    if(!carsStorage) {
        localStorage.setItem('cars', JSON.stringify(cars));
    }

    const peopleStorage = localStorage.getItem('people');
    if(!peopleStorage) {
        localStorage.setItem('people', JSON.stringify(people));
    }

    const companyStorage = localStorage.getItem('company');
    if(!companyStorage) {
        localStorage.setItem('company', JSON.stringify(company));
    }
}

function deleteContent() {
    const contentClass = document.querySelectorAll('.content');
    const confirmBlock = document.querySelector('.confirmBlock');

    if(confirmBlock) {
        confirmBlock.remove();
    }

    if(contentClass) {
        for(let i = 0; i < contentClass.length; i++) {
            contentClass[i].remove();
        }

    }
}