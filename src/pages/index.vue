
<template>
 	<div class="home-wrap">
		<el-row class="top-wrap w-1200">
			<el-col  :span="12">
				<div class="left-box flex-wrap flex-vertical  j-center">
					<p class="welcome-tip mb-30">Hi,new friend!</p>
					<h1>
						We do not cook,
						we create your
						emotions!
					</h1>
					<p class="sb-text mb-30">
						Consectetur numquam poro nemo veniam
						<br>eligendi rem adipisci quo modi.
					</p>
					<div class="menu-about-btns flex-wrap">
						<a class="our-menu" href="#">
							<span class="icon-wrap">
								<img src="@/static/images/menu.svg" alt="">
							</span>
							<span class="text">our menu</span>
						</a>
						<a class="about-us" href="#">
							<span class="icon-wrap icon-wrap2">
								<img src="@/static/images/arrow.svg" alt="">
							</span>
							<span class="text text2">About us</span>
						</a>
					</div>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="cover-box">
					<img class="cover" src="@/static/images/girl.png" alt="">
					<div class="sb-cirkle-1"></div>
					<div class="sb-cirkle-2"></div>
					<div class="sb-cirkle-4"></div>
					<div class="sb-cirkle-5"></div>
					<img src="@/static/images/3.svg" alt="phones" class="sb-pik-1 img-pik">
					<img src="@/static/images/1.svg" alt="phones" class="sb-pik-2 img-pik">
					<img src="@/static/images/2.svg" alt="phones" class="sb-pik-3 img-pik">
				</div>
			</el-col>
		</el-row>
		<!--  -->
		<section class="p-b-60">
			
		</section>
    </div>
</template>
<style lang="scss" scoped>
.left-box{
	height: 100vh;
}
.cover-box{
	height: 80vh;
	margin-top: 120px;
    width: 100%;
    float: right;
    border-bottom-right-radius: 400px;
    border-bottom-left-radius: 400px;
    box-shadow: 0 8px 8px -9px rgba(0, 0, 0, 0.4);
	overflow: hidden;
	position: relative;
	.cover{
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
		bottom: 0;
		right: 0;
	}
	.sb-cirkle-1{
		position: absolute;
		height: 140px;
		width: 140px;
		border-radius: 50%;
		border: solid 25px #FFFFFF;
		right: 10%;
		bottom: 15%;
		animation: animation1 3s  infinite ease-in-out;
	}
 	.sb-cirkle-2 {
		position: absolute;
		top: 35%;
    	right: 19%;
		height: 25px;
		width: 25px;
		background-color: #F5C332;
		border-radius: 50%;
		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.09);
		animation: animation1 2s  infinite ease-in-out;
	}
	.sb-cirkle-4{
		position: absolute;
		bottom: 10%;
		left: 9%;
		width: 55px;
		height: 55px;
		background-color: #F5C332;
		border-radius: 50%;
		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.09);
		animation: animation1 2s  infinite ease-in-out;
	}
	.sb-pik-1 {
		bottom: 45%;
		left: 6%;
		animation: animation2 3s  infinite ease-in-out;
	}
	.img-pik{
		position: absolute;
		width: 10%;
		opacity: 0.07;
	}
	.sb-pik-2{
		top: 48%;
		right: 4%;
		width: 8%;
		animation: animation2 3s  infinite ease-in-out;
	}
	.sb-pik-3{
		top: 18%;
    	right: 16%;
		animation: animation2 3s  infinite ease-in-out;
	}
}
.welcome-tip{
	display: inline-block;
    padding: 2px 5px;
    background-color: #F2F3F5;
    font-size: 12px;
    font-weight: 400;
    color: #231E41;
	width:fit-content;
}
h1{
	line-height: 100%;
    font-size: 72px;
    letter-spacing: -3px;
}
.sb-text{
	color: #6F6F87;
    margin: 0;
	font-size: 16px;
}
.menu-about-btns{
	a{
		height: 55px;
		letter-spacing: 0;
		font-size: 14px;
		margin-bottom: 10px;
		padding: 0 5px;
		cursor: pointer;
		position: relative;
		display: inline-flex;
		align-items: center;
		&.our-menu{
			opacity: 1;
			margin-right: 10px;
			background-color: #F5C332;
			transition: 0.3s ease-in-out;
			&:hover{
				filter: brightness(110%);
			}
		}
		.icon-wrap{
			border-radius: 50%;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			position: relative;
			padding: 0 !important;
			margin: 0;
			width: 55px;
			height: 55px;
		}
		.icon-wrap2{
			background-color: #F2F3F5;
			box-shadow: 0 0 0 2px #FFFFFF;
		}
		.text{
			white-space: nowrap;
			line-height: 55px;
			display: inline-block;
			padding: 0 20px 0 0;
			font-weight: 600;
			font-size: 14px;
			color: #232323;
		}
		.text2{
			padding: 0 0 0 15px;
		}
	}
	
}
</style>