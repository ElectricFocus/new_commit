import "./styles.css";
//Write array below
export default function App() {
  let Names = [
    {
      firstName: "Omari",
      lastName: "prass",
      borough: "Brooklyn",
      favColor: "#1fb752",
      yearBorn: "2004",
      Month: "April",
      country: "Japan",
      pet: "Both",
      Food: "Pizza",
      Hobby: "Games",
      Movie: "Gumball,regular show",
      Career: "Web Developer"
    },
    {
      firstName: "Melody",
      lastName: "Suero",
      borough: "Brooklyn",
      favColor: "#c8a2c8",
      yearBorn: "2003",
      Month: "May",
      country: "Japan",
      pet: "both",
      Food: "Everything",
      Hobby: "Drawing",
      Movie: "Courage the cowardly dog",
      Career: "tech/art/designer"
    },
    {
      firstName: "Keturah ",
      lastName: "Allen",
      borough: "Brooklyn",
      favColor: "",
      yearBorn: "2005",
      Month: "march",
      country: "boar boar",
      pet: "Dog",
      Food: "Everything",
      Hobby: "Writing",
      Movie: "Not sure",
      Career: "Program machines"
    },
    {
      firstName: "Aldo ",
      lastName: "Terrana",
      borough: "New Jersey",
      favColor: "#c20a2b",
      yearBorn: "2005",
      Month: "September",
      country: "Japan",
      pet: "Dog",
      Food: "sushi",
      Hobby: "Ice skating",
      Movie: "The flash",
      Career: "Geneticists"
    },
    {
      firstName: "reginea ",
      lastName: "Walker",
      borough: "Queens",
      favColor: "#eb7d34",
      yearBorn: "2005",
      Month: "August",
      country: "japan",
      pet: "Dog",
      Food: "pizza",
      Hobby: "writing",
      Movie: "Moana",
      Career: "fashion designer"
    },
    {
      firstName: "Laurent ",
      lastName: "Benjamin",
      borough: "Brooklyn",
      favColor: "red",
      yearBorn: "2004",
      Month: "November",
      country: "England",
      pet: "Both",
      Food: "Legumes",
      Hobby: "Reading",
      Movie: "N/A",
      Career: "Software enginneer"
    },
    {
      firstName: "Ye ☜(ﾟヮﾟ☜) ",
      lastName: "(☞ﾟヮﾟ)☞Paing",
      borough: "Queens",
      favColor: "#45FCB4",
      yearBorn: "1989",
      Month: "July",
      country: "japan",
      pet: "Both",
      Food: "Thai",
      Hobby: "handball",
      Movie: "The matrix",
      Career: "Software engineer"
    },
    {
      firstName: "Matt ",
      lastName: "Schupack",
      borough: "Brooklyn",
      favColor: "bisque",
      yearBorn: "1994",
      Month: "October",
      country: "Spain",
      pet: "Cat",
      Food: "Sushi",
      Hobby: "Baking bread",
      Movie: "Endeavour",
      Career: "Software engineer"
    },
    {
      firstName: "Judy ",
      lastName: "Truong",
      borough: "Brooklyn",
      favColor: "#cd94f2",
      yearBorn: "1991",
      Month: "January",
      country: "South korea",
      pet: "Dog",
      Food: "Ramen",
      Hobby: "Reading",
      Movie: "The mummy",
      Career: "Software engineer"
    },
    {
      firstName: "Sami",
      lastName: "Lieberman",
      borough: "Manhattan",
      favColor: "#00d0ff",
      yearBorn: "1997",
      Month: "May",
      country: "Africa",
      pet: "Both",
      Food: "Sushi",
      Hobby: "Tennis",
      Movie: "Modern family",
      Career: "Software engineer"
    },
    {
      firstName: "Maxwell ",
      lastName: "Williams",
      borough: "New Jersey",
      favColor: "#ebba34",
      yearBorn: "1997",
      Month: "Febuary",
      country: "France",
      pet: "Dog",
      Food: "Burgrs and fries",
      Hobby: "Movies",
      Movie: "Pans labrynth",
      Career: "Teacher"
    },
    {
      firstName: "Groana ",
      lastName: "Melendez",
      borough: "Bronx",
      favColor: "#40e0d0",
      yearBorn: "1984",
      Month: "June",
      country: "Ghana",
      pet: "Dog",
      Food: "Ice cream",
      Hobby: "Photography",
      Movie: "The haunting at..",
      Career: "Software enginneer"
    },
    {
      firstName: "Aland ",
      lastName: "Kuang",
      borough: "Phoenix",
      favColor: "#000AD4",
      yearBorn: "1994",
      Month: "Febuary",
      country: "japan",
      pet: "Dog",
      Food: "Dumplings",
      Hobby: "Editing writing piece",
      Movie: "Rick and Morty",
      Career: "Software engineer"
    },
    {
      firstName: "Jean",
      lastName: "Saldarriaga",
      borough: "Manhattan",
      favColor: "#2a693b",
      yearBorn: "2005",
      Month: "January",
      country: "Japan",
      pet: "Dog",
      Food: "Lasagna",
      Hobby: "Video games",
      Movie: "Scott pilgrim vs the world",
      Career: "Software engineer"
    },
    {
      firstName: "Lorena",
      lastName: "Castillo",
      borough: "Manhattan",
      favColor: "clear",
      yearBorn: "2003",
      Month: "may",
      country: "Korea",
      pet: "Dog",
      Food: "lomein",
      Hobby: "Volleyball",
      Movie: "Reign",
      Career: "Digital forensic"
    }
  ];

  return (
    <div className="App">
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>borough</th>
          <th>Favorite color</th>
          <th>Year Born</th>
          <th>Month Born</th>
          <th>what country you want to vist</th>
          <th>Cat or Dog</th>
          <th>Favorite food</th>
          <th>Hobby</th>
          <th>Fav movie</th>
          <th>Career</th>
        </tr>
        {Names.map((name) => (
          <tr>
            <td id="hi">{name.firstName}</td>
            <td id="hi">{name.lastName}</td>
            <td id="hi">{name.borough}</td>
            <td id="hi">{name.favColor}</td>
            <td id="hi">{name.yearBorn}</td>
            <td id="hi">{name.Month}</td>
            <td id="hi">{name.country}</td>
            <td id="hi">{name.pet}</td>
            <td id="hi">{name.Food}</td>
            <td id="hi">{name.Hobby}</td>
            <td id="hi">{name.Movie}</td>
            <td id="hi">{name.Career}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
