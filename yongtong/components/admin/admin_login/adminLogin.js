//  admin_login
export let adminLogin = {
    template: `
         <div class="adminLogin" id="adminLogin">
        <div class="center_wrap">
            <div class="banner">
                <img src="../../../../yongtong/resources/img/admin_login/login_background.jpg" alt="">
            </div>
            <div class="login_form">
                <form action="" method="post">
                    <div class="login_id login_item">
                        <span>账号</span><input type="text" name="id" id="id" class="id">
                    </div>
                    <div class="login_password login_item">
                        <span>口令</span><input type="password" name="password" id="password" class="password">
                    </div>
                    <div class="login_btn login_item">
                        <input type="submit" name="admin_login_btn" value="登录">
                    </div>
                </form>
            </div>
            <div class="warning_item" id="warning_item"></div>
        </div>
    </div>
        `
}
