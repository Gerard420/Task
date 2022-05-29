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
    <link rel="stylesheet" href="../../styles/customer/customer_update.css" lang="css">
</head>
<body>
<div id="root_customer_update"></div>
</body>
<script type="module" src="../../module/js/customer/customer_update.js"></script>
</html>

<?php

//  引入类
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


if (isset($_POST['customer_update_btn'])) {
    $id = $_POST['id'];
// 连接数据库
    $con = mysqli_connect("localhost", "root", "", "yongtong");

// 中文转码
    mysqli_query($con, 'SET NAMES UTF8');
    if (!$con) {
        die(mysqli_connect_error());
    }
    // 验证用户名是否重复
    $sql = "select customer_mail from customer where customer_id='$id' or customer_phone='$id' or customer_mail='$id'";
    $result = mysqli_query($con, $sql);
    $row = mysqli_num_rows($result);
    if ($row > 0) {
        //  返回结果数组
        $row = mysqli_fetch_row($result);
        $email = $row[0];

        $num = rand(1000, 9999);
        $sql = "select customer_name from customer where customer_mail='$email'";
        $result = mysqli_query($con, $sql);
        $row = mysqli_fetch_row($result);
        $name = $row[0];

        //  发送邮件
        //  挂载
        require '../../module/php/PHPMailer/src/Exception.php';
        require '../../module/php/PHPMailer/src/PHPMailer.php';
        require '../../module/php/PHPMailer/src/SMTP.php';

        //  实例化
        $mail = new PHPMailer(true);

        try {
            //  服务器设置
            //  $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //  启用详细调试输出
            $mail->isSMTP();                                            //  发送协议
            $mail->Host = 'smtp.163.com';                               //  协议地址
            $mail->SMTPAuth = true;                                     //  SMTP协议认证
            $mail->Username = 'test0420@163.com';                       //  发送地址
            $mail->Password = 'UZJYJYRIGIUUMNDB';                       //  发送密码
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //  加密
            $mail->Port = 465;                                          //  端口
            $mail->CharSet = "utf8";                                    //  中文编码

            //  收件地址设置
            $mail->setFrom('test0420@163.com', 'YongTong');             //  发件人地址
            $mail->addAddress("$email", "$name");                       //  收件人地址

            //  邮件内容
            $mail->isHTML(true);                                                                     //  转为html
            $mail->Subject = '修改密码验证';                                                                 //  主题
            $mail->Body = "尊敬的$name:<br>您好的重置验证为:<b>$num</b>";                                                  //  内容

            //  发送
            $mail->send();

        } catch (Exception $e) {
            //    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
        //  session初始化
        session_start();
        $_SESSION["num"] = $num;

        echo "<script>window.location.href='../../../../yongtong/views/customer/customer_check.php?email=$email'</script>";
    } else {
        $warning = '该号码未被注册，请重新输入。';
        echo "<script>
                //  ES6箭头函数
                  window.onload = ()=> {
                        let oText = document.getElementById('warning_item');
                        oText.innerText = '$warning';
                       }
                  </script>";
    }
    // 关闭数据库
    mysqli_close($con);
}
?>