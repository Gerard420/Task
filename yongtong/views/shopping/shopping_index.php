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
    <link rel="stylesheet" href="../../styles/shopping/shopping_index.css" lang="css">
</head>
<body>
<div id="root_shopping_index"></div>
</body>
<script type="module" src="../../module/js/shopping/shopping_index.js"></script>
</html>

<?php
// 连接数据库
$con = mysqli_connect("localhost", "root", "", "yongtong");
//  中文转码
mysqli_query($con, 'SET NAMES UTF8');
if (!$con) {
    die(mysqli_connect_error());
}

$sql = "select * from goods_view";

// 模糊查询 like %多个字符 _单字符
// 如果表单提交按表单内容查找
if (isset($_POST["shopping_btn"])) {
    $text = $_POST["search_text"];
    $sql = $sql . " where goods_name like '%$text%'";
}

$result = mysqli_query($con, $sql);
if (!$result) {
    die(mysqli_errno($con));
}

// 逐行获取结果集中的数据
while ($row = mysqli_fetch_row($result)) {
    $row[4]='../../../yongtong/resources/img/'.$row[4];
    echo "<div class='shopping_goods_item'>
                            <a href='#'>
                            <div class='goods_item'>
                                <div class='shopping_good_img'>
                                    <img src='$row[4]'>
                                </div>
                                <div class='words'>
                                    <div class='words_title'>
                                        <h3 class='words_title'>$row[2]</h3>
                                    </div>
                                   <div class='words_info'>
                                        <h4 class='words_price'><span>￥</span>$row[3]</h4>
                                        <h4 class='words_num'><span>库存 </span>$row[5]<span></h4>
                                    </div>
                                </div>
                               </div>
                            </a>
               </div>";
}
$row = mysqli_num_rows($result);
if ($row % 4 == 2) {
    for ($i = 0; $i <= 2; $i++) {
        echo "<div class='shopping_goods_item shopping_goods_item_blank'></div>";
    }
} else if ($row % 4 == 3) {
    echo "<div class='shopping_goods_item shopping_goods_item_blank'></div>";
}

//  关闭数据库
mysqli_close($con);
?>
