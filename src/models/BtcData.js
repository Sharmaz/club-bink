// BtcData.js
class BtcData {
  constructor(date, price) {
    this.date = date;
    this.price = price;
  }

  // You can add methods to manipulate or display the data if needed
  display() {
    console.log(`Date: ${this.date}, Price: ${this.price}`);
  }
}

export default BtcData;