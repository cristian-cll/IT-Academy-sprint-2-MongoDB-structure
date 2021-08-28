connection = new Mongo("localhost");

print('-------------- Connecting to database --------------');

db = connection.getDB("youtube");

print('-------------- Deleting database --------------');

db.dropDatabase();

print('-------------- Creating collections --------------');


db.createCollection("users");
db.createCollection("playlists");
db.createCollection("videos");
db.createCollection("comments");
db.createCollection("tags");

print('-------------- Creating Tags --------------');

db.tags.insertMany(
    [
        { _id: 0, name: "NASA", },
        { _id: 1, name: "Mars" },
        { _id: 2, name: "Canada" },
        { _id: 3, name: "CLimbing" },
    ]
)

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
            channel: {
                _id: 0,
                name: "Cristian channel",
                description: "Some description about it...",
                created_at: ISODate(),
                subcribers: [
                    { $ref: 'users', $id: 1 }
                ]
            }
        },
        {
            _id: 1,
            email: "cristina@google.com",
            username: "cristina23",
            birth_date: "9999-11-11",
            gender: "female",
            country: "Spain",
            zip: "08008",
            channel: {
                _id: 1,
                name: "Cristina channel",
                description: "Some description about it...",
                created_at: ISODate(),
                subcribers: [
                    { $ref: 'users', $id: 0 }
                ]
            }
        }
    ]
)

print('-------------- Creating Playlists --------------');

db.playlists.insertMany(
    [
        {
            _id: 0,
            name: "Technology",
            status: "public",
            created_at: ISODate(),
            user_id: { $ref: 'users', $id: 0 } // Author of the playlist
        },
        {
            _id: 1,
            name: "Travelling",
            status: "private",
            created_at: ISODate(),
            user_id: { $ref: 'users', $id: 1 } // Author of the playlist
        }
    ]
)

print('-------------- Creating Videos --------------');

db.videos.insertMany(
    [
        {
            _id: 0,
            title: "Perseverance on Mars",
            description: "Some description about it...",
            size: 2048558, // in bytes
            file_name: "perserverance.mkv",
            length: 350000, // in ms
            thumbnail: "http://img.com/aisjwi.jpg",
            views: 32,
            likes: [
                {
                    user: { $ref: 'users', $id: 0 },
                    date_time: ISODate()
                }
            ],
            dislikes: [
                {
                    user: { $ref: 'users', $id: 1 },  // The author of the video himself gives himself like
                    date_time: ISODate()
                }
            ],
            status: "Public",
            tags:[
                { $ref: 'tags', $id: 0 },
                { $ref: 'tags', $id: 1 }
            ],
            playlists: [{ $ref: 'playlists', $id: 0 }], // Playlist to which the video belongs
            user_id: { $ref: 'users', $id: 0 }, // Author of the video
            date_time: ISODate()
        },
        {
            _id: 1,
            title: "Travelling tips",
            description: "Some description about it...",
            size: 8069558, // in bytes
            file_name: "travelling_tips.mkv",
            length: 870000, // in ms
            thumbnail: "http://img.com/aisjwi.jpg",
            views: 85,
            likes: [
                {
                    user: { $ref: 'users', $id: 1 }, // The author of the video himself gives himself like
                    date_time: ISODate()
                }
            ],
            dislikes: [
                {
                    user: { $ref: 'users', $id: 0 },
                    date_time: ISODate()
                }
            ],
            status: "Public",
            tags:[
                { $ref: 'tags', $id: 2 },
                { $ref: 'tags', $id: 3 }
            ],
            playlists: [{ $ref: 'playlists', $id: 1 }], // Playlist to which the video belongs
            user_id: { $ref: 'users', $id: 1 }, // Author of the video
            date_time: ISODate()
        }
    ]
)

print('-------------- Creating Comments --------------');

db.comments.insertMany(
    [
        {
            _id: 0,
            text: "It seems fake, i don't like it",
            created_at: ISODate(),
            likes: [
                {
                    user: { $ref: 'users', $id: 1 }, // The author of the comment himself gives himself like
                    date_time: ISODate()
                }
            ],
            dislikes: [
                {
                    user: { $ref: 'users', $id: 0 }, // The author of the video is dislike
                    date_time: ISODate()
                }
            ],
            video_id: { $ref: 'videos', $id: 0 },
            user_id: { $ref: 'users', $id: 1 }
        },
        {
            _id: 1,
            text: "Tips too obvious...",
            created_at: ISODate(),
            likes: [
                {
                    user: { $ref: 'users', $id: 0 }, // The author of the comment himself gives himself like
                    date_time: ISODate()
                }
            ],
            dislikes: [
                {
                    user: { $ref: 'users', $id: 1 }, // The author of the video is dislike
                    date_time: ISODate()
                }
            ],
            video_id: { $ref: 'videos', $id: 1 }, // Video to which the comment belongs
            user_id: { $ref: 'users', $id: 0 } // Author of the comment
        }
    ]
)


print('-------------- End script --------------');