using ps5api.Models;
using ps5api.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ps5api.Controllers{

//administrative controller. this controller has PUT(edit, insert into existing props), CREATE(new insertion
//to collection) and DELETE(removes from collection),
//for altering API-data.  Oh, and GET, to get data from collection. :)

    [ApiController]
    [Route("[controller]")]
    public class AdminCharactersController : ControllerBase {
        private readonly CharacterService _characterService;

        public AdminCharactersController(CharacterService characterService){
            _characterService = characterService;
        }

        [HttpGet]
        public ActionResult<List<Character>> Get(){
            return _characterService.Get();
        }

        [HttpPost]
        public ActionResult<Character> Post(Character character){
            _characterService.Create( character );
            return character;
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id){
            var character = _characterService.Get( id );

            if( character == null){
                return NotFound();
            }

            _characterService.Remove( character.Id );
            return NoContent();
        }
       
    
        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, Character characterIn){
            var selectedCharacter = _characterService.Get(id);

            if( selectedCharacter == null){
                return NotFound();
            }

            _characterService.Update( id, characterIn );
            return NoContent();
        }
    }
}