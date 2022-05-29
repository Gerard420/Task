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
    <link rel="stylesheet" href="../../styles/customer/customer_change.css" lang="css">
</head>
<body>
<div id="root_customer_change"></div>
</body>
<script type="module" src="../../module/js/customer/customer_change.js"></script>
</html>

<?php
@$email = $_GET['email'];
$para = "0";
if (isset($_POST['customer_change_btn'])) {
    $password = $_POST['change_number'];
    $password_then = $_POST['change_number_then'];

    //  验证第一次输入长度
    if (strlen($password) < 8 || strlen($password) > 12) {
        $warning = '密码输入长度不符合，请输入8-12位字符。';
        echo "<script>
                //  ES6箭头函数
                  window.onload = ()=> {
                        let oText = document.getElementById('warning_item');
                        oText.innerText = '$warning';
                        }
                  </script>";
    } else {
        $para = "1";
    }

    //  验证第二次输入长度
    if ($para == 1) {
        if (strlen($password_then) < 8 || strlen($password_then) > 12) {
            $warning = '密码输入长度不符合，请输入8-12位字符。';
            echo "<script>
                //  ES6箭头函数
                  window.onload = ()=> {
                        let oText = document.getElementById('warning_item');
                        oText.innerText = '$warning';
                        }
                  </script>";
            $para = "0";
        }
    }


    //  验证是否相同
    if ($para == 1) {
        if ($password == $password_then) {
            // 连接数据库
            $con = mysqli_connect("localhost", "root", "", "yongtong");
            // 中文转码
            mysqli_query($con, 'SET NAMES UTF8');
            $sql = "update customer set customer_password='$password' where customer_mail='$email'";
            $result = mysqli_query($con, $sql);
            // 关闭数据库
            mysqli_close($con);
            echo "<script>window.location.href='../../../../yongtong/views/customer/customer_login.php'</script>";
        } else {
            $warning = '两次输入不相同，请重新确认。';
            echo "<script>
                //  ES6箭头函数
                  window.onload = ()=> {
                        let oText = document.getElementById('warning_item');
                        oText.innerText = '$warning';
                        }
                  </script>";
            $para = "0";
        }
    }
}
?>