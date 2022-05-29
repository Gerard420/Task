import {shoppingHeader} from '../../../components/shopping/shopping_header/shoppingHeader.js'
import {customerHeaderUpdate} from '../../../components/customer/customer_header/customerHeaderUpdate.js'
import {customerContentChange} from '../../../components/customer/customer_content/customerContentChange.js'
// import {indexFooter} from '../../../components/index/index_footer/indexFooter.module'

Vue.createApp({
    components: {
        shoppingHeader,
        customerHeaderUpdate,
        customerContentChange,
        // indexFooter
    },
    template: `
          <div class="customer_change" id="customer_change">
          <shoppingHeader></shoppingHeader>
          <customerHeaderUpdate></customerHeaderUpdate> 
          <customerContentChange></customerContentChange>
<!--          <indexFooter></indexFooter>-->
          </div>
        `
}).mount('#root_customer_change');
