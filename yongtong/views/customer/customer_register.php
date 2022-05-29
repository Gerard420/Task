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
    <link rel="stylesheet" href="../../styles/customer/customer_register.css" lang="css">
</head>
<body>
<div id="root_customer_register"></div>
</body>
<script type="module" src="../../module/js/customer/customer_register.js"></script>
</html>

<?php
if (isset($_POST['customer_register_btn'])) {
    $id = $_POST['id'];
    $password = $_POST['password'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    //  控制参数
    $para = "0";
    // 连接数据库
    $con = mysqli_connect("localhost", "root", "", "yongtong");
    // 中文转码
    mysqli_query($con, 'SET NAMES UTF8');
    //  验证账号长度
    if (strlen($id) >= 6 && strlen($id) <= 16) {
        $para = "1";
    } else {
        $warning = '账号输入长度不符合，请输入6-16位字符。';
        echo "<script>
                //  ES6箭头函数
                  window.onload = ()=> {
                        let oText = document.getElementsByClassName('warning_item');
                        oText[0].innerText = '$warning';
                        }
                  </script>";
    }


    //  验证账号是否已存在
    if ($para == 1) {
        //  如何连接失败打印错误
        if (!$con) {
            die(mysqli_connect_error());
        } else {
            // 验证customer_id和customer_password是否正确
            $sql = "select * from customer where customer_id='$id'";
            $result = mysqli_query($con, $sql);
            $row = mysqli_num_rows($result);
            if ($row > 0) {
                $warning = '该账号已被注册。';
                echo "<script>
                //  ES6箭头函数
                  window.onload = ()=> {
                        let oText = document.getElementsByClassName('warning_item');
                        oText[0].innerText = '$warning';
                        }
                  </script>";
                $para = "0";
            }
        }
    }

    //  验证密码长度
    if ($para == 1) {
        if (strlen($password) < 8 || strlen($password) > 12) {
            $warning = '密码输入长度不符合，请输入8-12位字符。';
            echo "<script>
                //  ES6箭头函数
                  window.onload = ()=> {
                        let oText = document.getElementsByClassName('warning_item');
                        oText[1].innerText = '$warning';
                        }
                  </script>";
            $para = "0";
        }
    }

    //  邮箱是否合法
    if ($para == 1) {
        //  判断邮箱是否合法
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $warning = '邮箱不合法，请正确输入邮箱。';
            echo "<script>
                //  ES6箭头函数
                  window.onload = ()=> {
                        let oText = document.getElementsByClassName('warning_item');
                        oText[3].innerText = '$warning';
                        }
                  </script>";
            $para = "0";
        }
    }

    //  邮箱是否已存在
    if ($para == 1) {
        //  如何连接失败打印错误
        if (!$con) {
            die(mysqli_connect_error());
        } else {
            // 验证customer_id和customer_password是否正确
            $sql = "select * from customer where customer_mail='$email'";
            $result = mysqli_query($con, $sql);
            $row = mysqli_num_rows($result);
            if ($row > 0) {
                $warning = '该邮箱已被注册。';
                echo "<script>
                //  ES6箭头函数
                  window.onload = ()=> {
                        let oText = document.getElementsByClassName('warning_item');
                        oText[3].innerText = '$warning';
                        }
                  </script>";
                $para = "0";
            }
        }
    }

    //  手机号是否合法
    if ($para == 1) {
        if (is_numeric($phone)) {
            if (strlen($phone) != 11) {
                $warning = '手机号输入长度不符合，请输入11位数字字符。';
                echo "<script>
                //  ES6箭头函数
                  window.onload = ()=> {
                        let oText = document.getElementsByClassName('warning_item');
                        oText[4].innerText = '$warning';
                        }
                  </script>";
                $para = "0";
            }
        } else {
            $warning = '手机号不符合，请输入11位数字字符。';
            echo "<script>
                //  ES6箭头函数
                  window.onload = ()=> {
                        let oText = document.getElementsByClassName('warning_item');
                        oText[4].innerText = '$warning';
                        }
                  </script>";
            $para = "0";
        }
    }

    //  手机号是否已被注册
    if ($para == 1) {
        //  如何连接失败打印错误
        if (!$con) {
            die(mysqli_connect_error());
        } else {
            // 验证customer_id和customer_password是否正确
            $sql = "select * from customer where customer_phone='$phone'";
            $result = mysqli_query($con, $sql);
            $row = mysqli_num_rows($result);
            if ($row > 0) {
                $warning = '该手机号已被注册。';
                echo "<script>
                //  ES6箭头函数
                  window.onload = ()=> {
                        let oText = document.getElementsByClassName('warning_item');
                        oText[4].innerText = '$warning';
                        }
                  </script>";
                $para = "0";
            }
        }
    }
    //  添加注册信息
    if ($para == 1) {
        date_default_timezone_set("Asia/Shanghai");
        $date = date("Y-m-d H:i");
        // 插入注册信息至数据库
        $sql = "insert into customer values ('$id','$password','$name','$phone','$email','$date')";
        $res = mysqli_query($con, $sql);
        if (!$res) {
            die(mysqli_errno($con));
        }
        // 关闭数据库
        mysqli_close($con);
        // 页面跳转
        echo "<script>window.location.href='../../../../yongtong/views/customer/customer_login.php'</script>";
    }


}
?>