db.createCollection('artists', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['artistName', 'genre', 'artistAvatar', 'songs'],
      properties: {
        artistName: {
          bsonType: 'string',
          description: 'This field is required'
        },
        genre: {
          bsonType: 'string',
          description: 'This field is required'
        },
        artistAvatar: {
          bsonType: 'string',
          description: 'This field is required'
        },
        songs: {
          bsonType: 'array',
          description: 'This field contain all songs from this artist'
        }
      }
    }
  }
});

db.artists.insertMany([
  {
    artistName: 'Metallica',
    genre: 'Heavy metal',
    artistAvatar: 'metallica',
    songs: ['']
  },
  {
    artistName: 'Linkin Park',
    genre: 'Heavy metal',
    artistAvatar: 'linkinpark',
    songs: ['']
  }
]);

db.createCollection('songs', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['songName', 'songDuration', 'releaseDate', 'artist'],
      properties: {
        songName: {
          bsonType: 'string',
          description: 'This field is required'
        },
        songDuration: {
          bsonType: 'string',
          description: 'This field is required'
        },
        releaseDate: {
          bsonType: 'date',
          description: 'This field is required'
        },
        artist: {
          bsonType: 'string',
          description: 'This field is required'
        }
      }
    }
  }
});

db.songs.insertMany([
  {
    songName: 'Nothing else matters',
    songDuration: '6:25',
    releaseDate: new Date("1992-4-20T08:00:00.000"),
    artist: 'Metallica'
  },
  {
    songName: 'The unforgiven',
    songDuration: '6:23',
    releaseDate: new Date("1991-10-28T08:00:00.000"),
    artist: 'Metallica'
  }
]);

db.artists.aggregate([
  {
    $lookup: {
      from: 'songs',
      localField: 'artistName',
      foreignField: 'artist',
      as: 'artistSongs'
    }
  }
]).pretty();
