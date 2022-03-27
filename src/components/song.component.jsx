import "../categories.styles.scss";
import { Howl } from "howler";

const Song = () => {
  const categories = [
    {
      id: 1,
      title: "Stand by Me",
      artist: "Ben E. King",
      imageUrl:
        "https://direct.rhapsody.com/imageserver/images/alb.271418160/600x600.jpg",
      youtubeUrl: "https://youtu.be/hwZNL7QVJjE.mp3",
    },
    {
      id: 2,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      imageUrl: "https://miro.medium.com/max/1200/1*tQs4H7Ua65sd7iUxeLcDkw.png",
      youtubeUrl: "https://youtu.be/fJ9rUzIMcZQ",
    },
    {
      id: 3,
      title: "I want you back",
      artist: "The Jackson 5",
      imageUrl:
        "https://i.discogs.com/9gJOkxB2jj8yvixk-fS8He0mWgPrUQ37GIiydQnHcdY/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4MDQy/ODctMTMwMjIxNDU4/Mi5qcGVn.jpeg",
      youtubeUrl: "https://youtu.be/s3Q80mk7bxE",
    },
    {
      id: 4,
      title: "Please Mr. Postman",
      artist: "The Marvelettes",
      imageUrl:
        "https://direct.rhapsody.com/imageserver/images/alb.428769331/500x500.jpg",
      youtubeUrl: "https://youtu.be/425GpjTSlS4",
    },
    {
      id: 5,
      title: "Like a Rolling Stone",
      artist: "Bob Dylan",
      imageUrl:
        "https://www.covermesongs.com/wp-content/uploads/2021/04/Bob-Dylan-Like-A-Rolling-Stone-Lyrics.jpeg",
      youtubeUrl: "https://youtu.be/IwOfCgkyEj0",
    },
  ];
  const SoundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };
  const RenderButtonSound = () => {
    <button
      key={categories[1].id}
      onClick={() => this.soundPlay(categories[1].youtubeUrl)}
    >
      hello
    </button>;
  };

  return (
    <div>
      <h1> Hello </h1>
      {this.RenderButtonSound()}
    </div>
  );
};
export default Song;
