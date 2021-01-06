---
title: "corrige valor unitário dos itens nfce"
date: "2020-01-01"
---

<code>update nfce_itens set total_item = valor_unitario * quantidade
where id_nfce = x
</code>