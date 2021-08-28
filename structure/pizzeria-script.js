connection = new Mongo("localhost");

print('-------------- Connecting to database --------------');

db = connection.getDB("pizzeria");

print('-------------- Deleting database --------------');

db.dropDatabase();

print('-------------- Creating collections --------------');



db.createCollection("customers");
db.createCollection("products");
db.createCollection("restaurants");
db.createCollection("orders");



print('-------------- Creating Costumers --------------');

db.customers.insertMany(
    [
        {
            _id: 0,
            name: "Xavi",
            email: "xavi@gmail.com",
            phone: 658956232,
            address: {
                street: "Sepúlveda",
                number: 58,
                floor: 2,
                door: 1,
                city: "Barcelona",
                zip: 08018,
                country: "Spain",
            },
        },
        {
            _id: 1,
            name: "Laura",
            email: "laura@gmail.com",
            phone: 658984532,
            address: {
                street: "Cervantes",
                number: 325,
                floor: 4,
                door: 3,
                city: "Madrid",
                zip: 28695,
                country: "Spain",
            },
        }
    ]
);





print('-------------- Creating Restaurants --------------');

db.restaurants.insertMany(
    [
        {
            _id: 0,
            name: "Pizzeria Blanes",
            address: {
                street: "Sepúlveda",
                number: 58,
                floor: 2,
                door: 1,
                zip: 08018,
                province: "Barcelona",
                municipe: "Blanes"
            },
            employees: [
                {
                    _id: 0,
                    name: "Jesús",
                    surname: "Calleja",
                    lastname: "Río",
                    nif: "45256982D",
                    phone: 658232584,
                    role: "Repartidor",
                }
            ]
        },
        {
            _id: 1,
            name: "Pizzeria Barcelona",
            address: {
                street: "Av.Catalunya",
                number: 158,
                floor: 0,
                door: 1,
                zip: 08018,
                province: "Girona",
                municipe: "Barcelona"
            },
            employees: [
                {
                    _id: 1,
                    name: "María",
                    surname: "Fernández",
                    lastname: "Aguado",
                    nif: "45256982D",
                    phone: 658232584,
                    role: "Cocinero",
                }
            ]
        }

    ]
)


print('-------------- Creating Products --------------');

db.products.insertMany(
    [
        {
            _id: 0,
            name: "BigMac",
            description: "Hamburguesa idéntica a la del MacDonalds",
            image: "http://img.com/aisjwi.jpg",
            type: "Hamburguesa",
            price: 8.70,
        },
        {
            _id: 1,
            name: "Coca-Cola",
            description: "Bebida refrescante",
            image: "http://img.com/aisjwi.jpg",
            type: "Bebida",
            price: 1.50
        },
        {
            _id: 2,
            name: "Pizza Popeye",
            description: "Pizza vegana",
            image: "http://img.com/aisjwi.jpg",
            type: "Pizza",
            pizza_category: "Vegana",
            price: 8.20
        },
        {
            _id: 3,
            name: "Pizza Barbacoa",
            description: "Pizza con auténtico sabor a barbacoa",
            image: "http://img.com/aisjwi.jpg",
            type: "Pizza",
            pizza_category: "Ahumada",
            price: 9.70
        },
        {
            _id: 4,
            name: "Pizza campesina",
            description: "Pizza tradicional",
            image: "http://img.com/aisjwi.jpg",
            type: "Pizza",
            pizza_category: "Tradicional",
            price: 6.90
        }
    ]
);



print('-------------- Creating Orders --------------');


db.orders.insertMany(
    [
        {
            _id: 0,
            Customer_id: { $ref: 'customers', $id: 0 },
            Employee_id: 1,
            date_time: ISODate(),
            delivery: false,
            item_line: [
                {
                    Product_id: { $ref: 'products', $id: 0 },
                    price: 8.70,
                    quantity: 3
                },
                {
                    Product_id: { $ref: 'products', $id: 1 },
                    price: 1.50,
                    quantity: 3
                },
                {
                    Product_id: { $ref: 'products', $id: 2 },
                    price: 8.20,
                    quantity: 1
                }
            ],
            total_price: 38.8
        },
        {
            _id: 1,
            Customer_id: { $ref: 'customers', $id: 1 },
            Employee_id: 0,
            date_time: ISODate(),
            delivery: true,
            item_line: [
                {
                    Product_id: { $ref: 'products', $id: 1 },
                    price: 1.50,
                    quantity: 2
                },
                {
                    Product_id: { $ref: 'products', $id: 3 },
                    price: 9.70,
                    quantity: 1
                },
                {
                    Product_id: { $ref: 'products', $id: 4 },
                    price: 6.90,
                    quantity: 1
                }
            ],
            total_price: 19.60
        }
    ]
);

print('-------------- End script --------------');