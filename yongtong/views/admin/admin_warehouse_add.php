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
    <link rel="stylesheet" href="../../styles/admin/admin_warehouse_add.css" lang="css">
</head>
<body>
<div id="root_admin_warehouse_add"></div>
</body>
<script type="module" src="../../module/js/admin/admin_warehouse_add.js"></script>
</html>
<?php
if (isset($_POST['btn_add'])) {
    session_start();
    @$admin_id = $_SESSION["admin_id"];
//    $goods_id = $_POST['id'];
    $goods_price = $_POST['price'];
    $goods_name = $_POST['name'];
    $goods_number = $_POST['number'];
    if ($goods_number >= 0) {
        $state = "入库";
    } else {
        $state = "出库";
    }
//  连接数据库
    $con = mysqli_connect("localhost", "root", "", "yongtong");
    //  中文转码
    mysqli_query($con, 'SET NAMES UTF8');

    //  查询商品是否以存在
    $sql = "select goods_quantity from warehouse where goods_name='$goods_name'";
    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_row($result);
    if (!$row) {
        $sql = "select * from warehouse";
        $result = mysqli_query($con, $sql);
        $rows = mysqli_num_rows($result);
        $goods_id = (int)$rows + 1;

        //  添加库存
        $sql = "insert into warehouse(goods_id,goods_name,goods_quantity) values ('$goods_id','$goods_name','$goods_number')";
        $result = mysqli_query($con, $sql);
//
        //  获取purchase_id
        $sql = "select purchase_id from purchase";
        $result = mysqli_query($con, $sql);
        //  返回结果数组
        $i = 0;
        while ($row = mysqli_fetch_row($result)) {
            $n = (int)$row[0];
            if ($n >= $i) {
                $i = $n;
            }
        }
        $purchase_id = $i + 1;

////        $sql = "select purchase_id from purchase ORDER BY purchase_id DESC";
////        $result = mysqli_query($con, $sql);
////        //  返回结果数组
////        $row = mysqli_fetch_row($result);
////        $row[0] = (int)$row[0];
////        $purchase_id = $row[0] + 1;

        $sql = "select * from purchase_admin";
        $result = mysqli_query($con, $sql);
        $row = mysqli_num_rows($result);
        $id = (int)$row + 1;
        // 打印日志
        date_default_timezone_set("Asia/Shanghai");
        $date = date("Y-m-d H:i");
        $sql_journal = "insert into purchase_admin(id,admin_id,purchase_id,purchase_time,operation_name) values ($id,'$admin_id','$purchase_id','$date','$state')";
        $result = mysqli_query($con, $sql_journal);

        $sql = "select * from purchase";
        $result = mysqli_query($con, $sql);
        $row = mysqli_num_rows($result);
        $id = (int)$row + 1;
        //  添加入库信息
        $sql = "insert into purchase(id,purchase_id,goods_id,purchase_quantity,purchase_price) values ($id,'$purchase_id','$goods_id','$goods_number','$goods_price')";
        $result = mysqli_query($con, $sql);

    } else {
        //  获取purchase_id
        $sql = "select purchase_id from purchase";
        $result = mysqli_query($con, $sql);
        //  返回结果数组
        $i = 0;
        while ($row = mysqli_fetch_row($result)) {
            $n = (int)$row[0];
            if ($n >= $i) {
                $i = $n;
            }
        }
        $purchase_id = $i + 1;


        $sql = "select goods_id from warehouse where goods_name='$goods_name'";
        $result = mysqli_query($con, $sql);
        $row = mysqli_fetch_row($result);
        $goods_id = $row[0];
        echo $goods_id;

        $sql = "select * from purchase";
        $result = mysqli_query($con, $sql);
        $row = mysqli_num_rows($result);
        $id = (int)$row + 1;

        //  添加入库信息
        $sql = "insert into purchase(id,purchase_id,goods_id,purchase_quantity,purchase_price) values ($id,'$purchase_id','$goods_id','$goods_number','$goods_price')";
        $result = mysqli_query($con, $sql);


        $sql = "select goods_quantity from warehouse where goods_name='$goods_name'";
        $result = mysqli_query($con, $sql);
        $row = mysqli_fetch_row($result);
        $goods_quantity = $row[0];

        //  添加库存
        $goods_number = (int)$goods_number + (int)$goods_quantity;
        $sql = "update warehouse set goods_quantity='$goods_number' where goods_id='$goods_id'";
        $result = mysqli_query($con, $sql);

        $sql = "select * from purchase_admin";
        $result = mysqli_query($con, $sql);
        $row = mysqli_num_rows($result);
        $id = (int)$row + 1;

        // 打印日志
        date_default_timezone_set("Asia/Shanghai");
        $date = date("Y-m-d H:i");
        $operation_time = "$date";
        $sql = "insert into purchase_admin(id,admin_id,purchase_id,purchase_time,operation_name) value ($id,'$admin_id','$purchase_id','$operation_time','$state')";
        $result = mysqli_query($con, $sql);
    }
}
?>
