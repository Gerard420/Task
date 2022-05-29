import {adminNav} from '../../../components/admin/admin_nav/admin_nav.js'
import {adminGoodsAdd} from '../../../components/admin/admin_body/admin_goods/adminGoodsAdd.js'

Vue.createApp({
    components: {
        adminNav,
        adminGoodsAdd
    },
    template: `
          <div class="admin_goods_add" id="admin_goods_add">
            <adminNav></adminNav>
            <adminGoodsAdd></adminGoodsAdd>
          </div>
        `
}).mount('#root_admin_goods_add');
