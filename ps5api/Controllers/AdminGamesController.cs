using ps5api.Models;
using ps5api.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ps5api.Controllers{

//same as admin char controller*

    [ApiController]
    [Route("[controller]")]
    public class AdminGamesController : ControllerBase {
        private readonly GameService _gameService;

        public AdminGamesController(GameService gameService){
            _gameService = gameService;
        }

        [HttpGet]
        public ActionResult<List<Game>> Get(){
            return _gameService.Get();
        }

        [HttpPost]
        public ActionResult<Game> Post(Game game){
            _gameService.Create( game );
            return game;
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id){
            var game = _gameService.Get( id );

            if( game == null){
                return NotFound();
            }

            _gameService.Remove( game.Id );
            return NoContent();
        }
       
        
    
        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, Game gameIn){
            var selectedGame = _gameService.Get(id);

            if( selectedGame == null){
                return NotFound();
            }

            _gameService.Update( id, gameIn );
            return NoContent();
        }
    }
}