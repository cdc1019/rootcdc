import Home from '../components/Home.vue'
import Layout from '../components/Layout.vue'
import Login from '../components/Layout.vue'
import LoansOrder from '../components/LoansOrder'
import VueTest from '../components/test'
export default [
    {
        path:'/',
        redirect:'/layout/home'
    },
    {
        path:'/layout',
        component:Layout,
        children:[
            {
                path:'home',
                name:'home',
                component:Home
            },
            {
                path:'loansOrder',
                component:LoansOrder
            }
            // {
            //     path:'transOrder',
            //     component:TransOrder
            // }
        ]
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/test',
        alias:'/atest',
        components:{
            default:VueTest
        }
    }
]