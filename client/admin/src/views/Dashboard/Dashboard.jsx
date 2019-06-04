import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Language from "@material-ui/icons/Language";
import axios from "axios";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

const data = [
  ["Minh duy", "0522xxx890", "Sửa điều hòa, bảo dưỡng điều hòa", "1/6/2019", "...P.7, Q.10, Tp.HCM"],
  ["Minh duy", "0522xxx890", "Sửa điều hòa, bảo dưỡng điều hòa", "1/6/2019", "...P.7, Q.10, Tp.HCM"],
  ["Minh duy", "0522xxx890", "Sửa điều hòa, bảo dưỡng điều hòa", "1/6/2019", "...P.7, Q.10, Tp.HCM"],
  ["Minh duy", "0522xxx890", "Sửa điều hòa, bảo dưỡng điều hòa", "1/6/2019", "...P.7, Q.10, Tp.HCM"],
  ["Minh duy", "0522xxx890", "Sửa điều hòa, bảo dưỡng điều hòa", "1/6/2019", "...P.7, Q.10, Tp.HCM"],
  ["Minh duy", "0522xxx890", "Sửa điều hòa, bảo dưỡng điều hòa", "1/6/2019", "...P.7, Q.10, Tp.HCM"],
  ["Minh duy", "0522xxx890", "Sửa điều hòa, bảo dưỡng điều hòa", "1/6/2019", "...P.7, Q.10, Tp.HCM"],
  ["Minh duy", "0522xxx890", "Sửa điều hòa, bảo dưỡng điều hòa", "1/6/2019", "...P.7, Q.10, Tp.HCM"],
  ["Minh duy", "0522xxx890", "Sửa điều hòa, bảo dưỡng điều hòa", "1/6/2019", "...P.7, Q.10, Tp.HCM"],
  ["Minh duy", "0522xxx890", "Sửa điều hòa, bảo dưỡng điều hòa", "1/6/2019", "...P.7, Q.10, Tp.HCM"],
  ["Minh duy", "0522xxx890", "Sửa điều hòa, bảo dưỡng điều hòa", "1/6/2019", "...P.7, Q.10, Tp.HCM"],
  ["Minh duy", "0522xxx890", "Sửa điều hòa, bảo dưỡng điều hòa", "1/6/2019", "...P.7, Q.10, Tp.HCM"],
  ["Minh duy", "0522xxx890", "Sửa điều hòa, bảo dưỡng điều hòa", "1/6/2019", "...P.7, Q.10, Tp.HCM"],
]

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount(){
    axios.get(
      "http://localhost:8000/post/get",
      {headers: {Authorization: localStorage.getItem("TOKEN")}}
    ).then((data) => console.log(data))
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h3>Danh sách yêu cầu dịch vụ</h3>
        <br />
        <GridContainer>
          {data.map((item, index) => {
            return <GridItem xs={12} sm={12} md={4} key={index}>
              <Card product className={classes.cardHover}>
                <CardHeader color="warning" stats icon>
                  <CardIcon color="info">
                    <Icon>content_copy</Icon>
                  </CardIcon>
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardProductTitle}>
                    <a href="#" onClick={e => e.preventDefault()}>
                      K.Hàng: {item[0]}
                    </a>
                  </h4>
                  <h4 className={classes.cardProductTitle}>
                    <a href="#" onClick={e => e.preventDefault()}>
                      Điện thoại: {item[1]}
                    </a>
                  </h4>
                  <p className={classes.cardProductDesciprion}>
                    Đặt: {item[2]}
                  </p>
                </CardBody>
                <CardFooter product chart>
                  <div className={classes.stats}>
                    <AccessTime /> {item[3]}
                </div>
                  <div className={`${classes.stats} ${classes.productStats}`}>
                    <Place /> {item[4]}
                </div>
                </CardFooter>
              </Card>
            </GridItem>
          })}
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
