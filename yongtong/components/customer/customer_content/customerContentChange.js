//  customer_content_change
export let customerContentChange = {
    template: `
         <div class="customerBodyChange" id="customerBodyChange">
        <div class="center_wrap">
            <div class="change_form">
                <form action="" method="post">
                    <div class="customer_change_new form_item">
                        <div class="input_item">
                            <span>输入新密码</span><input type="text" name="change_number" id="change_number" placeholder="请输入您的新密码">
                        </div>
<!--                        <div class="warning_item"></div>-->
                    </div>
                    <div class="customer_change_renew form_item">
                        <div class="input_item">
                            <span>确认新密码</span><input type="text" name="change_number_then" id="change_number" placeholder="请输入再输入一次您的新密码">
                        </div>
                    </div>
                     <div class="warning_item form_item" id="warning_item"></div>
                        <div class="customer_change_submit form_item">
                            <input type="submit" class="customer_change_btn btn" id="customer_change_btn"
                                   name="customer_change_btn" value="修改密码">
                        </div>
                </form>
            </div>
        </div>
    </div>
        `
}
