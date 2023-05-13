for (let i = 0; i <= 5; i++) {
  const data = [
    {
      "image-source": "../assets/image/phone_watch.jpg",
      "image-alt": "error-image",
      audio_source:
        "../assets/audio/Y2Mate.is - 84 BPM - 24 - Metronome-ZEfXMbfRsNA-128k-1654630603724.mp3",
      title: "1.What is the timing?",
      options: "a). b). c). d).",
      choices: "6/8 1/2 4/4 3/4",
    },
    {
      audio_source:
        "../assets/audio/Y2Mate.is - 70 BPM 34 Wood Metronome HD-yiUqTnfW3hY-160k-1654631078769.mp3",
      choices: "1/2 6/8 3/4 4/4",
    },
    {
      audio_source:
        "../assets/audio/Y2Mate.is - 84 BPM - 24 - Metronome-ZEfXMbfRsNA-128k-1654630603724.mp3",
      choices: "4/4 6/8 3/4 1/2",
    },
    {
      audio_source:
        "../assets/audio/Y2Mate.is - 70 BPM 34 Wood Metronome HD-yiUqTnfW3hY-160k-1654631078769.mp3",
      choices: "3/4 1/2 3/4 4/4",
    },
    {
      audio_source:
        "../assets/audio/Y2Mate.is - 70 BPM 44 Wood Metronome HD-zLnmY6hNINM-160k-1656908577444.mp3",
      choices: "3/4 1/2 3/4 4/4",
    },
  ];
  let metronome_div;

  let metronome1_div;
  let metronome1_image;
  let metronome1_audio;

  let metronome2_div;
  let metronome2_title;

  metronome_div = document.createElement("div");
  metronome_div.setAttribute("class", "metronome");

  metronome1_div = document.createElement("div");
  metronome1_div.setAttribute("class", "metronome1");
  metronome_div.append(metronome1_div);

  metronome1_image = document.createElement("img");
  metronome1_image.setAttribute("src", data[0]["image-source"]);
  metronome1_image.setAttribute("alt", data[0]["image-alt"]);
  metronome1_div.append(metronome1_image);

  metronome1_audio = document.createElement("audio");
  metronome1_audio.setAttribute("id", "watch");
  metronome1_audio.setAttribute("src", data[i].audio_source);
  metronome1_audio.setAttribute("controls", "controls");
  metronome1_div.append(metronome1_audio);

  metronome2_div = document.createElement("div");
  metronome2_div.setAttribute("class", "metronome2");
  metronome_div.append(metronome2_div);

  metronome2_title = document.createElement("h2");
  metronome2_title.innerText = data[0].title;
  metronome2_div.append(metronome2_title);

  metronome2_options = document.createElement("b");
  metronome2_options.innerText = data[0].options;
  metronome2_div.append(metronome2_options);

  metronome2_choices = document.createElement("button");
  metronome2_choices.innerText = data[i].choices;
  metronome2_div.append(metronome2_choices);

  document.querySelector("main").append(metronome_div);
}
