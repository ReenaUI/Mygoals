import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
// class DatePick extends React.Component {
//   state = {
//     startDate: new Date()
//   };

//   handleChange = date => {
//     this.setState({
//       startDate: date
//     });
//   };

//   render() {
//     return (
  
//       <DatePicker className="form-control datepicker"
//         selected={this.state.startDate}
//         onChange={this.handleChange} isClearable placeholderText='MM/DD/YYYY'
//         selected={startDate}
//         onChange={date => setStartDate(date)}
//         minDate={new Date()}
//         maxDate={addMonths(new Date(), 5)}
//         showDisabledMonthNavigation
//       />
//     );
//   }
// }

export default () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="cust-datepicker">
      <DatePicker
        selected={startDate}
        minDate={new Date()}
        onChange={date => setStartDate(date)}
        isClearable placeholderText='MM/DD/YYYY'
        className="datepicker form-control"
      />
    </div>
  );
};