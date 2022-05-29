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
    <link rel="stylesheet" href="../../styles/customer/customer_check.css" lang="css">
</head>
<body>
<div id="root_customer_check"></div>
</body>
<script type="module" src="../../module/js/customer/customer_check.js"></script>
</html>

<?php
session_start();
@$email = $_GET['email'];
$num = $_SESSION['num'];

if (isset($_POST['customer_check_btn'])) {
    $check_number = $_POST['check_number'];
    if ($check_number == $num) {
        echo "<script>window.location.href='../../../../yongtong/views/customer/customer_change.php?email=$email'</script>";
    } else {
        $warning = '验证输入错误，请重新输入。';
        echo "<script>
                //  ES6箭头函数
                  window.onload = ()=> {
                        let oText = document.getElementById('warning_item');
                        oText.innerText = '$warning';
                       }
                  </script>";
    }
}
?>
