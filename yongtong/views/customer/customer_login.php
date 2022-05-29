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
    <link rel="stylesheet" href="../../styles/customer/customer_login.css" lang="css">
</head>
<body>
<div id="root_customer_login"></div>
</body>
<script type="module" src="../../module/js/customer/customer_login.js"></script>
</html>
<?php
if (isset($_POST['customer_login_btn'])) {
    $customer_password = $_POST['customer_password'];
    $customer_id = $_POST['customer_id'];


    // 连接数据库
    $con = mysqli_connect("localhost", "root", "", "yongtong");
    // 中文转码
    mysqli_query($con, 'SET NAMES UTF8');
    //  如何连接失败打印错误
    if (!$con) {
        die(mysqli_connect_error());
    } else {
        // 验证customer_id和customer_password是否正确
        $sql = "select * from customer where customer_id='$customer_id' and customer_password='$customer_password'";
        $result = mysqli_query($con, $sql);
        $row = mysqli_num_rows($result);
        if ($row == 0) {
            $warning = '您输入的号码或密码不正确，请重新输入。';
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
            // 页面跳转
            echo "<script>window.location.href='../../../../yongtong/views/shopping/shopping_index.php'</script>";
        }
    }

}
?>