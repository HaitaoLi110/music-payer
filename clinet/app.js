(function (Vue) {
	var loadTemplate=function(name){
		return  document.getElementById(name+'_templ').innerHTML;
	}

	const pad = (num, n) => (Array(n).join(0) + num).slice(-n)

  	const convertDuration = duration => {
    const h = Math.floor(duration / 3600)
    const m = Math.floor(duration % 3600 / 60)
    const s = Math.floor(duration % 60)
    return h ? `${pad(h, 2)}:${pad(m, 2)}:${pad(s, 2)}` : `${pad(m, 2)}:${pad(s, 2)}`
  }
	var songs=[{"id":1,"name":"Knockin' On Heaven's Door","artist":"Guns N' Roses","duration":342,"music":"http://127.0.0.1:2010/uploads/Guns N' Roses - Knockin' On Heaven's Door.mp3","poster":"http://127.0.0.1:2010uploadsGuns N' Roses.jpg","lyric":"http://127.0.0.1:2010/uploads/Guns N' Roses - Knockin' On Heaven's Door.lrc"},{"id":2,"name":"I Will Be Your Shelter","artist":"Rebecca Blaylock","duration":342,"music":"http://127.0.0.1:2010/uploads/Rebecca Blaylock - I Will Be Your Shelter.mp3","poster":"http://127.0.0.1:2010uploadsRebecca Blaylock.jpg","lyric":"http://127.0.0.1:2010/uploads/Rebecca Blaylock - I Will Be Your Shelter.lrc"},{"id":3,"name":"我恨我痴心","artist":"刘德华","duration":342,"music":"http://127.0.0.1:2010/uploads/刘德华 - 我恨我痴心.mp3","poster":"http://127.0.0.1:2010uploads刘德华.jpg","lyric":"http://127.0.0.1:2010/uploads/刘德华 - 我恨我痴心.lrc"},{"id":4,"name":"不说再见","artist":"好妹妹乐队","duration":342,"music":"http://127.0.0.1:2010/uploads/好妹妹乐队 - 不说再见.mp3","poster":"http://127.0.0.1:2010uploads好妹妹乐队.jpg","lyric":"http://127.0.0.1:2010/uploads/好妹妹乐队 - 不说再见.lrc"},{"id":5,"name":"青城山下白素贞","artist":"好妹妹乐队","duration":342,"music":"http://127.0.0.1:2010/uploads/好妹妹乐队 - 青城山下白素贞.mp3","poster":"http://127.0.0.1:2010uploads好妹妹乐队.jpg","lyric":"http://127.0.0.1:2010/uploads/好妹妹乐队 - 青城山下白素贞.lrc"},{"id":6,"name":"送情郎(2010.12.11 德云二队张一元晚场)","artist":"岳云鹏","duration":342,"music":"http://127.0.0.1:2010/uploads/岳云鹏 - 送情郎(2010.12.11 德云二队张一元晚场).mp3","poster":"http://127.0.0.1:2010uploads岳云鹏.jpg","lyric":"http://127.0.0.1:2010/uploads/岳云鹏 - 送情郎(2010.12.11 德云二队张一元晚场).lrc"},{"id":7,"name":"往事只能回味","artist":"岳云鹏,宋小宝","duration":342,"music":"http://127.0.0.1:2010/uploads/岳云鹏,宋小宝 - 往事只能回味.mp3","poster":"http://127.0.0.1:2010uploads岳云鹏,宋小宝.jpg","lyric":"http://127.0.0.1:2010/uploads/岳云鹏,宋小宝 - 往事只能回味.lrc"},{"id":8,"name":"天梯(Live) - live","artist":"张智霖","duration":342,"music":"http://127.0.0.1:2010/uploads/张智霖 - 天梯(Live) - live.mp3","poster":"http://127.0.0.1:2010uploads张智霖.jpg","lyric":"http://127.0.0.1:2010/uploads/张智霖 - 天梯(Live) - live.lrc"},{"id":9,"name":"友情岁月","artist":"李克勤","duration":342,"music":"http://127.0.0.1:2010/uploads/李克勤 - 友情岁月.mp3","poster":"http://127.0.0.1:2010uploads李克勤.jpg","lyric":"http://127.0.0.1:2010/uploads/李克勤 - 友情岁月.lrc"},{"id":10,"name":"合久必婚","artist":"李克勤","duration":342,"music":"http://127.0.0.1:2010/uploads/李克勤 - 合久必婚.mp3","poster":"http://127.0.0.1:2010uploads李克勤.jpg","lyric":"http://127.0.0.1:2010/uploads/李克勤 - 合久必婚.lrc"},{"id":11,"name":"天梯","artist":"李克勤","duration":342,"music":"http://127.0.0.1:2010/uploads/李克勤 - 天梯.mp3","poster":"http://127.0.0.1:2010uploads李克勤.jpg","lyric":"http://127.0.0.1:2010/uploads/李克勤 - 天梯.lrc"},{"id":12,"name":"爱不释手","artist":"李克勤","duration":342,"music":"http://127.0.0.1:2010/uploads/李克勤 - 爱不释手.mp3","poster":"http://127.0.0.1:2010uploads李克勤.jpg","lyric":"http://127.0.0.1:2010/uploads/李克勤 - 爱不释手.lrc"},{"id":13,"name":"飞花","artist":"李克勤","duration":342,"music":"http://127.0.0.1:2010/uploads/李克勤 - 飞花.mp3","poster":"http://127.0.0.1:2010uploads李克勤.jpg","lyric":"http://127.0.0.1:2010/uploads/李克勤 - 飞花.lrc"},{"id":14,"name":"充满希望","artist":"玛莉亚","duration":342,"music":"http://127.0.0.1:2010/uploads/玛莉亚 - 充满希望.mp3","poster":"http://127.0.0.1:2010uploads玛莉亚.jpg","lyric":"http://127.0.0.1:2010/uploads/玛莉亚 - 充满希望.lrc"},{"id":15,"name":"友谊之光","artist":"玛莉亚","duration":342,"music":"http://127.0.0.1:2010/uploads/玛莉亚 - 友谊之光.mp3","poster":"http://127.0.0.1:2010uploads玛莉亚.jpg","lyric":"http://127.0.0.1:2010/uploads/玛莉亚 - 友谊之光.lrc"},{"id":16,"name":"老中医","artist":"花粥","duration":342,"music":"http://127.0.0.1:2010/uploads/花粥 - 老中医.mp3","poster":"http://127.0.0.1:2010uploads花粥.jpg","lyric":"http://127.0.0.1:2010/uploads/花粥 - 老中医.lrc"},{"id":17,"name":"静静的看着你装逼","artist":"花粥&四四","duration":342,"music":"http://127.0.0.1:2010/uploads/花粥&四四 - 静静的看着你装逼.mp3","poster":"http://127.0.0.1:2010uploads花粥&四四.jpg","lyric":"http://127.0.0.1:2010/uploads/花粥&四四 - 静静的看着你装逼.lrc"},{"id":18,"name":"也曾相识","artist":"谭咏麟","duration":342,"music":"http://127.0.0.1:2010/uploads/谭咏麟 - 也曾相识.mp3","poster":"http://127.0.0.1:2010uploads谭咏麟.jpg","lyric":"http://127.0.0.1:2010/uploads/谭咏麟 - 也曾相识.lrc"},{"id":19,"name":"夏日寒风","artist":"谭咏麟","duration":342,"music":"http://127.0.0.1:2010/uploads/谭咏麟 - 夏日寒风.mp3","poster":"http://127.0.0.1:2010uploads谭咏麟.jpg","lyric":"http://127.0.0.1:2010/uploads/谭咏麟 - 夏日寒风.lrc"},{"id":20,"name":"雾之恋","artist":"谭咏麟","duration":342,"music":"http://127.0.0.1:2010/uploads/谭咏麟 - 雾之恋.mp3","poster":"http://127.0.0.1:2010uploads谭咏麟.jpg","lyric":"http://127.0.0.1:2010/uploads/谭咏麟 - 雾之恋.lrc"}]
	//跟组件	
	var App = Vue.extend({})
	App.audio = new Audio()
	//定义组件
	var  Home=Vue.extend({
		// template:'  <img src="assets/img/home.png" alt="" width="100%">'
		template:loadTemplate('home')
	})
	var  Songs=Vue.extend({
		template:loadTemplate('list'),
		data:function(){
			//jsonp
			//this 是list构造实例
			this.$http.jsonp('http://127.0.0.1:2010/api/music')
				.then(res =>{
					this.list=res.data
				})
			return{
				list:[]
			}
		},
		methods:{
			pad:pad,
			convertDuration:convertDuration
		}
	})
	var Player=Vue.extend({
		template:loadTemplate('item'),
		data:function(){
			return {
				item:{}
			}
		},
	route:{
		data:function(transition){
			//使用路由，在这可以拿到路由参数
			var id =parseInt(transition.to.params.id)
			if(!id){
				router.go('/list')
				return
			} 
			//this 是list构造实例
			this.$http.jsonp('http://127.0.0.1:2010/api/music/'+id)
				.then(res =>{
					 if(!res.ok) return router.go({name:'list'})
					 
					this.item={current:0,playing:false,random:false}
				 //console.log(this.item)
				  Object.assign(this.item, res.data)
				App.audio.src=this.item.music
				App.audio.autoplay=true
				App.audio.addEventListener('loadedmetadata',()=>{
					this.item.duration=App.audio.duration;
					})
			
				App.audio.addEventListener('timeupdate',()=>{
					this.item.current= App.audio.currentTime
				})
				App.audio.addEventListener('Player',()=>{
					this.item.playing=true
				})
				App.audio.addEventListener('pause',()=>{
					this.item.playing=false
				})
				//this.item=res.data
			})
				.catch(error=> router.go({name:'list'}))
			return {
				item:{}
			}

		}
	}
		,
		methods:{
			pad:pad,
			convertDuration:convertDuration,
			play(){
				if(this.item.playing){
					App.audio.pause()
				}else{
					App.audio.play()
				}
				this.item.playing = !this.item.playing
			},
			progress(){
				App.audio.currentTime=this.item.current
			},
			next(){
				this.$http.jsonp('http://127.0.0.1:2010/api/music').then(res => {
					const ids=res.data.map( s=>s.id)
					let targetIndex =ids.indexOf(this.item.id)+1
					if(targetIndex>=ids.length){
						targetIndex=0
					}
					router.go({name:'item',params:{id:ids[targetIndex]}})
				})
			},
			prev(){
				this.$http.jsonp('http://127.0.0.1:2010/api/music').then(res=>{
					const ids=res.data.map(s=>s.id)
					let targetIndex=ids.indexOf(this.item.id)-1
					if(targetIndex<0){
						targetIndex = ids.length-1
					}
					router.go({name:'item',params:{id:ids[targetIndex]}})
				})
			}
		}
	})

	
	//创建路由
	var router = new VueRouter()

	//路由匹配
 router.map({
    '/home': {
    	name:'home',
      component: Home
    },
    '/songs': {
    	name:'list',
      component: Songs
    },
    '/songs/:id': {
    	name:'item',
      component: Player
    },
  })
	

	//启动路由
	router.start(App, '#app')
})(Vue)