connection = new Mongo("localhost");

print('-------------- Connecting to database --------------');

db = connection.getDB("spotify");

print('-------------- Deleting database --------------');

db.dropDatabase();

print('-------------- Creating collections --------------');


db.createCollection("users");
db.createCollection("subscriptions");
db.createCollection("artists");
db.createCollection("albums");
db.createCollection("songs");
db.createCollection("playlists");


print('-------------- Creating Users --------------');

db.users.insertMany(
    [
        {
            _id: 0,
            email: "cristian@ibm.com",
            password: "1234",
            username: "cristiancll",
            birth_date: "9999-11-11",
            gender: "male",
            country: "Spain",
            zip: "08008",
            role: "Premium",
            payment_method: [
                {
                    credit_card: {
                        number: 98595129484151,
                        year: 2023,
                        cvv: 856
                    }
                }
            ]

        },
        {
            _id: 1,
            email: "cristina@google.com",
            username: "cristina23",
            birth_date: "9999-11-11",
            gender: "female",
            country: "Spain",
            zip: "08008",
            role: "Premium",
            payment_method: [
                {
                    paypal: {
                        username: "cristina@paypal.com",
                    }
                }
            ]
        }
    ]
)

print('-------------- Creating Subscriptions --------------');

db.subscriptions.insertMany(
    [
        {
            _id: 0,
            start_date: ISODate("2021-01-08"),
            renewal_date: ISODate("2021-02-08"),
            payments: [
                {
                    order: "HSUDU89",
                    date: ISODate("2021-01-08"),
                    total: 20.50
                }
            ],
            user_id: { $ref: 'users', $id: 0 }
        },
        {
            _id: 1,
            start_date: ISODate("2021-01-02"),
            renewal_date: ISODate("2021-02-02"),
            payments: [
                {
                    order: "HSUDU90",
                    date: ISODate("2021-01-02"),
                    total: 20.50
                }
            ],
            user_id: { $ref: 'users', $id: 1 }
        }
    ]
)


print('-------------- Creating Artists --------------');

db.artists.insertMany(
    [
        {
            _id: 0,
            name: "Bruce Springsteen",
            image: "http://img.com/aisjwi.jpg",
            related_artists: [{ $ref: 'artists', $id: 1 }]
            
        },
        {
            _id: 1,
            name: "Pink Floyd",
            image: "http://img.com/aisjwi.jpg",
            related_artists: [{ $ref: 'artists', $id: 0 }]
        }
    ]
)

print('-------------- Creating Albums --------------');

db.albums.insertMany(
    [
        {
            _id: 0,
            title: "Born in the USA",
            published_year: 1986,
            cover_img: "http://img.com/aisjwi.jpg",
            artist_id: { $ref: 'artists', $id: 0 }
            
        },
        {
            _id: 1,
            title: "The Wall",
            published_year: 1979,
            cover_img: "http://img.com/aisjwi.jpg",
            artist_id: { $ref: 'artists', $id: 1 }
        }
    ]
)

print('-------------- Creating Songs --------------');

db.songs.insertMany(
    [
        {
            _id: 0,
            title: "Dancing in the Dark",
            length: 350000, // in ms
            listenings: 85,
            album_id: { $ref: 'albums', $id: 0 }
            
        },
        {
            _id: 1,
            title: "Another brick in the wall",
            length: 450000, // in ms
            listenings: 85,
            album_id: { $ref: 'albums', $id: 1 }
        }
    ]
)

print('-------------- Creating Playlists --------------');

db.playlists.insertMany(
    [
        {
            _id: 0,
            title: "Rock 80's",
            songs: [{
                song: { $ref: 'songs', $id: 0 },
                user: { $ref: 'users', $id: 0 },
                date_time: ISODate()
            }],
            status: {
                current: "Active",
                date_time: ISODate()
            },
            created_at: ISODate(),
            user_id: { $ref: 'users', $id: 0 } // Author of the playlist
        },
        {
            _id: 1,
            title: "Rock 70's",
            songs: [{
                song: { $ref: 'songs', $id: 1 },
                user: { $ref: 'users', $id: 1 },
                date_time: ISODate()
            }],
            status: {
                current: "Active",
                date_time: ISODate()
            },
            created_at: ISODate(),
            user_id: { $ref: 'users', $id: 1 } // Author of the playlist
        },
    ]
)


print('-------------- End script --------------');