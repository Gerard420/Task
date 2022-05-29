//  customer_content_update
export let customerContentUpdate = {
    template: `
       <div class="customerBodyUpdate" id="customerBodyUpdate">
        <div class="center_wrap">
            <div class="update_form">
                <form action="" method="post">
                    <div class="customer_update_id form_item">
                        <div class="input_item">
                            <span>账号</span><input type="text" name="id" id="id" placeholder="请输入您的账号/手机号/邮箱">
                        </div>
                        <div class="warning_item" id="warning_item"></div>
                    </div>
                    <div class="customer_update_submit form_item">
                        <input type="submit" class="customer_update_btn btn" id="customer_update_btn"
                               name="customer_update_btn" value="获取验证码">
                    </div>
                </form>
            </div>
        </div>
    </div>
        `
}
