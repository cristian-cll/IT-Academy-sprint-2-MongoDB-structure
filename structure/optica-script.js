connection = new Mongo("localhost");
db = connection.getDB("optica");
db.dropDatabase();

db.createCollection("customers");
db.createCollection("employees");
db.createCollection("suppliers");
db.createCollection("glasses");
db.createCollection("orders");


//-------------- Creating customers


db.customers.insertOne(
    {
    _id: 0,
    name: "Xavi",
    email: "xavi@gmail.com",
    phone: 658956232,
    address : { 
        street: "Sepúlveda",
        number: 58,
        floor: 2,
        door: 1,
        city: "Barcelona",
        zip: 08018,
        country: "Spain",
    },
    recommended_by: null,
    created_at: Date.now()
    }
);

db.customers.insertOne(
    {
    _id: 1,
    name: "Laura",
    email: "laura@gmail.com",
    phone: 658984532,
    address : { 
        street: "Cervantes",
        number: 325,
        floor: 4,
        door: 3,
        city: "Madrid",
        zip: 28695,
        country: "Spain",
    },
    recommended_by: 0,
    created_at: Date.now()
    }
);


//-------------- Creating employees


db.employees.insertOne(
    {
    _id: 0,
    name: "Jesús",
    created_at: Date.now()
    }
);

db.employees.insertOne(
    {
    _id: 1,
    name: "María",
    created_at: Date.now()
    }
);


//-------------- Creating suppliers


db.suppliers.insertOne(
    {
    _id: 0,
    name: "Optica Andorrana",
    nif: "89875865X",
    phone: 658984532,
    fax: 957859505,
    address : { 
        street: "Av. Meritxell",
        number: 5,
        floor: 1,
        door: 1,
        city: "Andorra",
        zip: 89797,
        country: "Andorra",
    },
    created_at: Date.now()
    }
);

db.suppliers.insertOne(
    {
    _id: 1,
    name: "Gafas SL",
    nif: "23456632T",
    phone: 658984532,
    fax: 957859505,
    address : { 
        street: "Paseo marítimo",
        number: 254,
        floor: 1,
        door: 1,
        city: "Valencia",
        zip: 89797,
        country: "Spain",
    },
    created_at: Date.now()
    }
);


//-------------- Creating glasses


db.glasses.insertOne(
    {
    _id: 0,
    brand: "RayBan",
    frame: "Acero",
    frame_color: "negro",
    price: 120,
    grad_left: 0.50,
    color_left: "gris",
    grad_right: 0.50,
    color_right: "gris",
    supplier_id: 0,
    created_at: Date.now()
    }
);

db.glasses.insertOne(
    {
    _id: 1,
    brand: "Guess",
    frame: "Aluminio",
    frame_color: "marrón",
    price: 180,
    grad_left: 1.50,
    color_left: "verde",
    grad_right: 1.25,
    color_right: "verde",
    supplier_id: 1,
    created_at: Date.now()
    }
);


//-------------- Creating orders


db.orders.insertOne(
    {
    _id: 0,
    customer_id: 1,
    employee_id: 0,
    glasses: [
    {
        glasses_id: 0,
        price: 120,
        quantity: 2, 
    },
    {
        glasses_id: 1,
        price: 180,
        quantity: 1, 
    }
    ],
    total_price: 360
    }
);

db.orders.insertOne(
    {
    _id: 1,
    customer_id: 0,
    employee_id: 1,
    glasses: [
    {
        glasses_id: 1,
        price: 180,
        quantity: 1, 
    }
    ],
    total_price: 180
    }
);