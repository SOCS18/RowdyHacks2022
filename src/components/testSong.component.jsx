import "./test.scss";
const TestSong = () => {
  const categories = [
    {
      id: 1,
      title: "Stand by Me",
      artist: "Ben E. King",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNWMxMTAwNDMtYjljNC00NWJiLTllMzAtYzUyYTk3OTM5ZGZkXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg",
      youtubeUrl: "https://youtu.be/hwZNL7QVJjE",
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
  const songs = [
    {
      title: "When Doves Cry ",
      artist: "Prince",
      img_src: "./images/when_doves.jpg",
      src: "./music/WhenDovesCry.mp4",
      id: "1",
    },
    {
      title: "I want you back",
      artist: "Jackson 5 ",
      img_src: "./images/want_you_back.jpg",
      src: "./music/Iwantyouback.mp4",
      id: "2",
    },
    {
      title: "Wanna Dance",
      artist: "Whitney Houston",
      img_src: "./images/wanna_dance.jpg",
      src: "./music/iwannadancewithsomebody.mp4",
      id: "3",
    },
    {
      title: "Wake Me Up Before You Go-Go",
      artist: "Wham!",
      img_src: "./images/wake_me_up.jpg",
      src: "./music/wakemeupbeforeyougo-go.mp4",
      id: "4",
    },
    {
      title: "Thriller",
      artist: "Michael Jackson",
      img_src: "./images/thriller.jpg",
      src: "./music/thriller.mp4",
      id: "5",
    },
    {
      title: "Sweet Home Alabama",
      artist: "Lynyrd Skynyrd",
      img_src: "./images/sweet_home.jpg",
      src: "./music/sweethomealabama.mp4",
      id: "6",
    },
    {
      title: "Stayin Alive",
      artist: "Bee Gees",
      img_src: "./images/stayin_alive.jpg",
      src: "./music/stayin'alive.mp4",
      id: "7",
    },
    {
      title: "Stand by me",
      artist: "Ben E. King",
      img_src: "./images/stand.jpg",
      src: "./music/standbyme.mp4",
      id: "8",
    },
    {
      title: "Don't Stop Believin",
      artist: "Journey",
      img_src: "./images/dont_stop.jpg",
      src: "./music/Don'tStopBelieven.mp4",
      id: "9",
    },
    {
      title: "Please Mr. Postman",
      artist: "The Marvelettes",
      img_src: "./images/post.png",
      src: "./music/PleaseMrPostman.mp4",
      id: "10",
    },
    {
      title: "Livin On A Prayer",
      artist: "Bon Jovi",
      img_src: "./images/livin.jpg",
      src: "./music/LIvin'onprayer.mp4",
      id: "11",
    },
    {
      title: "Ain't no Sunshine",
      artist: "Bill Withers",
      img_src: "./images/sunshine.jpg",
      src: "./music/Ain'tNoSunshine.mp4",
      id: "12",
    },
    {
      title: "Like a Rolling Stone",
      artist: "Bob Dylan",
      img_src: "./images/like_a_rolling.jpg",
      src: "./music/likearollingstone.mp4",
      id: "13",
    },
    {
      title: "Bohemian Rhapsody",
      artist: "Queen",
      img_src: "./images/bohemian.jpg",
      src: "./music/bohemianrhapsody.mp4",
      id: "14",
    },
    {
      title: "September",
      artist: "Earth,Wind & Fire",
      img_src: "./images/september.jpg",
      src: "./music/september.mp4",
      id: "16",
    },
    {
      title: " Everybody Wants To Rule The World",
      artist: "Tears For Fears",
      img_src: "./images/rule_the_world.jpg",
      src: "./music/everybodywantstoruletheworld.mp4",
      id: "17",
    },
    {
      title: " Africa",
      artist: "Toto",
      img_src: "./images/africa.jpg",
      src: "./music/Africa.mp4",
      id: "18",
    },
  ];

  return (
    <div>
      <div class="container">
        <div class="carousel">
          {songs.map(({ id, title, img_src }) => (
            <div
              class="carousel__face"
              style={{ backgroundImage: `url(${img_src})` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TestSong;
