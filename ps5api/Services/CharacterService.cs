using MongoDB.Driver;
using ps5api.Models;
using System.Linq;
using System.Collections.Generic;

namespace ps5api.Services {
    public class CharacterService {
        private readonly IMongoCollection<Character> _characters;
        public CharacterService(IPs5DatabaseSettings settings){
            var client = new MongoClient ( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );

            _characters = database.GetCollection<Character>( settings.CharactersCollectionName );
        }
        public List<Character> Get(){
            return _characters.Find( character => true ).ToList();
        }
        public Character Get(string id) {
            return _characters.Find( character => character.Id == id).SingleOrDefault();
        }
        public Character Create(Character character){
            _characters.InsertOne(character);
            return character;
        }

        public void Remove(string id){
            _characters.DeleteOne( character => character.Id == id);
        }
        public void Update (string id, Character characterIn){
            _characters.ReplaceOne( character => character.Id == characterIn.Id, characterIn );
        }
    }
}