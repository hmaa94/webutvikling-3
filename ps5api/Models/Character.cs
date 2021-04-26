using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

//models to get the appropriate props to string (and array with string[]) and integer.

namespace ps5api {

    public class Character {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Description { get; set; }
        public string Franchise { get; set; }
        public string[] Taglines { get; set; }
        public string Image { get; set; }
    }
}
