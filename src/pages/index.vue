
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
		<section class="p-b-60 experience-wrap">
			<el-row class="w-1200">
				<el-col  :span="12">
					<div class="experience-cover-wrap">
						<div class="experience-cover">
							<div class="sb-interior-frame">
								<img src="@/static/images/interior.jpg" alt="interior" class="sb-interior">
							</div>
							<div class="sb-square"></div>
							<div class="sb-cirkle-1"></div>
							<div class="sb-cirkle-2"></div>
							<div class="sb-cirkle-3"></div>
							<div class="sb-cirkle-4"></div>
							<div class="sb-experience">
							<div class="sb-exp-content">
								<p class="sb-h1 sb-mb-10">26</p>
								<p class="sb-h3">Years Experiences</p>
							</div>
							</div>
						</div>
						
					</div>
				</el-col>
				<el-col  :span="12">
					<div class="Experience-list">
						<div class="col-lg-6 align-self-center mb-30">
								<h2 class="sb-mb-60">You are doing more than <br>you expect</h2>
								<ul class="sb-features">
									<li class="sb-features-item mb-60">
										<div class="sb-number">01</div>
										<div class="sb-feature-text">
											<h3 class="sb-mb-15">Meet</h3>
											<p class="sb-text">Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.</p>
										</div>
									</li>
									<li class="sb-features-item mb-60">
										<div class="sb-number">02</div>
										<div class="sb-feature-text">
											<h3 class="sb-mb-15">Work</h3>
											<p class="sb-text">Consectetur numquam porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi.</p>
										</div>
									</li>
									<li class="sb-features-item mb-60">
										<div class="sb-number">03</div>
										<div class="sb-feature-text">
											<h3 class="sb-mb-15">Birthday</h3>
											<p class="sb-text">Necessitatibus praesentium eligendi rem temporibus adipisci quo modi. Lorem ipsum dolor sit.</p>
										</div>
									</li>
								</ul>
						</div>
					</div>
				</el-col>
			</el-row>
		</section>
		<!--  -->
		<section class="image-swiper-section p-b-60">
			<el-row>
				<el-col :span="24">
					<div class="container-wrap w-1200">
						<!-- slider-navgation -->
						<div class="sb-slider-nav flex-wrap">
							<div class="sb-prev-btn sb-slider-btn sb-short-menu-prev">
								<el-icon :size="14"><Back /></el-icon>
								
							</div>
							<div class="sb-next-btn sb-slider-btn sb-short-menu-next">
								<el-icon :size="14"><Right /></el-icon>
							</div>
						</div>
						<swiper
							:modules="modules"
							:slides-per-view="3"
							:space-between="50"
							:navigation="{  
								nextEl: '.sb-next-btn',
    							prevEl: '.sb-prev-btn',
								disabledClass: 'my-button-disabled',
							}"
							@swiper="onSwiper"
							@slideChange="onSlideChange"
						>
							<swiper-slide>
								<div class="w-fill-img image-cover">
									<img mode="aspectFill" src="@/static/images/interior.jpg" alt="">
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="w-fill-img image-cover">
									<img src="@/static/images/interior.jpg" alt="">
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="w-fill-img image-cover">
									<img src="@/static/images/interior.jpg" alt="">
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="w-fill-img image-cover">
									<img src="@/static/images/interior.jpg" alt="">
								</div>
							</swiper-slide>
						</swiper>
					</div>
				</el-col>
			</el-row>
		</section>
		<!--  -->
		<section class="">
			<svg width="100" height="100">
				<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
			</svg>

		</section>
    </div>
</template>

<script setup>
import { Navigation } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import Api from '@/apis/index'

	const modules = [Navigation]
	const onSwiper = (swiper) => {
			console.log(swiper);
    };
	const onSlideChange = () => {
		console.log('slide change');
	};



	const param1 = ref('value1')

	//  useFetch('http://101.35.18.18:8777/m_yimin_v3/api/more_news').then(({data,error})=>{
	// 	console.log('datadatadata',data)
	// 	console.log('errerrerrerr',error)

	//  })
Api.getNewsList({
	page:2
}).then(res=>{
	console.log("res77777777777",res)
}).catch(err=>{
	console.log("err7777777",err)
})
	// console.log('resres',res)
	// // console.log('pending',pending)
	// // console.log('error',error)
	// // console.log('refresh',refresh)


	// const res2 = await useAsyncData(
	// 	'mountains',
	// 	() => $fetch('http://101.35.18.18:8777/m_yimin_v3/api/more_news?page=2')
	// )
	// console.log('resres22222',res2)


</script>
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

.experience-wrap{
	.experience-cover-wrap{
		width: 100%;
		padding: 0 15px;
	}
	.experience-cover{
		position: relative;
		height: 70vh;
		
		.sb-interior-frame{
			position: absolute;
			overflow: hidden;
			z-index: 2;
			width: 80%;
			height: 90%;
			bottom: 10%;
			left: 0;
			box-shadow: 0 6px 8px -6px rgba(0, 0, 0, 0.1);
			img{
				width: 100%;
				height: 100%;
				object-fit: cover;
				object-position: bottom;
				animation: zoom 30s infinite ease-in-out;
			}
		}
		.sb-square {
			right: 0;
			bottom: 0;
			position: absolute;
			z-index: 1;
			width: 70%;
			height: 80%;
			background-color: #F9FAFC;
		}
	}
}

.image-swiper-section{
	.image-cover{
		width: 100%;
		height: 300px;
	}

	.sb-slider-btn{
		height: 50px;
		width: 50px;
		font-size: 12px;
		border-radius: 50%;
		border: solid 2px #231E41;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.my-button-disabled {
		opacity: 0.2;
	}
}
</style>