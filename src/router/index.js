// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import Home from '../pages/Home'
import Article from '../pages/Article'

//创建并暴露一个路由器
export default new VueRouter({
	// mode: 'history',
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			name: 'Article',
			path: '/article/:code',
			component: Article
		}
	]
})
