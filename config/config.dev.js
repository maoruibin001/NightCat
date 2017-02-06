export default {
	debug: true,
	host: 'localhost:8080',

	/*  端口信息  */
	port: 80,
	dev_port: 8080,

	/*  mongodb 配置  */
	db_port: 27017,
	db_host: 'localhost',
	db: 'admin',

	/*  网站信息  */
	name: 'NightCat',
	description: 'A site',

	/*  加密用字段  */
	session_secret: 'modify-it',

	/*  发送邮箱设置  */
	mail_opts: {
		host: 'smtp.126.com',
		port: 25,
		auth: {
			user: 'nightcatsama@126.com',
			pass: '******'
		}
	},

	/*  数据库账号密码  */
	database: {
		username: 'username',
		password: 'password'
	},

	// github 登陆的配置
	github_oauth: {
		clientID: 'f34a0e50609f8dc19f8b',
		clientSecret: '4de9dc2c0c03ee1e5c603e58963662f83cc2c048'
	},
	// 是否允许直接注册（否则只能走 github 的方式）
	allow_sign_up: true
}