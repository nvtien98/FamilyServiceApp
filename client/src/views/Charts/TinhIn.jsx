import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Icon from "@material-ui/core/Icon"
import Sidebar from "./Sidebar.jsx";

import withStyles from "@material-ui/core/styles/withStyles";
import style from "views/Charts/style.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import tinhin from "assets/img/image/tinhin.jpg"
import tinhin01 from "assets/img/image/tinhin01.jpg"
import tinhin02 from "assets/img/image/tinhin02.jpg"


import avt01 from "assets/img/avatar/avt01.jpg";
import avt02 from "assets/img/avatar/avt02.jpg";
import avt03 from "assets/img/avatar/avt03.jpg";
import avt04 from "assets/img/avatar/avt04.jpg";
import avt05 from "assets/img/avatar/avt05.png";


import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountBox from "@material-ui/icons/AccountBox";
import Build from "@material-ui/icons/Build";


class TinhIn extends React.Component {
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
		// const {classes} = this.props
		return (
			<GridContainer>
				<GridItem xs={1}>
				</GridItem>
				<GridItem xs={2.5}>
					<Sidebar/>
				</GridItem >

				<GridItem xs={8}>
					<div style={{ width: "100%", margin: "auto" }}>
						<div id="carousel-id" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="item active">
									<img alt="Third slide" src={tinhin} />
									<div className="container">
										<div className="carousel-caption">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="page-header">
						<h2 style={{ color: "green", fontWeight: "bold" }}>Sửa chữa máy tính, máy in, phần mềm</h2>
					</div>

					<Button color="rose" style={{ width: "100%", height: "55px" }}>
						<p><ShoppingCart style={{ width: "30px", height: "30px", fontSize: "50" }} /> Đặt dịch vụ</p>
					</Button>
					<br />
					<br />
					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
							<Card>
								<CardHeader color="rose" icon>
									<CardIcon color="rose">
										<AccountBox />
									</CardIcon>
									<div style={{ paddingLeft: "100px" }}>
										<h2 style={{ color: "green", fontWeight: "bold" }}>95.399</h2>
										<h3 style={{ color: "green" }}>Khách hàng đã sử dụng</h3>
									</div>
								</CardHeader>
							</Card>
						</GridItem>

						<GridItem xs={12} sm={12} md={4}>
							<Card>
								<CardHeader color="rose" icon>
									<CardIcon color="rose">
										<Build />
									</CardIcon>
									<div style={{ paddingLeft: "100px" }}>
										<h2 style={{ color: "green", fontWeight: "bold" }}>7.344</h2>
										<h3 style={{ color: "green" }}>Nhà cung cấp tham gia</h3>
									</div>
								</CardHeader>
							</Card>
						</GridItem>

						<GridItem xs={12} sm={12} md={4}>
							<Card>
								<CardHeader color="rose" icon>
									<CardIcon color="rose">
										<ShoppingCart />
									</CardIcon>
									<div style={{ paddingLeft: "100px" }}>
										<h2 style={{ color: "green", fontWeight: "bold" }}>140.203</h2>
										<h3 style={{ color: "green" }}>Đơn hàng đã phục vụ</h3>
									</div>
								</CardHeader>
							</Card>
						</GridItem>
					</GridContainer>


					<div className="panel panel-info">
						<div className="panel-heading">
							<h3 className="panel-title">Yêu cầu dịch vụ mới</h3>
						</div>
						<div className="panel-body">
							<div style={{ overflow: "hidden" }}>
								<p style={{ fontWeight: "bold", color: "#FF00FF", paddingLeft: "30px", float: "left" }}>Thời gian: </p>
								<p style={{ color: "#FF00FF", marginLeft: "130px", }}>19/02/2019 15:30:00</p>
							</div>

							<div style={{ overflow: "hidden" }}>
								<p style={{ fontWeight: "bold", color: "#FF00FF", paddingLeft: "30px", float: "left" }}>K.Hàng: </p>
								<p style={{ color: "#FF00FF", marginLeft: "130px", }}>Nguyễn Văn Tiến</p>
							</div>

							<div style={{ overflow: "hidden" }}>
								<p style={{ fontWeight: "bold", color: "#FF00FF", paddingLeft: "30px", float: "left" }}>Điện thoại: </p>
								<p style={{ color: "#FF00FF", marginLeft: "130px", }}>0522xxx890</p>
							</div>

							<div style={{ overflow: "hidden" }}>
								<p style={{ fontWeight: "bold", color: "#FF00FF", paddingLeft: "30px", float: "left" }}>Tại: </p>
								<p style={{ color: "#FF00FF", marginLeft: "130px", }}>Quận 10, Tp.Hồ Chí Minh</p>
							</div>

							<div style={{ overflow: "hidden" }}>
								<p style={{ fontWeight: "bold", color: "#FF00FF", paddingLeft: "30px", float: "left" }}>Đặt: </p>
								<p style={{ color: "#FF00FF", marginLeft: "130px", }}>Sữa điều hòa, bão dưỡng điều hòa</p>
							</div>
						</div>
					</div>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
					Sửa máy tính
					</h3>

					<p>
					Hãy đặt ở dịch vụ từ các nhà cung cấp, các công ty dịch vụ sửa chữa máy tính liên kết với Rada có khoảng cách gần nơi bạn yêu cầu nhất để được chăm sóc trực tiếp tại nhà.
					</p>
					<br />

					<h3 style={{ color: "green", fontWeight: "bold" }}>
					Thiết bị & mục công việc trong phạm vi:
					</h3>
					<ul>
						<li>Sửa chữa, bảo trì máy tính để bàn (PC), máy tính xách tay (laptop) bao gồm cả phần cứng, cài đặt, sửa chữa và cấu hình phần mềm.</li>
						<li>Máy in, máy quét bao gồm cả máy in nối mạng.</li>
						<li>Switch/Hub/Modem/Router loại vừa và nhỏ (SOHO)</li>
						<li>Hệ điều hành chấp nhận: Windows, Linux, MacOS</li>
					</ul>

					<img src={tinhin01} alt="..." style={{ marginLeft: "10%" }} />

					<h3 style={{ color: "green", fontWeight: "bold" }}>
					Giá thành tham khảo:
					</h3>
					<ul>
						<li><p>Kiểm tra, chuẩn đoán xử lý online qua mạng: <a style={{ color: "red" }}>110.000đ/lần</a> (chi phí này áp dụng trong trường hợp kỹ thuật viên khám/kiểm tra và sửa lỗi từ xa, bạn cần chuyển tiền trước cho dịch vụ theo thỏa thuận trước khi tiến hành)</p></li>
						<li><p>Kiểm tra, chuẩn đoán, sửa chữa trực tiếp tại nhà: <a style={{ color: "red" }}>250.000đ/lần</a> (chi phí này tính theo ca làm việc 2 tiếng của kỹ sư hoặc kỹ thuật viên cho 1 thiết bị. Thiết bị thứ 2 trở đi trong cùng thời gian sẽ tính <a style={{ color: "red" }}>110.000đ/máy</a>. Không bao gồm linh kiện, vật tư thay thế nếu phát sinh)</p></li>
						<li><p>Linh kiện thay thế (nếu có): Theo thực tế chủng loại và giá thị trường.</p></li>
					</ul>
					
					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Chúng tôi cam kết:
					</h3>
					<ul>
						<li>Đội ngũ thợ sửa chữa tay nghề cao là kỹ sư/kỹ thuật viên CNTT có trình độ đại học trở lên</li>
						<li>Hoàn tiền nếu trục trặc trong vòng 1 tháng</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Lưu ý:
					</h3>
					<ul>
						<li>Chỉ sử dụng dịch vụ nếu hai bên thống nhất phương án sửa chữa, giá thành chi tiết.</li>
						<li>Chat/gọi cho chúng tôi nếu thấy điều gì bất thường.</li>
						<li>Đánh giá nhà cung cấp sau khi hoàn thành.</li>
						<li>Khiếu nại với chúng tôi nếu cảm thấy dịch vụ sửa TV chưa tốt để chúng tôi kiểm tra và loại bỏ các nhà cung cấp dịch vụ nếu không đáp ứng chất lượng yêu cầu.</li>
						<li>Hóa đơn (VAT): Bạn có thể yêu cầu xuất hóa đơn, nếu dịch vụ không đồng ý, bạn có thể từ chối kết nối và đánh giá, chấm điểm để chuyển sang dịch vụ khác.</li>
					</ul>

					<img src={tinhin02} alt="..." style={{ marginLeft: "10%" }} />

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Top dịch vụ tin cậy
					</h3>
					<table class="table table-bordered table-hover">
						<thead>
							<tr>
								<th>Avatar</th>
								<th>Đại diện</th>
								<th>Dịch vụ</th>
								<th>Rate</th>
							</tr>
						</thead>
						<tbody>
						<tr>
								<td><img src={avt01} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>Phùng Gia Bệnh viện máy tính</td>
								<td>Phùng Gia Bệnh viện máy tính</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>
							<tr>
								<td><img src={avt02} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>Nguyễn Thế Hoàng</td>
								<td>Thợ sửa chữa máy tính</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>

							<tr>
								<td><img src={avt03} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>Phùng Huy Thành</td>
								<td>D.O.G group</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>

							<tr>
								<td><img src={avt04} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>Vương Hoàng Cường</td>
								<td>Điện Tử Hoàng Cường</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>

							<tr>
								<td><img src={avt05} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>Đỗ Hoàng Yến</td>
								<td>CEN COMPUTER</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>
						</tbody>
					</table>
			
				</GridItem>

				<GridItem xs>
				</GridItem>
			</GridContainer >
		);
	}
}

export default withStyles(style)(TinhIn);
