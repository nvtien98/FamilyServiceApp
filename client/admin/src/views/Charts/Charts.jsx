import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AccessTime from "@material-ui/icons/AccessTime";
import Place from "@material-ui/icons/Place";
import Icon from "@material-ui/core/Icon"
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
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

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
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
                  <CardIcon color="primary">
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

Buttons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Buttons);
