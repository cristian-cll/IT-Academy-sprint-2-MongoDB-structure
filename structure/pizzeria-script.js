connection = new Mongo("localhost");
db = connection.getDB("pizzeria");
db.dropDatabase();

db.createCollection("customers");
db.createCollection("stores");
db.createCollection("provinces");
db.createCollection("employees");
db.createCollection("products");
db.createCollection("orders");

//-------------- Creating customers

db.customers.insertOne(
    {
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
        municipe: 2,
        province: 08

    },
    createdAt: Date.now()
    }
);

db.customers.insertOne(
    {
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
        municipe: 2,
        province: 07
    },

    createdAt: Date.now()
    }
);

//-------------- Creating employees

db.employees.insertOne(
    {
        name: "Jesús",
        surname: "Calleja",
        lastname: "Río",
        nif: "45256982D",
        phone: 658232584,
        role:"repartidor",
        store_id: 1,
        createdAt: Date.now()
    }
);

db.employees.insertOne(
    {
        name: "María",
        surname: "Fernández",
        lastname: "Aguado",
        nif: "45256982D",
        phone: 658232584,
        role:"cocinera",
        store_id: 2,
        createdAt: Date.now()
    }
);

//-------------- Creating provinces

db.provinces.insertOne(
{
    province: 08,
    municipe: 1
}
);

db.provinces.insertOne(
    {
        province: 04,
        municipe: 2
    }
    );



//-------------- Creating products

db.products.insertOne(
    {
    name: "Pizza",
    description: "Pepperonni",
    image: "djidjidj.jpg",
    price: 8.90,
    category: "Pizzas",
    createdAt: Date.now()
    }
);

db.products.insertOne(
    {
    name: "Hamburguesa",
    description: "Vegana",
    image: "djidjiddj.jpg",
    price: 8.90,
    category: "Hamburguesas",
    createdAt: Date.now()
    }
);

//-------------- Creating stores

db.stores.insertOne(
    {
    address : { 
        street: "Av. Meritxell",
        number: 5,
        floor: 1,
        door: 1,
        city: "Andorra",
        zip: 89797,
        country: "Andorra",
    },
    province: 08,
    createdAt: Date.now()
    }
);

db.stores.insertOne(
    {
    address : { 
        street: "Av. Catalunya",
        number: 5,
        floor: 1,
        door: 1,
        city: "Barcelona",
        zip: 89797,
        country: "España",
    },
    province: 08,
    createdAt: Date.now()
    }
);

//-------------- Creating orders

db.orders.insertOne(
    {
    date_time: "11/11/1111 11:11:11",
    order_type: "domicilio",
    total_price: 10,
    store_id: 2,
    items: [
        {
            product_id: 1,
            quantity: 2
        },
        {
            product_id: 2,
            quantity: 1
        }
    ],
    customer_id: 1,
    employee_id: 2
    }
);

db.orders.insertOne(
    {
    date_time: "22/22/2222 11:11:11",
    order_type: "domicilio",
    total_price: 15,
    store_id: 2,
    items: [
        {
            product_id: 1,
            quantity: 2
        },
        {
            product_id: 2,
            quantity: 2
        }
    ],
    customer_id: 1,
    employee_id: 2
    }
);