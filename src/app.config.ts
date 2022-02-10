import taro from '@tarojs/taro';

export default {
	pages: [
		'pages/home/home'
	],
	window: {
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#fff',
		navigationBarTitleText: 'Mmstudio',
		navigationBarTextStyle: 'black',
		backgroundColor: '#fff'
	},
	// tabBar: {
	// 	color: '#413E3E',
	// 	selectedColor: '#FF8181',
	// 	backgroundColor: '#6360FF',
	// 	list: [{
	// 		pagePath: 'pages/home/home',
	// 		iconPath: './tabBar/home.png',
	// 		selectedIconPath: './tabBar/home1.png',
	// 		text: '首页'
	// 	},
	// 	{
	// 		pagePath: 'pages/todo/todo',
	// 		iconPath: './tabBar/daiban.png',
	// 		selectedIconPath: './tabBar/daiban1.png',
	// 		text: '待办'
	// 	}, {
	// 		pagePath: 'pages/my/my',
	// 		iconPath: './tabBar/my.png',
	// 		selectedIconPath: './tabBar/my1.png',
	// 		text: '我的'
	// 	}]
	// }
} as taro.Config;
