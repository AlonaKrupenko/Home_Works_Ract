import React from "react";
import ResultTable from "./ResultTable";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      address: "",
      city: "",
      country: "",
      acceptRules: false,
      isSubmitted: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isSubmitted: true });
  };

  handleChange = (filedType) => (event) => {
    console.log(event.target.value);
    event.target.type === "checkbox"
      ? this.setState({ [filedType]: !this.state.acceptRules })
      : this.setState({ [filedType]: event.target.value });
  };

  handleBack = (event) => {
    this.setState({
      isSubmitted: false,
    });
    event.target.value = this.state.email;
  };

  render() {
    if (this.state.isSubmitted === false) {
      return (
        <form name="myForm">
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="col-form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={this.state.email}
              id="email"
              placeholder="Email"
              onChange={this.handleChange("email")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password" className="col-form-label">
              Password
            </label>

            <input
              onChange={this.handleChange("password")}
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={this.state.password}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="address" className="col-form-label">
              Address
            </label>
            <textarea
              onChange={this.handleChange("address")}
              type="text"
              className="form-control"
              name="address"
              id="address"
              placeholder="1234 Main St"
              value={this.state.address}
            ></textarea>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="city" className="col-form-label">
              City
            </label>
            <input
              onChange={this.handleChange("city")}
              type="text"
              className="form-control"
              name="city"
              id="city"
              value={this.state.city}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="country" className="col-form-label">
              Country
            </label>
            <select
              onChange={this.handleChange("country")}
              id="country"
              name="country"
              className="form-control"
              value={this.state.country}
            >
              <option>Choose</option>
              <option value="argentina">Argentina</option>
              <option value="russia">Russia</option>
              <option value="china">China</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-check">
              <label className="form-check-label" htmlFor="rules">
                <input
                  checked={this.state.acceptRules}
                  onChange={this.handleChange("acceptRules")}
                  id="rules"
                  type="checkbox"
                  name="acceptRules"
                  className="form-check-input"
                />
                Accept Rules
              </label>
            </div>
          </div>

          <button
            onClick={this.handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Sign in
          </button>
        </form>
      );
    } else {
      return <ResultTable data={this.state} onClickBack={this.handleBack} />;
    }
  }
}

export default MyForm;
