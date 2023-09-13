import CreationOfAdam from './assets/Paintings/CreationOfAdam_Michelangelo.jpg';
import GirlWithAPearl from './assets/Paintings/GirlWithAPearl_JohannesVermeer.jpg';
import Guernica from './assets/Paintings/Guernica_Picasso.jpg';
import LesDemoiselles from './assets/Paintings/LesDemoisellesDAvignon_Picasso.jpg';
import LaGioconda from './assets/Paintings/MonaLisa_LeonardoDaVinci.jpg';
import BirthOfVenus from './assets/Paintings/TheBirthOfVenus_Botticelli.jpg';
import LastSupper from './assets/Paintings/TheLastSupper_LeonardoDaVinci.jpg';
import PersistenceOfMemory from './assets/Paintings/ThePersistenceOfMemory_SalvadorDali.jpg';
import Scream from './assets/Paintings/TheScream_EdvardMunch.jpg';
import StarryNight from './assets/Paintings/TheStarryNight_VanGogh.jpg';

class Painting {
  constructor(image, title, author) {
    this.image = image;
    this.title = title;
    this.author = author;
  }
}

const paintings = [
  new Painting(CreationOfAdam, 'Creation of Adam', 'Michelangelo'),
  new Painting(GirlWithAPearl, 'Girl with a Pearl Earring', 'Johannes Vermeer'),
  new Painting(Guernica, 'Guernica', 'Pablo Picasso'),
  new Painting(LesDemoiselles, "Les Domoiselles d'Avignon", 'Pablo Picasso'),
  new Painting(LaGioconda, 'La Gioconda', 'Leonardo da Vinci'),
  new Painting(BirthOfVenus, 'The Birth of Venus', 'Sandro Botticelli'),
  new Painting(LastSupper, 'The Last Supper', 'Leonardo da Vinci'),
  new Painting(
    PersistenceOfMemory,
    'The Persistence of Memory',
    'Salvador Dalí'
  ),
  new Painting(Scream, 'The Scream', 'Edvard Munch'),
  new Painting(StarryNight, 'The Starry Night', 'Vincent van Gogh'),
];

export default paintings;
