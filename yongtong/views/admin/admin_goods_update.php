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
    <link rel="stylesheet" href="../../styles/admin/admin_goods_update.css" lang="css">
</head>
<body>
<div id="root_admin_goods_update"></div>
</body>
<script type="module" src="../../module/js/admin/admin_goods_update.js"></script>
</html>

<?php
$id = $_GET['id_information'];
session_start();
@$admin_id = $_SESSION["admin_id"];
//  连接数据库
$con = mysqli_connect("localhost", "root", "", "yongtong");
//  中文转码
mysqli_query($con, 'SET NAMES UTF8');
if (!$con) {
    die(mysqli_connect_error());
}
$sql = "select * from goods_view where id=$id";
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_row($result);
echo "
<div class='goods_text' id='goods_text'>
            <div class='center_wrap'>
                <form action='' method='post'>
                    <div class='goods_id list_item'>
                        <span>商品ID</span><input value='$row[1]' name='id' class='id' id='id' disabled>
                    </div>
                    <div class='goods_name list_item'>
                        <span>商品名称</span><input value='$row[2]' name='name' class='name' id='name' disabled>
                    </div>
                    <div class='goods_price list_item'>
                        <span>商品价格</span><input value='$row[3]' name='price' class='price' id='price'>
                    </div>
                    <div class='goods_url list_item'>
                        <span>图片链接</span><input value='$row[4]' name='img_url' class='img_url' id='img_url'
                    >
                    </div>
                    <div class='goods_number list_item'>
                        <span>库存数量</span><input value='$row[5]' name='number' class='number' id='number' disabled>
                    </div>
                    <div class='list_item list_btn goods_update'>
                        <input type='submit' value='提交' name='btn_update'>
                    </div>
                </form>

            </div>
        </div>
";

if (isset($_POST["btn_update"])) {
    $price = $_POST['price'];
    $url = $_POST['img_url'];
    date_default_timezone_set("Asia/Shanghai");
    $date = date("Y-m-d H:i");
    $operation_time = "$date";

    //  修改
    $sql = "update goods set goods_price_sale='$price',goods_url='$url' where id='$id'";
    $result = mysqli_query($con, $sql);
    if ($result) {
        //  打印日志
        $sql = "insert into goods_admin(admin_id,goods_id,operation_time,operation_name) values ('$admin_id','$id','$operation_time','商品信息修改')";
        $result = mysqli_query($con, $sql);

        echo "<script>window.location.href='../../../../yongtong/views/admin/admin_goods.php'</script>";
    }

}

// 关闭数据库
mysqli_close($con);
?>
