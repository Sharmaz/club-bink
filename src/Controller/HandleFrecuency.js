import data from '../btc_data.json';
import BtcData from '../models/BtcData';

function filterDataEveryXDays(dataArray, FrequencyEnum) {
    const result = [];
    let lastDate = new Date(dataArray[0].date);

    result.push(dataArray[0]);

    for (let i = 1; i < dataArray.length; i++) {
      const currentDate = new Date(dataArray[i].date);
      const diffTime = Math.abs(currentDate - lastDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      switch (FrequencyEnum) {
        case "Semanal":
          if (diffDays >= 7) {
            result.push(dataArray[i]);
            lastDate = currentDate;
          }
          break;
        case "Bisemanal":
          if (diffDays >= 30) {
            result.push(dataArray[i]);
            lastDate = currentDate;
          }
          break;
        case "Mensual":
          if (diffDays >= 365) {
            result.push(dataArray[i]);
            lastDate = currentDate;
          }
          break;
        default:
          break;
      }
    }

    return result;
}

export function handleFrecuencyChange(amount, FrequencyEnum) {
    
    // deserialize the data to ChartDTO objects
    const btcData = data.map((d) => new BtcData(d.date, d.price));

    // Filter the data
    const filteredData = filterDataEveryXDays(btcData, FrequencyEnum);
    // convert filteredData int json
    const filteredDataJson = filteredData.map((d) => ({ date: d.date, price: d.price }));

    // String builder to display the data
    

    localStorage.setItem('btcData', JSON.stringify(filteredDataJson));
}

