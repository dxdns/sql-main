---
title: "corrige diferença no relatório de vendas por período > cfop"
date: "2020-01-01"
---

<code>update nfce_itens set total_item = valor_total
where total_item <> valor_total and cancelado = 'N'
</code>