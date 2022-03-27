import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import Player from "./components/Player/Player";
import Song from "./components/song.component";
import TestSong from "./components/testSong.component";
import "./app.scss";
import Triv from "./components/triv";

const plswork = "Hello";

const App = () => {
  const [songs] = useState([
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
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="car">
      <h1>Rowdy Retrobox </h1>
      <div className="back"> </div>
      <div className="jukebox">
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
          credit="true"
        />
      </div>
      <p id="text">Came for the music, Stayed for the vibe :) </p>

      <div className="carosel">
        <TestSong />
      </div>
    </div>
  );
};

export default App;
