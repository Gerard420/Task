import {shoppingHeader} from '../../../components/shopping/shopping_header/shoppingHeader.js'
import {customerHeaderRegister} from '../../../components/customer/customer_header/custormerHeaderRegister.js'
import {customerContentRegister} from '../../../components/customer/customer_content/customerContentRegister.js'
// import {indexFooter} from '../../components/index/index_footer/indexFooter.module'

Vue.createApp({
    components: {
        shoppingHeader,
        customerHeaderRegister,
        customerContentRegister,
        // indexFooter
    },
    template: `
          <div class="customer_register" id="customer_register">
          <shoppingHeader></shoppingHeader>
          <customerHeaderRegister></customerHeaderRegister> 
          <customerContentRegister></customerContentRegister>
<!--          <indexFooter></indexFooter>-->
          </div>
        `
}).mount('#root_customer_register');
