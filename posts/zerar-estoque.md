---
title: "zerar estoque de produtos negativos"
date: "2020-01-01"
---

<code>update PRODUTOS set ESTOQUE = 0
where estoque < 0
</code>