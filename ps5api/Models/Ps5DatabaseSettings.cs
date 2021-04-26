namespace ps5api.Models {

    public interface IPs5DatabaseSettings {
        string GamesCollectionName { get; set; }
        string CharactersCollectionName { get; set;}
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }



    public class Ps5DatabaseSettings : IPs5DatabaseSettings {
        public string GamesCollectionName { get; set; }
        public string CharactersCollectionName { get; set;}
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}