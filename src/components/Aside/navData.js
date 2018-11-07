
let NavItem = {
    navText:'订单管理',
    path:'/layout/loansOrder',
    subNav:[
        {
            subNavText:'货款订单',
            path:'/layout/loansOrder',

        },
        {
            subNavText:'转单订单',
            path:'/layout/TransOrder'
        }
    ]
}
 let navData = [
    {
        navText:'首页',
        path:'/layout/home'
    }
    
]
for(let i = 0;i<100;i++){
    navData.push(NavItem);
}
export default navData;