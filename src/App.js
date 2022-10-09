import "./styles.css";
import Card from "./card";

export default function App() {
  let sevenWonder = [
    {
      title: "Taj Mahal",
      subTitle: "Agra, Uttar Pradesh, India",
      imgUrl:
        "https://skift.com/wp-content/uploads/2022/06/GettyImages-1208049833-scaled-e1654782364566-1024x682.jpg",
      body:
        "Built by the famous Mughal Emperor, Shah Jahan for its favorite wife, Mumtaz Mahal, the iconic structure of Taj Mahal, is the pride of India and more importantly, an epitome of love. Built as early as in the 16th century, Taj Mahal is the crown of India."
    },
    {
      title: "Christ the Redeemer",
      subTitle: "Rio de Janeiro, Brazil",
      imgUrl:
        "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Corbis-42-24002457_sbfkds.jpg",
      body:
        "Located atop the Corcovado Mountain in Tijuca Forest National Park, the wondrous statue of Christ the Redeemer is perched at a height of 700 metres. the statue is not only the symbol of Christian community but is also one of the iconic landmarks of Brazil and Rio."
    },
    {
      title: "Great Wall Of China",
      subTitle: "Beijing, China",
      imgUrl:
        "https://cdn.mos.cms.futurecdn.net/5pCA2Sgpfj9Vu8XcALuMtb-1200-80.jpg",
      body:
        "Great Wall of China is a perfect blend of bricks, rammed earth, wood, stones, and other substances, the Great Wall of China was built to protect the Chinese region from invasions of empires during 7th century BCE."
    },
    {
      title: "Petra",
      subTitle: "Jordan",
      imgUrl:
        "https://thelovelyescapist.com/wp-content/uploads/2022/03/AUC_3062-2.jpg",
      body:
        "Petra is the world-famous archaeological site that once served as the Nabatean Kingdom’s capital. Boasting of its one of a kind pink sandstone cliffs out of which the tombs and temples are sculpted, Al Khazneh is the most famous temple of all."
    },
    {
      title: "Machu Picchu",
      subTitle: "Peru",
      imgUrl:
        "https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/06/1.-Intrepid-Travel-peru_machupicchu.jpg",
      body:
        "Perched high on the Andes Mountains and built of limestones that are mortar-free. Machu Picchu in Peru is the most renowned structure of the Inca civilization which is famous for its dry-stone walls."
    },
    {
      title: "Chichen Itza",
      subTitle: "Yucatan, Mexico",
      imgUrl:
        "https://cdn.vallarta-adventures.com/sites/default/files/2021-05/CHichen10.jpeg",
      body:
        "It is built in the shape of a pyramid. Dedicated to the God of Kukulkan, the structure consists of 91 steps on each side which when totalled with the final step of the temple, equals the number of days in one Haab year, i.e., 365 days."
    },
    {
      title: "Colosseum",
      subTitle: "Rome, Italy",
      imgUrl:
        "https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg",
      body:
        "Constructed mainly of sand and concrete, Colosseum is the largest surviving amphitheatre in the world. Built during the time between 70 AD to 72 AD by the famous Emperor Vespasian"
    }
  ];

  let finalList = sevenWonder.map((detail, index) => {
    return (
      <Card
        key={index}
        title={detail.title}
        subTitle={detail.subTitle}
        imgUrl={detail.imgUrl}
        body={detail.body}
      />
    );
  });

  return (
    <div className="App">
      <h1 id="fst">Seven Wonders</h1>
      <div id="box">{finalList}</div>
    </div>
  );
}
