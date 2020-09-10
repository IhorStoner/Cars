const cars = [
    {
        id: '0',
        carName: 'BMW',
        model: 'e34',
        carPrice: '5000',
        engineVolume: '3.5',
        maxSpeed: '250',
        horsePower: '366',
    },
    {
        id: '1',
        carName: 'Audi',
        model: 'r8',
        carPrice: '5600',
        engineVolume: '3.7',
        maxSpeed: '260',
        horsePower: '380',
    },
    {
        id: '2',
        carName: 'Subaru',
        model: 'Impreza',
        carPrice: '5700',
        engineVolume: '3.6',
        maxSpeed: '280',
        horsePower: '366',
    },
    {
        id: '3',
        carName: 'Zaz 1102',
        model: 'Tavria Nova',
        carPrice: '1000',
        engineVolume: '1.3',
        maxSpeed: '180',
        horsePower: '66',
    },
]

const people = [
    {
        id: '11',
        name: 'David Joker',
        money: '20000',
        type: 'people',
        garage: [
            {
                id: '0',
                carName: 'BMW',
                model: 'e34',
                carPrice: '4000',
                engineVolume: '3.5',
                maxSpeed: '250',
                horsePower: '366',
            },
            {
                id: '2',
                carName: 'Audi',
                model: 'r8',
                carPrice: '4600',
                engineVolume: '3.7',
                maxSpeed: '260',
                horsePower: '380',
            },
        ],
    },
    {
        id: '12',
        name: 'Valeriy Meladze',
        money: '5000',
        type: 'people',
        garage: [
            {
                id: '0',
                carName: 'BMW',
                model: 'e34',
                carPrice: '4000',
                engineVolume: '3.5',
                maxSpeed: '250',
                horsePower: '366',
            },
            {
                id: '2',
                carName: 'Audi',
                model: 'r8',
                carPrice: '4600',
                engineVolume: '3.7',
                maxSpeed: '260',
                horsePower: '380',
            },
        ],
    },
    {
        id: '13',
        name: 'Donald Trump',
        money: '5000',
        type: 'people',
        garage: [
            {
                id: '0',
                carName: 'BMW',
                model: 'e34',
                carPrice: '4000',
                engineVolume: '3.5',
                maxSpeed: '250',
                horsePower: '366',
            },
            {
                id: '2',
                carName: 'Audi',
                model: 'r8',
                carPrice: '4600',
                engineVolume: '3.7',
                maxSpeed: '260',
                horsePower: '380',
            },
        ],
    },
]

const company = [
    {
        id: '21',
        name: 'Lohika',
        money: '50000000',
        type: 'company',
        garage: [
            {
                id: '0',
                carName: 'BMW',
                model: 'e34',
                carPrice: '4000',
                engineVolume: '3.5',
                maxSpeed: '250',
                horsePower: '366',
            },
            {
                id: '2',
                carName: 'Audi',
                model: 'r8',
                carPrice: '4600',
                engineVolume: '3.7',
                maxSpeed: '260',
                horsePower: '380',
            },
            {
                id: '3',
                carName: 'Subaru',
                model: 'Impreza',
                carPrice: '5700',
                engineVolume: '3.6',
                maxSpeed: '280',
                horsePower: '366',
            },
        ],
    },
    {
        id: '22',
        name: 'ONAPT',
        money: '0',
        type: 'company',
        garage: [
            {
                id: '0',
                carName: 'BMW',
                model: 'e34',
                carPrice: '4000',
                engineVolume: '3.5',
                maxSpeed: '250',
                horsePower: '366',
            },
            {
                id: '4',
                carName: 'Zaz 1102',
                model: 'Tavria Nova',
                carPrice: '1000',
                engineVolume: '1.3',
                maxSpeed: '180',
                horsePower: '66',
            },
        ],
    },
    {
        id: '23',
        name: 'House',
        money: '12345',
        type: 'company',
        garage: [
            {
                id: '0',
                carName: 'BMW',
                model: 'e34',
                carPrice: '4000',
                engineVolume: '3.5',
                maxSpeed: '250',
                horsePower: '366',
            },
            {
                id: '4',
                carName: 'Zaz 1102',
                model: 'Tavria Nova',
                carPrice: '1000',
                engineVolume: '1.3',
                maxSpeed: '180',
                horsePower: '66',
            },
        ],
        NewItem: function (name,money,peopleOrCompanyArr) {
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
    },
]