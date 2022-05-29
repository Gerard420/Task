import {adminNav} from '../../../components/admin/admin_nav/admin_nav.js'
import {adminGoodsUpdate} from '../../../components/admin/admin_body/admin_goods/adminGoodsUpdate.js'

Vue.createApp({
    components: {
        adminNav,
        adminGoodsUpdate
    },
    template: `
          <div class="admin_goods_update" id="admin_goods_update">
            <adminNav></adminNav>
            <adminGoodsUpdate></adminGoodsUpdate>
          </div>
        `
}).mount('#root_admin_goods_update');

//  节点挂载
let oTable = document.getElementById('goods_text');
let oWrap = document.getElementById('adminGoodsUpdate');
console.log(oWrap)
oWrap.appendChild(oTable);