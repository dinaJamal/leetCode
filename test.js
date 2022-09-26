// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

let arr = [
    {
      "id": "1",
      "name": "DR. Strange",
      "role": "CEO of Weired Stuff and Co.",
      "hobbies": ["magic", "video games", "procrastination"]
    },
    {
      "id": "2",
      "name": "Pikachu",
      "role": "VP of Pokemons",
      "hobbies": ["jenga", "tetris", "ac⚡dc"],
      "manager": "1"
    },
    {
      "id": "3",
      "name": "Charmander",
      "role": "FireBase Developer",
      "hobbies": ["kittens", "smoking", "birds watching"],
      "manager": "2"
    },
    {
      "id": "4",
      "name": "Psyduck",
      "role": "Senior VP Director of QA",
      "hobbies": ["video games", "carl jung", "k-pop"],
      "manager": "2"
    },
    {
      "id": "5",
      "name": "Snorlax",
      "role": "Automation",
      "hobbies": ["jenga", "procrastination", "swordplay"],
      "manager": "4"
    },
    {
      "id": "6",
      "name": "Jigglypuff",
      "role": "Manual",
      "hobbies": ["video games", "puppies", "singing"],
      "manager": "4"
    },
    {
      "id": "7",
      "name": "Togepi",
      "role": "Load",
      "hobbies": ["magic", "smoking", "50 cents"],
      "manager": "4"
    },
    {
      "id": "8",
      "name": "Squirtle",
      "role": "NodeJs 6 contributer",
      "hobbies": ["russian literature", "instagram", "water polo"],
      "manager": "2"
    },
    {
      "id": "9",
      "name": "Jon Snow",
      "role": "Director of Knowledge Transfer Group",
      "hobbies": ["jenga", "swordplay", "puppies"],
      "manager": "1"
    },
    {
      "id": "10",
      "name": "Luke S.",
      "role": "JS Jedi",
      "hobbies": ["magic", "singing", "swordplay"],
      "manager": "9"
    },
    {
      "id": "11",
      "name": "QuickSilver",
      "role": "Junor React Developer",
      "hobbies": ["tetris", "pizza delivery", "ac⚡dc"],
      "manager": "9"
    },
    {
      "id": "12",
      "name": "Black Widow",
      "role": "Architect",
      "hobbies": ["archery", "instagram", "russian literature"],
      "manager": "9"
    },
    {
      "id": "13",
      "name": "Gandalf",
      "role": "Css Trics Author",
      "hobbies": ["smoking", "magic", "way blocking"],
      "manager": "9"
    },
    {
      "id": "14",
      "name": "Aloy",
      "role": "Robotics Expert (Freelancer)",
      "hobbies": ["video games", "puppies", "archery"],
      "manager": "1"
    },
    {
      "id": "15",
      "name": "Thanos",
      "role": "Load Balancer (Outsource)",
      "hobbies": ["stones collecting", "tetris", "kittens"],
      "manager": "1"
    }
  ];
  
  let newArray = arr.filter(a => a.manager === "9" && a.id > 11).reduce((acc, employee) => acc + employee.hobbies, []);
    
  console.log(newArray);
  
  // To learn more about the language, click above in "Examples" or "What's New".
  // Otherwise, get started by removing these comments and the world is your playground.
    