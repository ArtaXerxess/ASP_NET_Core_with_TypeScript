using System.Diagnostics;
using ASP_NET_Core_with_TypeScript.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASP_NET_Core_with_TypeScript.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            var viewModel = new SimpleViewModel();
            var items = new List<ToDoItem>();
            var rand = new Random();
            var priorities = Enum.GetValues(typeof(ItemPriority)).Cast<ItemPriority>().ToList();

            for (int i = 1; i <= 100; i++)
            {
                var randomPriority = priorities[rand.Next(priorities.Count)];
                items.Add(new ToDoItem()
                {
                    Id = i,
                    Title = $"item {i}",
                    Description = $"some description {i}",
                    Priority = randomPriority
                });
            }

            viewModel.ToDoItems = items;
            return View(viewModel);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.Client, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }

    class SimpleViewModel
    {
        public List<ToDoItem>? ToDoItems { get; set; }
    }
}
