import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import filtEvents from "../../redux/actions/actionFiltEvents";
import { connect } from "react-redux";
import "./Filter.css"

class FilterCalend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      genre:""
    };
  }

  handleOnChange (e) {
    this.setState({ genre: e.target.value });
  }

  render() {
    return (
      <div className="Filter">
        <div>
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => {
            const first = startDate._d;
            const second = endDate === null ? null : endDate._d;
            this.setState({ startDate: startDate, endDate: endDate });

            this.props.filtEvents({ start: first, end: second });
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => {
            this.setState({ focusedInput });
          }}
        />
        </div>

        <div className="select-contein">
          <select onChange={(e) => this.handleOnChange(e)}>
            <option hidden value="Select">Genre</option>
            {this.props.genres && this.props.genres.map((el) => <option value={el}>{el}</option>)}
          </select>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filtEvents: (dates) => dispatch(filtEvents(dates)),
  };
}

function mapStateToProps(state) {
  return {
    genres: state.genres
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterCalend);
