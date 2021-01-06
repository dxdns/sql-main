---
title: "gerar código de balança"
date: "2020-01-01"
---
em todos os produtos com unidade comercial **kg**
<code>update produtos
set barras = '2' || lpad(id_produto, 4, '0')||''
where unidade_comecial = 'KG'
</code>