const UserList = [
  {
    id: 1,
    name: "John Doe",
    username: "johnd",
    age: 25,
    nationality: "AMERICAN",
    friends: [
      {
        id: 2,
        name: "Jane Smith",
        username: "janes",
        age: 30,
        nationality: "BRITISH",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "janes",
    age: 30,
    nationality: "BRITISH",
    friends: [],
  },
  {
    id: 3,
    name: "Akira Tanaka",
    username: "akirat",
    age: 28,
    nationality: "JAPANESE",
    friends: [],
  },
  {
    id: 4,
    name: "Maria Gonzalez",
    username: "mariag",
    age: 27,
    nationality: "MEXICAN",
    friends: [
      {
        id: 6,
        name: "Emma Brown",
        username: "emmab",
        age: 22,
        nationality: "AMERICAN",
      },
    ],
  },
  {
    id: 5,
    name: "Liam O'Brien",
    username: "liamo",
    age: 32,
    nationality: "IRISH",
    friends: [],
  },
  {
    id: 6,
    name: "Emma Brown",
    username: "emmab",
    age: 22,
    nationality: "AMERICAN",
    friends: [],
  },
  {
    id: 7,
    name: "Chen Wei",
    username: "chenw",
    age: 29,
    nationality: "MEXICAN",
    friends: [],
  },
  {
    id: 8,
    name: "Olivia Davis",
    username: "oliviad",
    age: 26,
    nationality: "IRISH",
    friends: [],
  },
  {
    id: 9,
    name: "Raj Patel",
    username: "rajp",
    age: 31,
    nationality: "INDIAN",
    friends: [],
  },
  {
    id: 10,
    name: "Sophia Martinez",
    username: "sophiam",
    age: 24,
    nationality: "SPANISH",
    friends: [],
  },
  {
    id: 11,
    name: "Noah Wilson",
    username: "noahw",
    age: 27,
    nationality: "AMERICAN",
    friends: [],
  },
  {
    id: 12,
    name: "Isabella Rossi",
    username: "isabellar",
    age: 29,
    nationality: "ITALIAN",
    friends: [],
  },
  {
    id: 13,
    name: "William Kim",
    username: "williamk",
    age: 23,
    nationality: "SOUTH KOREAN",
    friends: [],
  },
  {
    id: 14,
    name: "Emily Lopez",
    username: "emilyl",
    age: 28,
    nationality: "COLOMBIAN",
    friends: [],
  },
  {
    id: 15,
    name: "Ethan Johnson",
    username: "ethanj",
    age: 30,
    nationality: "SOUTH AFRICAN",
    friends: [],
  },
  {
    id: 16,
    name: "Chloe White",
    username: "chloew",
    age: 21,
    nationality: "AMERICAN",
    friends: [],
  },
  {
    id: 17,
    name: "Aarav Gupta",
    username: "aaravg",
    age: 26,
    nationality: "INDIAN",
    friends: [],
  },
  {
    id: 18,
    name: "Zara Khan",
    username: "zarak",
    age: 27,
    nationality: "INDIAN",
    friends: [],
  },
  {
    id: 19,
    name: "Lucas Hernandez",
    username: "lucash",
    age: 25,
    nationality: "MEXICAN",
    friends: [],
  },
  {
    id: 20,
    name: "Mia Wagner",
    username: "miaw",
    age: 24,
    nationality: "AMERICAN",
    friends: [],
  },
];

// movie database
const MoviesList = [
  {
    id: 1,
    name: "Inception",
    yearOfPublication: 2010,
    isInTheater: false,
  },
  {
    id: 2,
    name: "Avengers: Endgame",
    yearOfPublication: 2019,
    isInTheater: false,
  },
  {
    id: 3,
    name: "The Batman",
    yearOfPublication: 2022,
    isInTheater: false,
  },
  {
    id: 4,
    name: "Spider-Man: No Way Home",
    yearOfPublication: 2021,
    isInTheater: false,
  },
  {
    id: 5,
    name: "Avatar: The Way of Water",
    yearOfPublication: 2023,
    isInTheater: true,
  },
  {
    id: 6,
    name: "Oppenheimer",
    yearOfPublication: 2023,
    isInTheater: true,
  },
  {
    id: 7,
    name: "Interstellar",
    yearOfPublication: 2014,
    isInTheater: false,
  },
  {
    id: 8,
    name: "Joker",
    yearOfPublication: 2019,
    isInTheater: false,
  },
  {
    id: 9,
    name: "The Matrix Resurrections",
    yearOfPublication: 2021,
    isInTheater: false,
  },
  {
    id: 10,
    name: "Guardians of the Galaxy Vol. 3",
    yearOfPublication: 2023,
    isInTheater: true,
  },
];

module.exports = { UserList, MoviesList };
