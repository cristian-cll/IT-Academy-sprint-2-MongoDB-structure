connection = new Mongo("localhost");
db = connection.getDB("optica");
db.dropDatabase();

db.createCollection("customers");
db.createCollection("providers");
db.createCollection("employees");
db.createCollection("glasses");
db.createCollection("orders");

//-------------- Creating customers

db.customers.insertOne(
    {
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
    recommended_by: 2,
    createdAt: Date.now()
    }
);

db.customers.insertOne(
    {
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
    recommended_by: 3,
    createdAt: Date.now()
    }
);

//-------------- Creating employees

db.employees.insertOne(
    {
    name: "Jesús",
    createdAt: Date.now()
    }
);

db.employees.insertOne(
    {
    name: "María",
    createdAt: Date.now()
    }
);

//-------------- Creating glasses

db.glasses.insertOne(
    {
    brand: "RayBan",
    frame: "Acero",
    frame_color: "negro",
    glass_right: {
        graduation: 0.50,
        color: "gris"
    },
    glass_left: {
        graduation: 0.50,
        color: "gris"
    }, 
    price: 120,
    supplier_id: 2,
    createdAt: Date.now()
    }
);

db.glasses.insertOne(
    {
    brand: "Guess",
    frame: "Aluminio",
    frame_color: "marrón",
    glass_right: {
        graduation: 1.50,
        color: "verde"
    },
    glass_left: {
        graduation: 1.25,
        color: "verde"
    }, 
    price: 180,
    supplier_id: 1,
    createdAt: Date.now()
    }
);

//-------------- Creating suppliers

db.suppliers.insertOne(
    {
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
    createdAt: Date.now()
    }
);

db.suppliers.insertOne(
    {
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
    createdAt: Date.now()
    }
);

//-------------- Creating stores

db.orders.insertOne(
    {
    glasses_id: 1,
    customer_id: 2,
    employee_id: 1
    }
);

db.orders.insertOne(
    {
    glasses_id: 2,
    customer_id: 2,
    employee_id: 2
    }
);