using Microsoft.AspNetCore.Mvc;

namespace TaskManager.API.Controllers
{
    [ApiController]
    [Route("api/tasks")]
    public class TasksController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            // Retourner des données au bon format
            var tasks = new[]
            {
                new { id = 1, title = "Première tâche", description = "Description de la première tâche", completed = false },
                new { id = 2, title = "Deuxième tâche", description = "Description de la deuxième tâche", completed = true },
                new { id = 3, title = "Troisième tâche", description = "Description de la troisième tâche", completed = false }
            };
            
            return Ok(tasks);
        }
    }
}
