import React from "react";
import cn from "classnames";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
    };
  }

  handleClick = (btnType) => () => {
    const currentPosition = this.state.currentPosition;
    let newPosition = "null";
    if (btnType === "prev") {
      newPosition =
        currentPosition !== 0
          ? currentPosition - 1
          : this.props.items.length - 1;
    } else {
      newPosition =
        currentPosition === this.props.items.length - 1
          ? 0
          : currentPosition + 1;
    }
    this.setState({ currentPosition: newPosition });
  };

  render() {
    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {this.props.items.map((el, index) => {
            const activeClasses = cn("carousel-item", {
              active: this.state.currentPosition === index,
            });

            return (
              <div className={activeClasses} key={index}>
                <img
                  className="d-block w-100 "
                  src={el.src}
                  alt="carousel"
                ></img>
              </div>
            );
          })}
        </div>

        <button
          onClick={this.handleClick("prev")}
          className="carousel-control-prev"
          data-bs-target="#carousel"
          type="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          onClick={this.handleClick("next")}
          className="carousel-control-next"
          data-bs-target="#carousel"
          type="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default Carousel;
