import {indexHeader} from '../../../components/index/index_header/indexHeader.js'
import {adminLogin} from '../../../components/admin/admin_login/adminLogin.js'

Vue.createApp({
    components: {
        indexHeader,
        adminLogin
    },
    template: `
          <div class="admin_login" id="admin_login">
            <indexHeader></indexHeader>
            <adminLogin></adminLogin>
          </div>
        `
}).mount('#root_admin_login');
