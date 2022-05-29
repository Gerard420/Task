//  customer_content_check
export let customerContentCheck = {
    template: `
         <div class="customerBodyCheck" id="customerBodyCheck">
        <div class="center_wrap">
            <div class="check_form">
                <form action="" method="post">
                    <div class="customer_check_id form_item">
                        <div class="input_item">
                            <span>验证码</span><input type="text" name="check_number" id="check_number" placeholder="请输入您邮箱收到的验证码">
                        </div>
                        <div class="warning_item" id="warning_item"></div>
                    </div>
                        <div class="customer_check_submit form_item">
                            <input type="submit" class="customer_check_btn btn" id="customer_check_btn"
                                   name="customer_check_btn" value="验证">
                        </div>
                </form>
            </div>
        </div>
    </div>
        `
}
