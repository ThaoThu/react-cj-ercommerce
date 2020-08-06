import React from "react";
import PropTypes from "prop-types";
import CustomTable from "../../components/CustomTable";

List.propTypes = {
  data: PropTypes.array.isRequired,
};

function List(props) {
  let handleAction = () => {
    return 1;
  };
  let renderStatus = (stt) => {
    return 1;
  };
  let data = [
    {
      id: "1",
      anh: "https://picsum.photos/seed/picsum/200/300",
      ma: "001",
      ten: "Harry Potter",
      danhmuc: "novel",
      gia: "150.000",
      daban: 12,
      trangthai: 0,
    },
    {
      id: "2",
      anh: "https://picsum.photos/seed/picsum/200/300",
      ma: "001",
      ten: "Sherlock",
      danhmuc: "novel",
      gia: "150.000",
      daban: 13,
      trangthai: 1,
    },
    {
      id: "1",
      anh: "https://picsum.photos/seed/picsum/200/300",
      ma: "001",
      ten: "The fault's from the star",
      danhmuc: "novel",
      gia: "170.000",
      daban: 12,
      trangthai: 2,
    },
  ];
  let columns = [
    {
      Header: "ID",
      accessor: "id",
      width: 50,
    },

    {
      Header: "Ảnh",
      accessor: "anh",
      Cell: (props) => (
        <div className="new-table__img">
          <img src={props.original.anh} />
        </div>
      ),
      width: 115,
    },
    {
      Header: "Mã sách",
      accessor: "ma",
    },
    {
      Header: "Tên sách",
      accessor: "ten",
    },
    {
      Header: "Danh mục",
      accessor: "danhmuc",
    },
    {
      Header: "Giá bán",
      accessor: "gia",
    },
    {
      Header: "Số lượng đã bán",
      accessor: "daban",
    },
    {
      Header: "Trạng thái",
      accessor: "trangthai",
      Cell: (props) => renderStatus(props.original.trangthai),
    },
    {
      Header: "Thao tác",
      id: "action",
      Cell: (props) => handleAction(props),
    },
  ];
  return (
    <CustomTable
      columns={columns}
      data={data}
      defaultPageSize={5}
      page={0}
      pages={1}
    />
  );
}

export default List;
