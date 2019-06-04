import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Sidebar from "./Sidebar.jsx";
import { NavLink } from "react-router-dom";

import withStyles from "@material-ui/core/styles/withStyles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "views/Charts/style.jsx";

import suadien from "assets/img/image/suadien.jpg";
import suakhoa from "assets/img/image/suakhoa.jpg";
import bomnuoc from "assets/img/image/bomnuoc.jpg";
import ongnuoc from "assets/img/image/ongnuoc.jpg";
import chongtham from "assets/img/image/chongtham.jpg";
import boncau from "assets/img/image/boncau.jpg";
import cuacuon from "assets/img/image/cuacuon.jpg";
import noingoaithat from "assets/img/image/noingoaithat.jpg";
import kientruc from "assets/img/image/kientruc.png";
import led from "assets/img/image/led.jpg";
import dogo from "assets/img/image/dogo.jpg";
import congtrinh from "assets/img/image/congtrinh.jpg";
import nhomkinh from "assets/img/image/nhomkinh.jpg";
import thosat from "assets/img/image/thosat.jpg";
import tieucanh from "assets/img/image/tieucanh.jpg";
import sofa from "assets/img/image/sofa.jpg";

import icon03 from "assets/img/icon/icon03.jpg";


const ColoredLine = ({ color }) => (
	<hr
		style={{
			color: color,
			backgroundColor: color,
			height: 5
		}}
	/>
);

class DichVu02 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			simpleSelect: "",
		}
	}

	handleClick() {
		alert("this is ok");
	}

	render() {
		const { classes } = this.props;
		const litsItem = [
      {
				name: "Sửa điện tại nhà",
				img: suadien,
				url: "/sua_dien"
			},
			{
				name: "Thợ sửa khóa",
				img: suakhoa,
				url: "/sua_khoa"
			},
			{
				name: "Sửa máy bơm nước",
				img: bomnuoc,
				url: "/bom_nuoc"
			},
			{
				name: "Thợ sửa ống nước, thiết bị nhà vệ sinh",
				img: ongnuoc,
				url: "/#"
			},
			{
				name: "Chống thấm, chống dột, làm mái",
				img: chongtham,
				url: "/#"
			},
			{
				name: "Thông tắc bồn cầu, hút bể phốt",
				img: boncau,
				url: "/#"
			},
			{
				name: "Sửa chữa, bảo dưỡng, lắp mới cửa cuốn",
				img: cuacuon,
				url: "/#"
			},
			{
				name: "Sơn sửa, xây trát nội ngoại thất",
				img: noingoaithat,
				url: "/#"
			},
			{
				name: "Dịch vị thiết kế kiến trúc",
				img: kientruc,
				url: "/#"
			},
			{
				name: "Thay thế sửa chữa đèn chiếu sáng LED",
				img: led,
				url: "/#"
			},
			{
				name: "Sửa chữa đồ gỗ",
				img: dogo,
				url: "/#"
			},
			{
				name: "Khoan cắt, phá dỡ công trình",
				img: congtrinh,
				url: "/#"
			},
			{
				name: "Dịch vụ nhôm kính",
				img: nhomkinh,
				url: "/#"
			},
			{
				name: "Thợ sắt, khung giàn",
				img: thosat,
				url: "/#"
			},
			{
				name: "Sân vườn, hồ cá, tiểu cảnh",
				img: tieucanh,
				url: "/#"
			},
			{
				name: "Sửa ghế sofa",
				img: sofa,
				url: "/#"
			}
		]
		return (
			<GridContainer>
				<GridItem xs>
				</GridItem>

				<GridItem xs={2.5}>
					<Sidebar/>
				</GridItem >

				<GridItem xs={8}>

					<div className="page-header">
						<h2>
							<small><img src={icon03} alt="..." width="52px" height="52px"></img></small>
							{" "}Xây dựng, điện nước
						</h2>
					</div>

					<ColoredLine color="red" />

					<GridContainer>
						{litsItem.map(
							(item) => {
								return <GridItem xs={12} sm={12} md={4}>
								<NavLink to={item.url}>
									<Card product className={classes.cardHover}>
										<CardHeader image className={classes.cardHeaderHover}>
											<a href="#pablo" onClick={e => e.preventDefault()}>
												<img src={item.img} alt="..." />
											</a>
										</CardHeader>
										<CardBody>
											<h3 className={classes.cardProductTitle}>
												<a href="#pablo" onClick={e => e.preventDefault()}>
													{item.name}
												</a>
											</h3>
										</CardBody>
									</Card>
									</NavLink>
								</GridItem>
							}
						)}
					</GridContainer>
				</GridItem>

				<GridItem xs={1}>
				</GridItem>
			</GridContainer>
		);
	}
}

export default withStyles(style)(DichVu02);
