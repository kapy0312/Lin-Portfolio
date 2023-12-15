
$('#co-submit').on('click', function () {

    event.preventDefault();

    var DataArray = new Array(100);

    DataArray[0] = 1;
    DataArray[1] = $('#co-name').val();
    DataArray[2] = $('#co-email').val();
    DataArray[3] = $('#co-subject').val();
    DataArray[4] = $('#co-message').val();

    // Email_Contact = "寄信者：" + RequestArray[1] + "\n寄信者Email：" + Email_Address + "\n內容：\n" + Email_Contact;
    // Email_Name = "RequestArray[3]";
    // Email_Address = "kapy0312@gmail.com"

    // 檢查任意一個 val() 是否為空
    if (DataArray[1] === '' || DataArray[2] === '' || DataArray[3] === '' || DataArray[4] === '') {
        // 如果任意一個為空，執行相應的條件
        //console.log('請填寫完整資訊');
        alert('請填寫完整資訊'); // 处理错误情况
        // 在這裡可以加上其他處理空值的程式碼
    } else {
        // 如果都不為空，執行其他操作
        $.ajax({
            url: google_apps_script_url,
            type: 'POST',
            dataType: 'text',
            data: JSON.stringify({ DataArray: DataArray }),
            contentType: 'text/plain; charset=utf-8',
            success: function (response) {
                alert(response); // 显示成功或错误消息
                
                $('#co-name').val('');
                $('#co-email').val('');
                $('#co-subject').val('');
                $('#co-message').val('');
            },
            error: function () {
                alert('Request Failed'); // 处理错误情况
            }
        });
    }
});