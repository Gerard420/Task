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
    <link rel="stylesheet" href="../../styles/admin/admin_goods.css" lang="css">
</head>
<body>
<div id="root_admin_goods"></div>
<div class="goods_text" id="goods_text">
    <div class="table_information" id="table_information">
        <div class="center_wrap">
            <form action="" method="POST">
                <table class="goods_table">
                    <tr class="table_title">
                        <th class="list_item">序号</th>
                        <th class="list_item">商品ID</th>
                        <th class="list_item list_item_big">商品名称</th>
                        <th class="list_item">商品价格</th>
                        <th class="list_item list_item_big">商品图片链接</th>
                        <th class="list_item ">库存数量</th>
                        <th class="list_item">操作</th>
                        <th class="list_item">操作</th>
                    </tr>
                    <!--  搜索  -->
                    <?php
                    session_start();
                    @$admin_id = $_SESSION["admin_id"];

                    //  连接数据库
                    $con = mysqli_connect("localhost", "root", "", "yongtong");
                    //  中文转码
                    mysqli_query($con, 'SET NAMES UTF8');
                    if (!$con) {
                        die(mysqli_connect_error());
                    }

                    //  左连表
                    //  $sql = "select g.goods_id,w.goods_name,g.goods_price_sale,g.goods_url,w.goods_quantity from goods g left join warehouse w on g.goods_id = w.goods_id";
                    // $sql = "select p.id,w.goods_id,w.goods_name,p.purchase_quantity,p.purchase_price from purchase p left join warehouse w on p.goods_id=w.goods_id";
                    //  创建视图create view goods_view as $sql
                    $sql = "select * from goods_view ORDER BY id";
                    $result = mysqli_query($con, $sql);

                    if (isset($_POST["admin_goods_btn"])) {
                        $text = $_POST["goods_information"];
                        $sql = $sql . " where (goods_id like '%$text%') or (goods_name like '%$text%')";
                    }

                    $result = mysqli_query($con, $sql);
                    if (!$result) {
                        die(mysqli_errno($con));
                    }
                    //  遍历
                    $order = 1;
                    while ($row = mysqli_fetch_row($result)) {
                        $id = $row[0];
                        $name_order = "order" . "$id";
                        $name_id = "id" . "$id";
                        $name_name = "name" . "$id";
                        $name_price = "price" . "$id";
                        $name_url = "img_url" . "$id";
                        $name_number = "number" . "$id";
                        $name_delete = "btn_delete" . "$id";
                        $name_update = "btn_update" . "$id";
                        echo "
                            <tr class='table_list'>
                                            <td class='list_item'>
                                                <input value='$order' name='$name_order' id='$name_order' class='$name_order' disabled>
                                            </td>
                                            <td class='list_item'>
                                                <input type='text' value='$row[1]' name='$name_id' class='$name_id' id='$name_id' disabled>
                                            </td>
                                            <td class='list_item list_item_big'>
                                                <input  type='text' value='$row[2]' name='$name_name' class='$name_name' id='$name_name' disabled>
                                            </td>
                                            <td class='list_item'>
                                                <input  type='text' value='$row[3]' name='$name_price' class='$name_price' id='$name_price' disabled>
                                            </td>
                                            <td class='list_item list_item_big'>
                                                <input type='text' value='$row[4]' class='$name_url' id='$name_url' name='$name_url' disabled>
                                            </td>
                                            <td class='list_item'>
                                                <input type='text' value='$row[5]' name='$name_number' class='$name_number' id='$name_number' disabled>
                                            </td>
                                            <td class='list_item list_btn btn_delete'>
                                                <input type='submit' value='下架' name='$name_delete'>
                                            </td>
                                            <td class='list_item list_btn btn_update'>
                                                <input type='submit' value='修改' name='$name_update'>
                                            </td>
                            </tr>
                        ";
                        $order++;
                    };

                    $sql = "select * from goods_view ORDER BY id DESC";
                    $result = mysqli_query($con, $sql);
                    $row = mysqli_fetch_row($result);
                    $row_number = $row[0];
                    for ($i = 1; $i <= $row_number; $i++) {
                        if (isset($_POST["btn_delete$i"])) {
                            //  操作日志
                            date_default_timezone_set("Asia/Shanghai");
                            $date = date("Y-m-d H:i");
                            $operation_time = "$date";
                            $sql = "select * from goods_view where id=$i";
                            $result = mysqli_query($con, $sql);
                            $row = mysqli_fetch_row($result);
                            $goods_id = "$row[1]";
                            $sql = "insert into goods_admin(admin_id,goods_id,operation_time,operation_name) values ('$admin_id','$goods_id','$operation_time','商品下架')";
                            $result = mysqli_query($con, $sql);
                            //  删除
                            $sql = "delete from goods_view where id=$i";
                            $res = mysqli_query($con, $sql);
                            $sql = "delete from goods where id=$i";
                            $res = mysqli_query($con, $sql);
                        }
                        if (isset($_POST["btn_update$i"])) {
                            //  修改
                            $sql = "select id from goods_view where id=$i";
                            $result = mysqli_query($con, $sql);
                            $row = mysqli_fetch_row($result);
                            $id_information = "$row[0]";
                            echo "<script>window.location.href='../../../../yongtong/views/admin/admin_goods_update.php?id_information=$id_information'</script>";
                        }
                    }
                    //  关闭数据库
                    mysqli_close($con);

                    ?>
                </table>
            </form>
        </div>
    </div>
</div>
</body>
<script type="module" src="../../module/js/admin/admin_goods.js"></script>

</html>





