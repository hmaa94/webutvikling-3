using ps5api.Models;
using ps5api.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ps5api.Controllers{

//controller for the users view-point.

    [ApiController]
    [Route("[controller]")]
    public class GamesController : ControllerBase {
        private readonly GameService _gameService;

        public GamesController(GameService gameService){
            _gameService = gameService;
        }

        [HttpGet]
        public ActionResult<List<Game>> Get(){
            return _gameService.Get();
        }       

        }
    }
