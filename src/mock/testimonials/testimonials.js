import Star from "#svg/Star.jsx"

class Testimonial {
  constructor(clientName, clientImg, comment, rating) {
    this.clientName = clientName;
    this.clientImg = clientImg;
    this.comment = comment;
    this.rating = rating;
  }

  getRating(size) {
    let clientRating = Array(5).fill(false);
    for (let i = 0; i < this.rating; i++) {
      clientRating[i] = true;
    }
    clientRating = clientRating.map((element, index) =>
      element ? (
        <Star isActive={true} size={size} key={index} />
      ) : (
        <Star isActive={false} size={size} key={index} />
      ),
    );
    return clientRating;
  }
}

export const RobertFox = new Testimonial(
  "Robert Fox",
  require("./images/RobertFox.png"),
  "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
  5,
);

export const DianneRussell = new Testimonial(
  "Dianne Russell",
  require("./images/DianneRussell.png"),
  "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
  5,
);

export const EleanorPena = new Testimonial(
  "Eleanor Pena",
  require("./images/EleanorPena.png"),
  "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
  5,
);
