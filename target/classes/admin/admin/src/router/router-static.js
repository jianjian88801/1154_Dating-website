import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import hunligongsi from '@/views/modules/hunligongsi/list'
    import hunligongsiCollection from '@/views/modules/hunligongsiCollection/list'
    import hunligongsiOrder from '@/views/modules/hunligongsiOrder/list'
    import jiehunanli from '@/views/modules/jiehunanli/list'
    import jiehunanliCollection from '@/views/modules/jiehunanliCollection/list'
    import xiangqin from '@/views/modules/xiangqin/list'
    import xiangqinCollection from '@/views/modules/xiangqinCollection/list'
    import xiangqinLiuyan from '@/views/modules/xiangqinLiuyan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryHunligongsiCollection from '@/views/modules/dictionaryHunligongsiCollection/list'
    import dictionaryJiehunanliCollection from '@/views/modules/dictionaryJiehunanliCollection/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryXiangqinCollection from '@/views/modules/dictionaryXiangqinCollection/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryHunligongsiCollection',
        name: '收藏表类型',
        component: dictionaryHunligongsiCollection
    }
    ,{
        path: '/dictionaryJiehunanliCollection',
        name: '收藏表类型',
        component: dictionaryJiehunanliCollection
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryXiangqinCollection',
        name: '收藏表类型',
        component: dictionaryXiangqinCollection
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/hunligongsi',
        name: '婚礼公司',
        component: hunligongsi
      }
    ,{
        path: '/hunligongsiCollection',
        name: '婚礼公司收藏',
        component: hunligongsiCollection
      }
    ,{
        path: '/hunligongsiOrder',
        name: '婚礼公司预约',
        component: hunligongsiOrder
      }
    ,{
        path: '/jiehunanli',
        name: '结婚案例',
        component: jiehunanli
      }
    ,{
        path: '/jiehunanliCollection',
        name: '结婚案例收藏',
        component: jiehunanliCollection
      }
    ,{
        path: '/xiangqin',
        name: '相亲',
        component: xiangqin
      }
    ,{
        path: '/xiangqinCollection',
        name: '相亲收藏',
        component: xiangqinCollection
      }
    ,{
        path: '/xiangqinLiuyan',
        name: '相亲留言',
        component: xiangqinLiuyan
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
