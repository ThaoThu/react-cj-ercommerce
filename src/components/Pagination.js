import React from "react";
// import PropTypes from "prop-types";

const defaultButton = props => <button {...props}>{props.children}</button>;

export default class Pagination extends React.Component {
  constructor(props) {
    super();

    // this.changePage = this.changePage.bind(this);

    // this.state = {
    //   visiblePages: this.getVisiblePages(null, props.pages)
    // };
  }

  // static propTypes = {
  //   pages: PropTypes.number,
  //   page: PropTypes.number,
  //   PageButtonComponent: PropTypes.any,
  //   onPageChange: PropTypes.func,
  //   previousText: PropTypes.string,
  //   nextText: PropTypes.string
  // };

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.pages !== nextProps.pages) {
  //     this.setState({
  //       visiblePages: this.getVisiblePages(null, nextProps.pages)
  //     });
  //   }

  //   this.changePage(nextProps.page + 1);
  // }

  // filterPages = (visiblePages, totalPages) => {
  //   return visiblePages.filter(page => page <= totalPages);
  // };

  // getVisiblePages = (page, total) => {
  //   if (total < 7) {
  //     return this.filterPages([1, 2, 3, 4, 5, 6], total);
  //   } else {
  //     if (page % 5 >= 0 && page > 4 && page + 2 < total) {
  //       return [1, page - 1, page, page + 1, total];
  //     } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
  //       return [1, total - 3, total - 2, total - 1, total];
  //     } else {
  //       return [1, 2, 3, 4, 5, total];
  //     }
  //   }
  // };

  // changePage(page) {
  //   const activePage = this.props.page + 1;

  //   if (page === activePage) {
  //     return;
  //   }

  //   const visiblePages = this.getVisiblePages(page, this.props.pages);

  //   this.setState({
  //     visiblePages: this.filterPages(visiblePages, this.props.pages)
  //   });

  //   this.props.onPageChange(page - 1);
  // }

  render() {
    // const { PageButtonComponent = defaultButton } = this.props;
    // const { visiblePages } = this.state;
    // const activePage = this.props.page + 1;

    return (
      <div className = {`ReactTable ${this.props.className}`}>

      <div className="pagination-bottom">
        <div className="-pagination">
          <div className="-previous">
          <button type="button" disabled="" className="-btn">Trước</button>
          </div>
          <div className="-center">
            <span className="-pageInfo">Trang
            <div className="-pageJump">
                <input type="number" defaultValue="1" />
            </div>
            /
            <span className="-totalPages">1</span>
              </span>
              {/* <span className="select-wrap -pageSizeOptions">
                <select>
                  <option value="5">6 bản ghi</option>
                  <option value="10">20 bản ghi</option>
                  <option value="20">50 bản ghi</option>
                  </select>
                  </span> */}
                  </div>
                  <div className="-next"><button type="button" className="-btn">Sau</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
