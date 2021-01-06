---
title: "comparar nfce itens valor total"
date: "2020-01-01"
---

<code>with recursive itens as (
select id_nfce, sum(total_item) as total from nfce_itens where id_nfce in (
SELECT id FROM nfce where data_venda between '2020/09/01' and '2020/09/30' and nfce_status = 'AUTORIZADO'
) and cancelado = 'N' --and valor_total <> total_item
group by id_nfce
)


select a.*, itens.*, total - valor_final as diferenca
from (SELECT id, valor_final FROM nfce where data_venda between '2020/09/01' and '2020/09/30' and nfce_status = 'AUTORIZADO') a
left join itens on itens.id_nfce = a.id
where valor_final <> total


</code>