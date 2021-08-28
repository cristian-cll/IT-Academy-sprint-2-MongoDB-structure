connection = new Mongo("localhost");

print('-------------- Connecting to database --------------');

db = connection.getDB("optica");

print('-------------- Deleting database --------------');

db.dropDatabase();

print('-------------- Creating collections --------------');

db.createCollection("customers");
db.createCollection("glasses");
db.createCollection("suppliers");

print('-------------- Creating Suppliers --------------');


db.suppliers.insertMany(
    [
        {
            _id: 0,
            name: "Gafas SL",
            nif: "23456632T",
            phone: 658984532,
            fax: 957859505,
            address: {
                street: "Paseo marítimo",
                number: 254,
                floor: 1,
                door: 1,
                city: "Valencia",
                zip: 89797,
                country: "Spain",
            },
            glasses: [
                {
                    ref: 0,
                    brand: "RayBan",

                }, {
                    ref: 1,
                    brand: "Michael Kors",
                }
            ]
        },
        {
            _id: 1,
            name: "Optica Andorrana",
            nif: "89875865X",
            phone: 658984532,
            fax: 957859505,
            address: {
                street: "Av. Meritxell",
                number: 5,
                floor: 1,
                door: 1,
                city: "Andorra",
                zip: 89797,
                country: "Andorra",
            },
            glasses: [
                {
                    ref: 0,
                    brand: "Channel",

                }, {
                    ref: 1,
                    brand: "Guess",
                }
            ]

        }
    ]
);


print('-------------- Creating Costumers --------------');

db.customers.insertMany(
    [{
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
        recommended_by: null,
        employee: {
            _id: 0,
            name: "Jesús"
        },
        created_at: ISODate()

    }, {
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
        recommended_by: { $ref: 'customers', $id: 0 },
        employee: {
            _id: 1,
            name: "María"
        },
        created_at: ISODate()
    }
    ]
);

print('-------------- Creating Glasses --------------');

db.glasses.insertMany(
    [
        {
            _id: 0,
            lens_right: {
                prescription: 0.50,
                color: "gris",
            },
            lens_left: {
                prescription: 0.50,
                color: "gris",
            },
            frame: {
                material: "Acero",
                color: "negro"
            },
            brand: "RayBan",
            price: 120,
            supplier: { $ref: 'suppliers', $id: 0 },
            customer: { $ref: 'customers', $id: 0 },
            employee: {
                cod_emp: 25,
                name: "María"
            },
        },
        {
            _id: 1,
            lens_right: {
                prescription: 0.50,
                color: "gris",
            },
            lens_left: {
                prescription: 0.50,
                color: "gris",
            },
            frame: {
                material: "Aluminio",
                color: "marrón"
            },
            brand: "Guess",
            price: 180,
            supplier: { $ref: 'suppliers', $id: 1 },
            customer: { $ref: 'customers', $id: 1 },
            employee: {
                cod_emp: 32,
                name: "Jesús"
            },
        }
    ]
)


print('-------------- End script --------------');