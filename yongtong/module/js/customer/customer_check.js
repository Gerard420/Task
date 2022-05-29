import {shoppingHeader} from '../../../components/shopping/shopping_header/shoppingHeader.js'
import {customerHeaderUpdate} from '../../../components/customer/customer_header/customerHeaderUpdate.js'
import {customerContentCheck} from '../../../components/customer/customer_content/customerContentCheck.js'
// import {indexFooter} from '../../../components/index/index_footer/indexFooter.module'

Vue.createApp({
    components: {
        shoppingHeader,
        customerHeaderUpdate,
        customerContentCheck,
        // indexFooter
    },
    template: `
          <div class="customer_check" id="customer_check">
          <shoppingHeader></shoppingHeader>
          <customerHeaderUpdate></customerHeaderUpdate> 
          <customerContentCheck></customerContentCheck>
<!--          <indexFooter></indexFooter>-->
          </div>
        `
}).mount('#root_customer_check');
