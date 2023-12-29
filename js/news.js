function News(heading, date, body) {
   this.heading = heading;
   this.date = date;
   this.body = body;
}


let News01 = new News(
   "Internal and external advertisement for vacant academic positions",
   "19 Apr 2023, 11:32pm",
   "something");

console.log(News01.date)