import {adminNav} from '../../../components/admin/admin_nav/admin_nav.js'
import {adminWarehouse} from '../../../components/admin/admin_body/admin_warehouse/adminWarehouse.js'

Vue.createApp({
    components: {
        adminNav,
        adminWarehouse
    },
    template: `
          <div class="admin_warehouse" id="admin_warehouse">
            <adminNav></adminNav>
            <adminWarehouse></adminWarehouse>
          </div>
        `
}).mount('#root_admin_warehouse');

//  节点挂载
let oTable = document.getElementById('warehouse_text');
let oWrap = document.getElementById('adminWarehouse');
console.log(oWrap)
oWrap.appendChild(oTable);