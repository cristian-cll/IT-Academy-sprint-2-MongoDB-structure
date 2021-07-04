connection = new Mongo("localhost");
db = connection.getDB("pizzeria");
db.dropDatabase();


db.createCollection("provinces");
db.createCollection("stores");
db.createCollection("customers");
db.createCollection("employees");
db.createCollection("products");
db.createCollection("orders");


//-------------- Creating provinces


db.provinces.insertOne(
    {
    _id: 0,
    province: "Barcelona",
    municipes: ["Polinyà", "Cervelló", "Els Prats de Rei", "Torelló", "Barcelona"] 
    }
);
    
db.provinces.insertOne(
    {
    _id: 1,
    province: "Girona",
    municipes: ["Aiguaviva", "Alfar", "Bagur", "Besalú", "Blanes"]
    }
);


//-------------- Creating stores


db.stores.insertOne(
    {
    _id: 0,
    address: { 
        street: "Sepúlveda",
        number: 58,
        floor: 2,
        door: 1,
        zip: 08018,
        province: 1,
        municipe: "Blanes"
        }
    }
);

db.stores.insertOne(
    {
    _id: 1,
    address: { 
        street: "Av.Catalunya",
        number: 158,
        floor: 0,
        door: 1,
        zip: 08018,
        province: 0,
        municipe: "Barcelona"
        }
    }
);


//-------------- Creating customers


db.customers.insertOne(
    {
    _id: 0,
    name: "Xavi",
    surname: "García" ,
    lastname: "Gómez",
    phone: 658956232,
    address : { 
        street: "Sepúlveda",
        number: 58,
        floor: 2,
        door: 1,
        zip: 08018,
        province: 0,
        municipe: "Barcelona"
        }
    }
);

db.customers.insertOne(
    {
    _id: 1,
    name: "Laura",
    surname: "García" ,
    lastname: "Gómez",
    email: "laura@gmail.com",
    phone: 658984532,
    address : { 
        street: "Cervantes",
        number: 325,
        floor: 4,
        door: 3,
        zip: 28695,
        province: 1,
        municipe: "Blanes"
        }
    }
);


//-------------- Creating employees


db.employees.insertOne(
    {
    _id: 0,
    name: "Jesús",
    surname: "Calleja",
    lastname: "Río",
    nif: "45256982D",
    phone: 658232584,
    role: "Repartidor",
    store_id: 0,
    }
);

db.employees.insertOne(
    {
    _id: 1,
    name: "María",
    surname: "Fernández",
    lastname: "Aguado",
    nif: "45256982D",
    phone: 658232584,
    role: "Cocinero",
    store_id: 1,
    }
);


//-------------- Creating products


db.products.insertOne(
    {
    _id: 0,
    name: "BigMac",
    description: "Hamburguesa idéntica a la del MacDonalds",
    image: "http://img.com/aisjwi.jpg",
    type: "Hamburguesa",
    price: 8.70,
    },
);

db.products.insertOne(
    {
    _id: 1,
    name: "Coca-Cola",
    description: "Bebida refrescante",
    image: "http://img.com/aisjwi.jpg",
    type: "Bebida",
    price: 1.50
    }
);

db.products.insertOne(
    {
    _id: 2,
    name: "Pizza Popeye",
    description: "Pizza vegana",
    image: "http://img.com/aisjwi.jpg",
    type: "Pizza",
    pizza_category: "Vegana",
    price: 8.20
    }
);

db.products.insertOne(
    {
    _id: 3,
    name: "Pizza Barbacoa",
    description: "Pizza con auténtico sabor a barbacoa",
    image: "http://img.com/aisjwi.jpg",
    type: "Pizza",
    pizza_category: "Ahumada",
    price: 9.70
    }
);

db.products.insertOne(
    {
    _id: 4,
    name: "Pizza campesina",
    description: "Pizza tradicional",
    image: "http://img.com/aisjwi.jpg",
    type: "Pizza",
    pizza_category: "Tradicional",
    price: 6.90
    }
);


//-------------- Creating orders


db.orders.insertOne(
    {
    _id: 0,
    Customer_id: 0,
    Employee_id: 1,
    date_time: Date.now(),
    order_type: "Tienda",
    item_line: [
    {
        Product_id: 0,
        price: 8.70,
        quantity: 3
    },
    {
        Product_id: 1,
        price: 1.50,
        quantity: 3    
    },
    {
        Product_id: 2,
        price: 8.20,
        quantity: 1 
    }
    ],
    total_price: 38.8
    }
);

db.orders.insertOne(
    {
    _id: 1,
    Customer_id: 1,
    Employee_id: 0,
    date_time: Date.now(),
    order_type: "Envío",
    item_line: [
    {
        Product_id: 1,
        price: 1.50,
        quantity: 2    
    },
    {
        Product_id: 3,
        price: 9.70,
        quantity: 1 
    },
    {
        Product_id: 4,
        price: 6.90,
        quantity: 1 
    }
    ],
    total_price: 19.60
    }
);