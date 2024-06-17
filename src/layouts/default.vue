<template>
	
	<div class="container-wrap">
		<header class="header-wrap">
			<div class="container w-1200 flex-wrap a-center j-between">
			<div class="logo-wrap">
				<a href="#">
					<img src="@/static/images/logo.svg" alt="logo">
				</a>
			</div>
			<nav class="nav-wrap">
				<ul class="nav-ul flex-wrap">
					<li class="nav-li">
						<a class="active" href="#">Home</a>
					</li>
					<li class="nav-li">
						<a href="#">Pages</a>
					</li>
					<li class="nav-li">
						<a href="#">Menu</a>
					</li>
					<li class="nav-li">
						<a href="#">Shop</a>
					</li>
					<li class="nav-li">
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>
		</div>
		</header>
		
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.header-wrap{
	width: 100%;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: solid 1px #F2F3F5;
    border-top: solid 1px #F2F3F5;
	.container{
		height: 120px;
	}
	.nav-li{
		a{
			position: relative;
			padding: 0 30px;
			display: inline-block;
			font-weight: 400;
			height: 100%;
			color: #231E41;
			font-size: 14px;
			transition: 0.3s ease-in-out;
			&.active{
				&::after{
					content: '';
					position: absolute;
					top: 50%;
					left: 15px;
					margin-top: -4px;
					height: 8px; 
					width: 8px;
					border-radius: 50%;
					background-color: #F5C332;
				}
			}
			&:hover{
				color: $main-color;
			}
		}	
	}
}

	
</style>