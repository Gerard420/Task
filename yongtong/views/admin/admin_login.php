<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!--  vue类引入  -->
    <script src="../../module/js/vue/vue.js"></script>
    <!--  初始化  -->
    <link rel="stylesheet" href="../../styles/base/reset.css" lang="css">
    <!--  样式  -->
    <link rel="stylesheet" href="../../styles/admin/admin_login.css" lang="css">
</head>
<body>
<div id="root_admin_login"></div>
</body>
<script type="module" src="../../module/js/admin/admin_login.js"></script>
</html>

<?php
//  当按钮提交
if (isset($_POST['admin_login_btn'])) {
    $admin_id = $_POST['id'];
    $admin_password = $_POST['password'];

    // 连接数据库
    $con = mysqli_connect("localhost", "root", "", "yongtong");
    // 中文转码
    mysqli_query($con, 'SET NAMES UTF8');
    //  如何连接失败打印错误
    if (!$con) {
        die(mysqli_connect_error());
    } else {
        // 验证用户名是否正确
        $sql = "select * from admin where admin_id='$admin_id'and admin_password='$admin_password'";
        $result = mysqli_query($con, $sql);
        $row = mysqli_num_rows($result);
        if ($row == 0) {
            $warning = '您输入的账号或密码不正确，请重新输入。';
            echo "<script>
                //  ES6箭头函数
                  window.onload = ()=> {
                        let oText = document.getElementById('warning_item');
                        oText.innerText = '$warning';
                       }
                  </script>";
            die();
        } else {
            // 关闭数据库
            mysqli_close($con);
            session_start();
            $_SESSION["admin_id"] = $admin_id;
            // // 页面跳转
            echo "<script>window.location.href='../../../../yongtong/views/admin/admin_warehouse.php'</script>";
        }
    }
}


?>




