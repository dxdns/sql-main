---
title: "reordenar id dos produtos"
date: "2020-01-01"
---

<code>
**--1**
update produtos set id_produto = id_produto - 9999999;

**--2**
update produtos set id_produto = 0 where id_produto = x;

**--3**
update produtos set id_produto = 1 + (select max(i.id_produto) from produtos i);
</code>