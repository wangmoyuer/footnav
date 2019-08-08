<template>
	<div class="manage tc">
		<button v-on:click="add">新增</button>
		<div class="input-area" v-show="showAdd">
			<input type="text" placeholder="请输入人员姓名" v-model="nameValue"> <!-- v-model指令是双向绑定，一般用于表单组件，当输入框的值改变，其绑定的nameValue跟着改变，同理，当绑定的nameValue值改变，输入框的值也跟着改变 -->
			<button v-on:click="addName">确定</button>
		</div>
		<table>
			<tr>
				<th>姓名</th>
				<th>操作</th>
			</tr>          
			<tr v-for="(item,index) in peoples" key="item.name"> <!-- 列表渲染用v-for指令，item为自定义的名字，指向数组中的每一个个体，peoples为我们在data函数中定义的数组名字，模板渲染采用{{ }} -->
				<td>
					{{item.name}}
				</td>
				<td v-bind:id="index">
                    <!-- 当点击“编辑”字样时，触发edit事件，edit事件主要控制showEdit为true，让编辑输入区域渲染出来，同时还获取td标签上的id值，保存到一个变量editId中 -->
                    <span v-on:click="edit">编辑</span>
                     <span v-on:click="del">删除</span>
                </td>
			</tr>
		</table>
        <!-- v-show指令，showAdd是一个布尔值，为true则渲染，为false则隐藏 -->
		<div class="wrap" v-show="showEdit">
			<div class="content">
				<input type="text" placeholder="请输入新姓名" v-model="newName">               
				<button v-on:click="cancel">取消</button>   <!-- v-on绑定事件指令，用于控制showAdd的值从而控制输入框div的隐藏与显示 -->             
				<button v-on:click="editName">确定</button>
			</div>
		</div>
        <!-- v-show指令与v-if指令的区别就在于，前者一开始就加载，更适用于频繁的切换，后者需首先判断布尔值，为true才加载渲染 -->
		<footer-nav v-bind:class="{'isManage':isNowPage}"></footer-nav>
	</div>
</template>

<style>
	.manage{padding-bottom:50px;}
	.manage >button{width:200px; height:40px; line-height:40px; background-color:#41b883; border: none; border-radius:5px; font-size:16px; color:#fff;}
	table{width:100%; max-width:500px; margin:0 auto; margin-top:20px;}
	.input-area input{width: 200px; height: 40px; line-height:40px; margin:20px 0; outline:none; border:1px solid #333;}
	.input-area button{ width:60px; height: 40px; line-height:40px; background-color:#41b883; border: none; border-radius:5px; font-size:16px; color:#fff;}
	th,td{width:100px;}
	tr input{width:100px; height:30px; padding-left:10px; outline:none; border:1px solid #333;}
	.wrap{display:table; position:fixed; top:0; left:0; height:100%; width:100%; background:rgba(0,0,0,.8); z-index: 10;}
	.wrap .content{display:table-cell; vertical-align:middle;}
	.wrap .content input{height: 40px; line-height: 40px; display:block; margin:0 auto; margin-bottom:10px; font-size:16px;}
	.wrap .content button{width:100px; height: 30px; line-height: 30px; background-color:#41b883; border: none; border-radius:5px; font-size:16px; color:#fff;}
</style>

<script>
	import footerNav from '../../components/footer.vue'
	export default{
		components: {
			footerNav
		},
		data(){
			return{
				isNowPage: true,
				showAdd: false,
				showEdit: false,
				peoples: [{'name':'Jack'},{'name':'Joe'}],//增加数组
				nameValue: '',
				newName: '',
				editId: 0
			}
		},
        methods: {//方法        
			add(){// add(){}===add:function(){}
				this.showAdd = true
			},
			addName(){
				var v = this.nameValue
				if(v.trim() == ""){
					alert("请输入新增人员姓名")
				}else{
					var data = {}
					data.name = v
					this.peoples.push(data)
				}
			},
			del(e){
				var id = e.target.offsetParent.id
				this.peoples.splice(id,1)
			},
			edit(e){
				var id = e.target.offsetParent.id
				this.showEdit = true
				this.editId = id
				this.newName = this.peoples[id].name
			},
			cancel(){
				this.showEdit = false
			},
			editName(){
				var v = this.newName
				if(v.trim() == ""){
					alert("请输入姓名")
				}else{
					this.peoples[this.editId].name = this.newName
					this.showEdit = false
				}
			}
		}
	}
</script>
