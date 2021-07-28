
Bước 1: git clone https://github.com/vuphuclam198/AHT.git trong folder AHT

Bước 2: Truy cập phpmyadmin -> SQL -> import 3 file cms_block và cms_block_store và widget_instance.sql: https://drive.google.com/drive/folders/1THvgC3A60zXEVwBgwOKITySCH5or_Gxd?usp=sharing

Bước 3: Run sudo bin/magento setup:di:compile && sudo bin/magento setup:upgrade && sudo bin/magento s:s:d -f && sudo chmod -R 777 * && sudo bin/magento c:c

Bước 4: để sử dụng banner-slider thì cần phải setup extension banner slider của mageplaza
ở đây tôi install bằng composer

composer require mageplaza/module-banner-slider
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy

Bước 5: Truy cập Admin -> Content -> Configuration -> Main Website -> Edit chọn AHT Clothing , thêm logo có ảnh trong folder img, link: 
https://drive.google.com/drive/u/0/folders/1mNw8myJHmCjSJyagURSEOWdvEUWuQDA3?ths=true

sau đó xóa cache
