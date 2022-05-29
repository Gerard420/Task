//  customer_content_register
export let customerContentRegister = {

    template: `
         <div class="customerBodyRegister" id="customerBodyRegister">
        <div class="center_wrap">
            <div class="register_form">
                <form action="" method="POST">
                    <div class="customer_register_id form_item">
                        <div class="input_item">
                            <span>账号</span><input type="text" name="id" id="id" placeholder="请输入6-16位字符作为你的账号">
                        </div>
                        <div class="warning_item"></div>
                    </div>
                    <div class="customer_register_password form_item">
                        <div class="input_item">
                            <span>密码</span><input type="password" name="password" id="password" placeholder="请输入8-12位字符作为您的密码">
                        </div>
                        <div class="warning_item"></div>
                    </div>
                    <div class="customer_register_name form_item">
                        <div class="input_item">
                            <span>姓名</span><input type="text" name="name" id="name" placeholder="请输入您的名字">
                        </div>
                        <div class="warning_item"></div>
                    </div>
                    <div class="customer_register_email form_item">
                        <div class="input_item">
                            <span>邮箱</span><input type="text" name="email" id="email" placeholder="请输入您的邮箱">
                        </div>
                        <div class="warning_item"></div>
                    </div>
                    <div class="customer_register_phone form_item">
                        <div class="input_item">
                            <span>手机</span><input type="text" name="phone" id="phone" placeholder="请输入您的11位手机号">
                        </div>
                        <div class="warning_item"></div>
                    </div>
                    <div class="customer_register_submit form_item">
                        <input type="submit" class="customer_register_btn btn" id="customer_register_btn"
                               name="customer_register_btn" value="注册">
                    </div>
                </form>
            </div>
        </div>
    </div>
        `
}
