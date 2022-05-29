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
    <link rel="stylesheet" href="../../styles/admin/admin_goods_add.css" lang="css">
</head>
<body>
<div id="root_admin_goods_add"></div>
</body>
<script type="module" src="../../module/js/admin/admin_goods_add.js"></script>
</html>

<?php
if (isset($_POST['btn_add'])) {
    $goods_name = $_POST['name'];
    $goods_price = $_POST['price'];
    $img_url = $_POST['img_url'];
    session_start();
    @$admin_id = $_SESSION["admin_id"];
    //  连接数据库
    $con = mysqli_connect("localhost", "root", "", "yongtong");
    //  中文转码
    mysqli_query($con, 'SET NAMES UTF8');
    //  如何连接失败打印错误
    if (!$con) {
        die(mysqli_connect_error());
    } else {
        // 利用goods_name获取goods_id
        $sql = "select goods_id from warehouse where goods_name='$goods_name'";
        $result = mysqli_query($con, $sql);
        //  返回结果数组
        $row = mysqli_fetch_row($result);
        //  判断是否有返回值
        if (!$row) {

            //  将goods_id倒序排列
            $sql = "select * from warehouse ORDER BY goods_id DESC";
            $result = mysqli_query($con, $sql);
            $row = mysqli_num_rows($result);
            $goods_id = (int)$row + 1;
//            //  赋值新商品的goods_id
//            $row = (int)$row[0] + 1;
//            $goods_id = $row + 1;
//            echo $goods_id;
//
            //  操作日志
            date_default_timezone_set("Asia/Shanghai");
            $date = date("Y-m-d H:i");
            $operation_time = "$date";
            //  上架日志
            $sql = "insert into goods_admin(admin_id,goods_id,operation_time,operation_name) values ('$admin_id','$goods_id','$operation_time','商品上架')";
            $result = mysqli_query($con, $sql);

            //  添加库存商品信息
            $sql = "insert into warehouse(goods_id,goods_name,goods_quantity) values ('$goods_id','$goods_name','0')";
            $result = mysqli_query($con, $sql);


            //  上架商品
            $sql = "insert into goods(goods_id,goods_price_sale,goods_url) values ('$goods_id','$goods_price','$img_url')";
            $result = mysqli_query($con, $sql);

            // 关闭数据库
            mysqli_close($con);
        } else {
            $goods_id = $row[0];
            date_default_timezone_set("Asia/Shanghai");
            $date = date("Y-m-d h:i");
            $operation_time = "$date";
            //  插入
            $sql = "insert into goods(goods_id,goods_price_sale,goods_url) values('$goods_id','$goods_price','$img_url')";
            $result = mysqli_query($con, $sql);
            $sql = "insert into goods_admin(admin_id,goods_id,operation_time,operation_name) values ('$admin_id','$goods_id','$operation_time','商品上架')";
            $result = mysqli_query($con, $sql);
            // 关闭数据库
            mysqli_close($con);
        }
        //  提示
        $warning = '商品添加成功。';
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