//  customer_content_login
export let customerContentLogin = {
    template: `
         <div class="customerBodyLogin" id="customerBodyLogin">
            <div class="center_wrap">
                <div class="login_form">
                    <form action="" method="POST">
                        <div class="customer_login_id form_item">
                            <div class="input_item">
                                <span>号码</span><input type="text" name="customer_id" id="id" >
                            </div>
                        </div>
                        <div class="customer_login_password form_item">
                            <div class="input_item">
                                <span>密码</span><input type="password" name="customer_password" id="password" >
                            </div>
                         </div>
                        <div class="update_item form_item">
                            <a href="../../../../yongtong/views/customer/customer_update.php">找回密码</a>
                        </div>
                         <div class="warning_item form_item" id="warning_item"></div>
                            <div class="customer_login_submit form_item">
                                <input type="submit" class="customer_login_btn btn" id="customer_login_btn"
                                       name="customer_login_btn" value="登录">
                            </div>
                    </form>
                </div>
            </div>
        </div>
        `
}
