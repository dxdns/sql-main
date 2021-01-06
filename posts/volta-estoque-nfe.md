---
title: "adicionar estoque de nfe que não voltou após cancelar"
date: "2020-01-01"
---

<code>merge into PRODUTOS b
using NFE_ITENS p
on p.id_produto = b.id_produto and p.id_nfe = X
when matched then
update set b.estoque = b.estoque + p.quantidade
</code>