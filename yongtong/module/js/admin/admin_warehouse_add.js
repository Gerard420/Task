import {adminNav} from '../../../components/admin/admin_nav/admin_nav.js'
import {adminWarehouseAdd} from '../../../components/admin/admin_body/admin_warehouse/adminWarehouseAdd.js'

Vue.createApp({
    components: {
        adminNav,
        adminWarehouseAdd
    },
    template: `
          <div class="admin_warehouse_add" id="admin_warehouse_add">
            <adminNav></adminNav>
            <adminWarehouseAdd></adminWarehouseAdd>
          </div>
        `
}).mount('#root_admin_warehouse_add');
