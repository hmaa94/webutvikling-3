using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ps5api {

    public class Game {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Genre { get; set; }
        public int Price { get; set; }
        public string Image { get; set; }
    }   

}