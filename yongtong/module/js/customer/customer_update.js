import {shoppingHeader} from '../../../components/shopping/shopping_header/shoppingHeader.js'
import {customerHeaderUpdate} from '../../../components/customer/customer_header/customerHeaderUpdate.js'
import {customerContentUpdate} from '../../../components/customer/customer_content/customerContentUpdate.js'
// import {indexFooter} from '../../../components/index/index_footer/indexFooter.module'

Vue.createApp({
    components: {
        shoppingHeader,
        customerHeaderUpdate,
        customerContentUpdate,
        // indexFooter
    },
    template: `
          <div class="customer_update" id="customer_update">
          <shoppingHeader></shoppingHeader>
          <customerHeaderUpdate></customerHeaderUpdate> 
          <customerContentUpdate></customerContentUpdate>
<!--          <indexFooter></indexFooter>-->
          </div>
        `
}).mount('#root_customer_update');
