import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import filtEvents from "../../redux/actions/actionFiltEvents";
import getGenres from "../../redux/actions/actionGenres";
import { connect } from "react-redux";
import "./Filter.css"

class FilterCalend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      genre:null
    };
  }
  componentDidMount(){
    if (this.props.genres.length === 0 ){
      this.props.getGenres()
    }
  }

  async handleOnChange (e) {
    await this.setState({ genre: e.target.value });
    this.props.filtEvents({start:this.state.startDate,end:this.state.endDate,genre:this.state.genre})
  }

  render() {
    return (
      <div className="FilterContainner">
        <div className="FilterBox">
          <div name="UpcomingEvents" id="UpcomingEvents">
              <div className="FilterTitle">
                  <h2>Próximos Eventos</h2>
              </div>
          </div>
          <div className="Filters">
          <DateRangePicker
            startDateId="startDate"
            endDateId="endDate"
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={async({ startDate, endDate }) => {
            await this.setState({ startDate, endDate})
              
            if (this.state.endDate){
              this.props.filtEvents({ start: this.state.startDate, end: this.state.endDate,genre:this.state.genre }) 
              }
            }}
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => {
              this.setState({ focusedInput });
            }}
          />

          <div className="select-contein">
            <select onChange={(e) => this.handleOnChange(e)}>
              <option hidden value="Select">Genre</option>
              {this.props.genres && this.props.genres.map((el) => <option value={el.genreName}>{el.genreName}</option>)}
            </select>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filtEvents: (dates) => dispatch(filtEvents(dates)),
    getGenres : () => dispatch(getGenres())
  };
}

function mapStateToProps(state) {
  return {
    genres: state.genres
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterCalend);
