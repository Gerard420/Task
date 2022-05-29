import {shoppingHeader} from '../../../components/shopping/shopping_header/shoppingHeader.js'
import {customerHeaderLogin} from '../../../components/customer/customer_header/customerHeaderLogin.js'
import {customerContentLogin} from '../../../components/customer/customer_content/customerContentLogin.js'
// import {indexFooter} from '../../components/index/index_footer/indexFooter.module'

Vue.createApp({
    components: {
        shoppingHeader,
        customerHeaderLogin,
        customerContentLogin,
        // indexFooter
    },
    template: `
          <div class="customer_login" id="customer_login">
          <shoppingHeader></shoppingHeader>
          <customerHeaderLogin></customerHeaderLogin> 
          <customerContentLogin></customerContentLogin>
<!--          <indexFooter></indexFooter>-->
          </div>
        `
}).mount('#root_customer_login');
