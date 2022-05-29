import {adminNav} from '../../../components/admin/admin_nav/admin_nav.js'
import {adminGoods} from '../../../components/admin/admin_body/admin_goods/adminGoods.js'

Vue.createApp({
    components: {
        adminNav,
        adminGoods
    },
    template: `
          <div class="admin_goods" id="admin_goods">
            <adminNav></adminNav>
            <adminGoods></adminGoods>
          </div>
        `
}).mount('#root_admin_goods');


//  节点挂载
let oTable = document.getElementById('goods_text');
let oWrap = document.getElementById('adminGoods');
console.log(oWrap)
oWrap.appendChild(oTable);

