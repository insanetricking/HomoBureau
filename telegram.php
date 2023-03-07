<?php
//  https://api.telegram.org/bot5899945970:AAHua1TfaXzzy5ampXJoOLc2jAgoeKN_Rs0/getUpdates,
// где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее 



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['user_name'])) {
        $name = $_POST['user_name'];
    }
    if (isset($_POST['user_phone'])) {
        $phone = $_POST['user_phone'];
    }
    if (isset($_POST['site'])) {
        $site = $_POST['site'];
    }
   

    $chat_id = '-919859000';
    $message_bot =  urlencode("Заявку на сайте " . $site . " :\n<b>Имя Клиента: </b>" . $name . "\n<b>Номер Клиента: </b>" . $phone );
    $sendurl = "https://api.telegram.org/bot5852568540:AAHvIb8Du8IMjgrCcEBE1EA71eNgaCYzy5E/sendMessage?disable_web_page_preview=true&chat_id=" . $chat_id . "&text=" . $message_bot . "&parse_mode=HTML";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "$sendurl");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_exec($ch);
    curl_close($ch);

    echo "Ваше сообщение отправлено!";
}

?>