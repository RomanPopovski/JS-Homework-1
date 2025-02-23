class Abonement {
  constructor(options) {
    this.abondata = options.abondata;
  }
  firstname = "";
  number = "";

  set abondata(newName) {
    const abonemetdatarow = newName.split(",");
    this.firstname = abonemetdatarow[0];
    this.number = abonemetdatarow[1];
  }
  get name() {
    return `Abonement's name : ${this.firstname}. Abonement's phone number is: ${this.number}`;
  }
}

const User1 = new Abonement({
  abondata: "Roman Popoych,+380668123456",
});
console.log(User1);

const User2 = new Abonement({
  abondata: "Anastasiia,+38050577799",
});
console.log(User2);

const User3 = new Abonement({
  abondata: "Valentyna Mykolaivna, 337-244-737",
});
console.log(User3);
