using ps5api.Models;
using ps5api.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ps5api.Controllers{



    [ApiController]
    [Route("[controller]")]
    public class CharactersController : ControllerBase {
        private readonly CharacterService _characterService;

        public CharactersController(CharacterService characterService){
            _characterService = characterService;
        }

        [HttpGet]
        public ActionResult<List<Character>> Get(){
            return _characterService.Get();
        }       

        }
    }
